/*
 * @Title: dumi配置
 * @Author: huangjitao
 * @Date: 2023-04-20 19:08:14
 * @Description: description of this file
 */
import { defineConfig } from 'dumi';

const repo = 'graceco';

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
  // 使用gh-pages部署
  base: `/${repo}/`,
  publicPath: process?.env?.NODE_ENV === 'development' ? `/${repo}/` : './',
  // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  exportStatic: {},
});
