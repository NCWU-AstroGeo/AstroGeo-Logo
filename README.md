<div align="center">

<img src="01-mark/astrogeo-mark-512.png" width="180" alt="AstroGeo Logo">

# AstroGeo

**华北水利水电大学 · 科研团队**
North China University of Water Resources and Electric Power

</div>

---

AstroGeo 团队视觉标识资源库。名称由 **Astro**（天体、星空、遥感观测）与 **Geo**（地球、地质、水文）组合而成。

标志以「星轨环绕地球」为核心意象：经纬网球体代表地球与地质构造，一道倾斜星轨穿过球体，轨道末端一颗金色星体作为视觉焦点，球体底部融入三层水波，呼应学校水利水电背景。所有元素都控制在中心内切圆内，适配 GitHub 头像的圆形裁切。

## 目录结构

```
AstroGeo-Logo/
├── index.html              预览页（浏览器打开，含尺寸与深浅底效果对比）
├── 01-mark/                主标志
│   ├── astrogeo-mark.svg             矢量源（可无损改色改字）
│   ├── astrogeo-mark-1024.png        ← GitHub 团队头像用这个
│   ├── astrogeo-mark-{512,256,128,64,32}.png
│   ├── astrogeo-mark.webp            无损压缩
│   ├── astrogeo-mark-rounded.svg     方形圆角版
│   └── astrogeo-mark-rounded-{1024…32}.png / .webp
├── 02-mono/                单色版
│   ├── astrogeo-mark-mono-light.svg / -{1024…32}.png / .webp   反白，深色底用
│   ├── astrogeo-mark-mono-dark.svg  / -{1024…32}.png / .webp   深蓝，浅色底与印刷用
│   └── on-background-preview.png     两种底色的实际效果
├── 03-favicon/             图标 · 网站与桌面
│   ├── favicon.ico                   内含 16/24/32/48/64/128/256 七个尺寸
│   ├── favicon-{16,24,32,48,192,256,512}.png
│   ├── astrogeo-mark-simple.svg      小尺寸简化版源文件
│   └── size-comparison.png           原版 vs 简化版在 16/24/32px 的对比
├── 04-lockup/              横向组合标志
│   ├── astrogeo-lockup.svg
│   ├── astrogeo-lockup-2000.png      ← README 页头用这个
│   ├── astrogeo-lockup-1000.png
│   └── astrogeo-lockup.webp
├── 05-social-preview/      仓库社交预览图
│   ├── astrogeo-social-preview.svg
│   ├── astrogeo-social-preview-1280x640.png   ← GitHub Social preview 用这个
│   └── astrogeo-social-preview.webp
├── 06-alternates/          备选方案（未采用，留档）
│   ├── astrogeo-concept-B-horizon.svg  / -1024.png / -512.png
│   ├── astrogeo-concept-C-monogram.svg / -1024.png / -512.png
│   └── astrogeo-concept-D-astral-a.svg / -1024.png / -512.png
└── tools/                  重新导出脚本（可选）
```

## 放在哪里用哪个文件

| 用途 | 文件 |
| --- | --- |
| GitHub 团队头像 | `01-mark/astrogeo-mark-1024.png` |
| 仓库 Social preview | `05-social-preview/astrogeo-social-preview-1280x640.png` |
| README 页头 | `04-lockup/astrogeo-lockup-2000.png` |
| 网站 favicon | `03-favicon/favicon.ico` |
| 论文 / 印刷 | `02-mono/astrogeo-mark-mono-dark.svg` |
| 印章 / 深色底水印 | `02-mono/astrogeo-mark-mono-light.svg` |
| PPT / Notion / Slack | `01-mark/astrogeo-mark-rounded-1024.png` |

## 配色

| 色值 | 名称 | 用途 |
| --- | --- | --- |
| `#040A14` | 深空底色 | 主标志背景 |
| `#0A1E3C` `#123A6B` | 深空蓝 | 球体、组合标志背景 |
| `#2FC8DB` | 科技青 | 轨道、横画、强调 |
| `#7FE3EE` `#8FE9F5` | 浅青 | 经纬网、球体轮廓 |
| `#FFC24B` | 星体金 | 星体单点提亮（仅此一处） |

## 关于小尺寸

标志含经纬网与水波细节，在 16px 下会糊成一团。因此 **16 / 24 / 32px 单独使用简化版**（`03-favicon/astrogeo-mark-simple.svg`）：去掉经纬网格、水波减到 2 条，球体与轨道描边加粗、星体放大。`favicon.ico` 内部就是 16-32 用简化版、48 以上用完整版混合打包。

`03-favicon/size-comparison.png` 是两版在 16/24/32px 的像素级对比。

## 修改与重新导出

所有图形都是矢量绘制，改 `01-mark/astrogeo-mark.svg` 里的颜色或尺寸即可，无需重新描图。

改完要重新导出位图的话：

```bash
cd tools
npm install
npm run build
```

脚本会读各文件夹里的 `.svg` 源文件，重新生成全部 PNG、WebP 与 `favicon.ico`。

## 启用在线预览

仓库根目录的 `index.html` 可直接用 GitHub Pages 托管：Settings → Pages → Source 选 `main` 分支根目录，即可获得一个在线的标志预览页。
