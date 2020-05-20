---
icon: align
---

# 自定义对齐

## 配置

```js {6}
module.exports = {
  plugin: [
    "md-enhance",
    {
      // 启用自定义对其
      align: true,
    },
  ],
};
```

## 语法

通过对 `vuepress-plugin-container` 进行额外的配置注入，你可以使用

    ::: center
    要居中的段落
    :::

    ::: right
    要居右的段落
    :::

来对你的段落对齐进行自定义。

如果你需要嵌套，则外面的 `:::` 需要依次增加。

```md
:::: right
右对齐文字

右对齐文字

::: center
居中文字
:::

右对齐文字

::::
```

## 演示

:::: danger W.I.P
本主题仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果您在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/Mister-Hope/vuepress-theme-hope/issues)。
:::
::::

```md
:::: danger W.I.P
本主题仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果您在使用过程中遇到了 bug，可以

::: right
[提一个 issue](https://github.com/Mister-Hope/vuepress-theme-hope/issues)。
:::
::::
```
