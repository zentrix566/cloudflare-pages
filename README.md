# Zentrix566 云原生 ☁️

一个基于 **Vite + React** 的云原生主题网站，部署在 Cloudflare Pages。

## 🚀 特性

- ⚡ 基于 Vite 构建，快速开发
- 🎨 现代化 UI 设计，渐变色背景 + 毛玻璃效果
- ☁️ 云原生主题，展示核心概念和技术栈
- 📱 响应式设计，支持移动端
- 🌍 全球 CDN 加速，由 Cloudflare Pages 提供

## 📦 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:5173)
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🏗️ 项目结构

```
.
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 样式文件
│   ├── main.jsx         # 应用入口
│   └── index.css        # 全局样式
├── index.html           # HTML 模板
├── package.json         # 项目配置
└── vite.config.js       # Vite 配置
```

## 🌩️ 部署到 Cloudflare Pages

1. 将代码推送到 GitHub/GitLab 仓库
2. 在 Cloudflare Dashboard 中进入 Pages
3. 连接你的仓库
4. **构建设置**:
   - 构建命令: `npm run build`
   - 输出目录: `dist`
5. 点击部署完成！

Cloudflare Pages 会自动部署并提供 HTTPS 和全球 CDN。

## 🔧 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **部署**: Cloudflare Pages
- **语言**: JavaScript + JSX

## 📄 许可证

MIT

