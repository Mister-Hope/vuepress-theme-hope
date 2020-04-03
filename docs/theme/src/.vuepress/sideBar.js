/*
 * @Author: Mr.Hope
 * @Date: 2019-10-11 12:43:31
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2020-04-02 16:47:52
 * @Description: 侧边栏配置
 */

module.exports = {
  zh: {
    '/guide/': [
      {
        title: '快速上手',
        icon: 'creativefill',
        children: ['', 'install']
      },
      {
        title: '布局',
        icon: 'layout',
        prefix: 'layout/',
        children: ['', 'navbar', 'sidebar', 'breadcrumb', 'page', 'home']
      },
      {
        title: '新增功能',
        icon: 'discoverfill',
        prefix: 'feature/',
        children: [
          '',
          'icon',
          'blog',
          'comment',
          'themecolor',
          'encrypt',
          'component',
          'fullscreen',
          'typescript'
        ]
      },
      {
        title: 'Markdown 增强',
        icon: 'markdown',
        prefix: 'markdown/',
        children: ['', 'align', 'sup-sub', 'footnote', 'tex', 'flowchart']
      }
    ],

    '/api/': [
      '',
      'themeConfig',
      'page',
      'stylus',
      {
        title: '插件配置',
        prefix: 'plugin/',
        icon: 'extension',
        children: [
          '',
          'container',
          'copyright',
          'md-enhance',
          'medium-zoom',
          'pwa'
        ]
      }
    ],

    '/basic/': [
      {
        title: 'Markdown',
        prefix: 'markdown/',
        icon: 'markdown',
        children: [
          '',
          'demo',
          {
            title: 'Emoji',
            prefix: 'emoji/',
            icon: 'emoji',
            children: ['', 'people', 'nature', 'object', 'locate', 'symbol']
          }
        ]
      },
      {
        title: 'Vuepress',
        prefix: 'vuepress/',
        icon: 'vue',
        children: [
          '',
          'file',
          'plugin',
          'theme/',
          'theme/config',
          'command',
          'case'
        ]
      }
    ],

    '/': ['', 'guide/', 'api/', 'basic/', 'FAQ/']
  },
  en: {
    '/en/guide/': [
      {
        title: 'Get Started',
        icon: 'creativefill',
        children: ['', 'install']
      },
      {
        title: 'Outlook',
        icon: 'layout',
        prefix: 'layout/',
        children: ['', 'navbar', 'sidebar', 'breadcrumb', 'page', 'home']
      },
      {
        title: 'New Features',
        icon: 'discoverfill',
        prefix: 'feature/',
        children: [
          '',
          'icon',
          'blog',
          'comment',
          'themecolor',
          'encrypt',
          'component',
          'fullscreen',
          'typescript'
        ]
      },
      {
        title: 'Markdown enhance',
        icon: 'markdown',
        prefix: 'markdown/',
        children: ['', 'align', 'sup-sub', 'footnote', 'tex', 'flowchart']
      }
    ],

    '/en/api/': [
      '',
      'themeConfig',
      'page',
      'stylus',
      {
        title: 'Plugins',
        prefix: 'plugin/',
        icon: 'extension',
        children: [
          '',
          'container',
          'copyright',
          'md-enhance',
          'medium-zoom',
          'pwa'
        ]
      }
    ],

    '/en/basic/': [
      {
        title: 'Markdown',
        prefix: 'markdown/',
        icon: 'markdown',
        children: ['', 'demo', 'emoji']
      },
      {
        title: 'Vuepress',
        prefix: 'vuepress/',
        icon: 'vue',
        children: [
          '',
          'file',
          'plugin',
          'theme/',
          'theme/config',
          'command',
          'case'
        ]
      }
    ],

    '/en/': ['', 'guide/', 'api/', 'basic/', 'FAQ/']
  }
};
