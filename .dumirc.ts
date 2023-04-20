/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2023-04-20 19:08:14
 * @Description: description of this file
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'graceco',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  base:
    process.env.NODE_ENV === 'production'
      ? `https://github.com/WindDancerUBI/graceco/`
      : '/',
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `https://github.com/WindDancerUBI/graceco/`
      : '/',
});
