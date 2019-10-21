/* eslint-disable no-console */
/*
 * @Author: Mr.Hope
 * @Date: 2019-10-17 19:57:30
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-10-20 16:44:42
 * @Description: 复制主题
 */

const fs = require('fs');
const copy = require('./copy');

// 删除并重新创建 theme 文件夹
try {
  fs.rmdirSync('./tests/demo/.vuepress/theme', { recursive: true });
} catch (err) {
  console.log('theme 目录不存在');
}

fs.mkdirSync('./tests/demo/.vuepress/theme');

// 复制需要的文件到相应文件夹
copy('./src', './tests/demo/.vuepress/theme');
copy('./package.json', './tests/demo/.vuepress/theme/package.json');

console.log('copy finished');
