/* eslint-disable max-lines-per-function */
import { PluginConfig } from "vuepress-types";
import { ResolvedHopeThemeConfig } from "../../types";
import { resolve } from "path";

const pluginConfig = (options: ResolvedHopeThemeConfig): PluginConfig[] => {
  // 设置作者
  if (options.comment && options.author)
    options.comment.author = options.author;

  return [
    // FIXME: 目前启用导航栏会报错，原因正在寻找中
    /** 使 VuePress 站点支持简洁链接 */
    // ['clean-urls', { normalSuffix: '/' }],

    /** 评论插件 */
    ["@mr-hope/comment", options.comment],

    /** 全屏插件 */
    ["@mr-hope/components"],

    /** 更新时间插件 */
    [
      "@mr-hope/last-update",
      options.lastUpdated === false
        ? false
        : options.lastUpdatedTransformer
        ? { transformer: options.lastUpdatedTransformer }
        : {},
    ],

    /** PWA 插件 */
    ["@mr-hope/pwa", options.pwa],

    ["@mr-hope/seo", options.seo === false ? false : options.seo],

    [
      "@mr-hope/sitemap",
      options.hostname ? { hostname: options.hostname } : false,
    ],

    /** 自动激活侧边栏标题 */
    ["@vuepress/active-header-links", options.activeHeaderLinks],

    /** 博客插件 */
    [
      "@vuepress/blog",
      options.blog === false
        ? false
        : {
            frontmatters: [
              {
                id: "tag",
                keys: ["tag", "tags"],
                path: "/tag/",
                layout: "Blog",
                scopeLayout: "Blog",
              },
              {
                id: "category",
                keys: ["category", "categories"],
                path: "/category/",
                layout: "Blog",
                scopeLayout: "Blog",
              },
            ],
          },
    ],
    ["@vuepress/last-updated", false],

    /** 图片缩放插件 */
    [
      "@vuepress/medium-zoom",
      {
        /** 设置选项 */
        options: {
          /** 缩放后图片的外间距 */
          margin: 16,
          /** 背景颜色 */
          background: "",
          /** 关闭缩放需要滚动的像素数 */
          scrollOffset: 40,
        },
      },
    ],

    /** 进度条 */
    "@vuepress/nprogress",

    /** 搜索插件 */
    [
      "@vuepress/search",
      {
        /** 搜索展示数量 */
        searchMaxSuggestions: options.searchMaxSuggestions || 10,
      },
    ],

    /** 复制操作处理 */
    [
      "copyright",
      {
        authorName: options.author,
        minLength: 100,
        clipboardComponent: resolve(__dirname, "../components/Clipboard.vue"),
      },
    ],

    /** Markdown 增强插件 */
    ["md-enhance", options.markdown || false],

    /** Chunk命名 */
    [
      "named-chunks",
      {
        pageChunkName: (page: any): string =>
          /^(?!\.)[^\\/:*?"<>|]{1,255}$/u.test(page.title)
            ? `page-${page.title}`
            : `page-${page.key.slice(1)}`,
        layoutChunkName: (layout: any): string =>
          `layout-${layout.componentName}`,
      },
    ],

    /** 平滑滚动 */
    ["smooth-scroll", options.smoothScroll !== false],

    /** typescript 支持 */
    ["typescript", {}],
  ];
};

export default pluginConfig;
