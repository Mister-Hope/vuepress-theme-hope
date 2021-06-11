import { getRootLangPath } from "@mr-hope/vuepress-shared";
import { path } from "@vuepress/utils";
import { usePalettePlugin } from "vuepress-plugin-palette";
import { pageInfoI18n, walineI18n } from "./i18n";

import type { PluginI18nConvert } from "@mr-hope/vuepress-shared";
import type { CommentOptions, PageInfoI18nConfig } from "../shared";
import type { Plugin, PluginObject } from "@vuepress/core";

export * from "../shared/types";

const commentPlugin: Plugin<CommentOptions> = (options, app) => {
  const { themeConfig } = app.options;
  const rootLangPath = getRootLangPath(app);
  const pageInfoI18nConfig =
    pageInfoI18n as PluginI18nConvert<PageInfoI18nConfig>;
  const walineI18nConfig = walineI18n as PluginI18nConvert<string>;

  pageInfoI18nConfig["/"] = pageInfoI18nConfig[rootLangPath];
  walineI18nConfig["/"] = walineI18nConfig[rootLangPath];

  const commentOptions: CommentOptions =
    Object.keys(options).length > 0
      ? (options as CommentOptions)
      : (themeConfig.comment as CommentOptions) || { type: "disable" };

  usePalettePlugin(app, {
    id: "hope",
    config: ".vuepress/styles/hope-config",
    palette: ".vuepress/styles/hope-palette",
  });

  const config: PluginObject = {
    name: "vuepress-plugin-comment2",

    alias: {
      "@Waline":
        commentOptions.type === "waline"
          ? path.resolve(__dirname, "../client/components/Waline.js")
          : "@mr-hope/vuepress-shared/client/noopModule.js",
    },

    define: () => ({
      COMMENT_OPTIONS: {
        hint: !themeConfig.pure,
        ...commentOptions,
      },
      PAGE_INFO_I18N: pageInfoI18nConfig,
      WALINE_I18N: walineI18nConfig,
    }),

    clientAppEnhanceFiles: path.resolve(__dirname, "../client/appEnhance.js"),

    plugins: [["reading-time2", { wordPerminute: options.wordPerminute }]],
  };

  // if (commentOptions.type === "vssue")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // config.plugins!.push(["@vssue/vuepress-plugin-vssue", commentOptions]);

  return config;
};

export default commentPlugin;