---
icon: question
category: FAQ
---

# Common problems

## Error when running

Please make sure your project depends on typescript and there is a valid tsconfig.json file in the working directory.

Also, make sure that your project has at least one TypeScript file included by it.

### error when parsing tsconfig.json

This problem is usually caused by ts-loader not finding tsconfig.json. Since the theme adds TypeScript support, you need to create a valid tsconfig.json inside your project.

A simple tsconfig.json is as follows:

```json
{
  "compilerOptions": {
    "target": "es5", // Any target except 'es3'
    "experimentalDecorators": true,
    "types": [
      "@mr-hope/vuepress-theme-types"
    ]
  },
  "include": [
    "src/.vuepress/enhanceApp.ts" // replace `src` with your doc folder
  ]
}
```

### Can't find corresponding types

Make sure to add `"@mr-hope/vuepress-theme-types"` to `compilerOptions.types`, because it is not in the`@ types` directory.

### No inputs were found in config file 'tsconfig.json'

This problem is usually caused by the absence of a TypeScript file in your project (or your tsconfig.json configuration is incorrect).

ts-loader requires that the include and exclude configuration items of tsconfig.json include at least one ts file in the project.

If your project does not have a ts file, to avoid this problem, you can create an empty ts file anywhere in your project and add it to the include of tsconfig.json.

A better solution is to solve this problem by creating an empty `enhanceApp.ts` in the`.vuepress` directory. If you already have `enhanceApp.js`, you can directly convert it to TS.

## Some page settings are invalid

You can first review the documentation to see if the setting **does not support partial configuration**.

**Support for partial configuration** means that the theme allows the configuration of the page to override the global configuration of the same name (same function), but not all functions meet this setting. For the sake of project compilation speed, some projects will not be loaded during the compilation phase after the global configuration is disabled, and they cannot be enabled locally.
