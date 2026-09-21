<div align="center">

<img src="01-mark/astrogeo-mark-512.png" width="180" alt="AstroGeo Logo">

# AstroGeo

**Research Group · North China University of Water Resources and Electric Power**

[中文](README.md) · [**English**](README.en.md)

</div>

---

Visual identity assets for the AstroGeo research group. The name combines **Astro** (celestial objects, star fields, remote sensing) and **Geo** (the Earth, geology, hydrology).

The mark centres on an orbiting track around a globe. The graticule sphere stands for the Earth and its geological structure; a tilted orbit sweeps through it, carrying a single gold star that serves as the focal point. Three layers of waves are folded into the base of the sphere, echoing the university's water-conservancy and hydropower heritage. Every element stays inside the inscribed circle, so nothing is clipped by GitHub's circular avatar crop.

## Repository layout

```
AstroGeo-Logo/
├── README.md               Chinese documentation
├── README.en.md            English documentation (this file)
├── LICENSE                 CC BY-NC-ND 4.0
├── index.html              Preview page (open in a browser: sizes, light/dark backgrounds)
├── 01-mark/                Primary mark
│   ├── astrogeo-mark.svg             Vector source (recolour / rescale losslessly)
│   ├── astrogeo-mark-1024.png        ← use this for the GitHub team avatar
│   ├── astrogeo-mark-{512,256,128,64,32}.png
│   ├── astrogeo-mark.webp            Lossless
│   ├── astrogeo-mark-rounded.svg     Rounded-square version
│   └── astrogeo-mark-rounded-{1024…32}.png / .webp
├── 02-mono/                Single-colour versions
│   ├── astrogeo-mark-mono-light.svg / -{1024…32}.png / .webp   Reversed, for dark backgrounds
│   ├── astrogeo-mark-mono-dark.svg  / -{1024…32}.png / .webp   Navy, for light backgrounds & print
│   └── on-background-preview.png     How both look on their backgrounds
├── 03-favicon/             Icons for websites and desktops
│   ├── favicon.ico                   Seven sizes: 16/24/32/48/64/128/256
│   ├── favicon-{16,24,32,48,192,256,512}.png
│   ├── astrogeo-mark-simple.svg      Simplified source for small sizes
│   └── size-comparison.png           Full vs. simplified at 16/24/32px
├── 04-lockup/              Horizontal lockup
│   ├── astrogeo-lockup.svg
│   ├── astrogeo-lockup-2000.png      ← use this for the README header
│   ├── astrogeo-lockup-1000.png
│   └── astrogeo-lockup.webp
├── 05-social-preview/      Repository social preview
│   ├── astrogeo-social-preview.svg
│   ├── astrogeo-social-preview-1280x640.png   ← use this for GitHub Social preview
│   └── astrogeo-social-preview.webp
├── 06-alternates/          Alternative concepts (not adopted, kept for reference)
│   ├── astrogeo-concept-B-horizon.svg  / -1024.png / -512.png
│   ├── astrogeo-concept-C-monogram.svg / -1024.png / -512.png
│   └── astrogeo-concept-D-astral-a.svg / -1024.png / -512.png
└── tools/                  Re-export script (optional)
```

## Which file goes where

| Where | File |
| --- | --- |
| GitHub team avatar | `01-mark/astrogeo-mark-1024.png` |
| Repository social preview | `05-social-preview/astrogeo-social-preview-1280x640.png` |
| README header | `04-lockup/astrogeo-lockup-2000.png` |
| Website favicon | `03-favicon/favicon.ico` |
| Papers / print | `02-mono/astrogeo-mark-mono-dark.svg` |
| Stamps / watermarks on dark | `02-mono/astrogeo-mark-mono-light.svg` |
| Slides / Notion / Slack | `01-mark/astrogeo-mark-rounded-1024.png` |

## Colour palette

| Value | Name | Use |
| --- | --- | --- |
| `#040A14` | Deep space | Primary mark background |
| `#0A1E3C` `#123A6B` | Deep blue | Sphere, lockup background |
| `#2FC8DB` | Cyan | Orbit, crossbar, accents |
| `#7FE3EE` `#8FE9F5` | Light cyan | Graticule, sphere outline |
| `#FFC24B` | Star gold | Focal highlight — used in exactly one place |

## About small sizes

The mark carries a graticule and wave detail that turns to mush at 16px. So **16 / 24 / 32px use a dedicated simplified version** (`03-favicon/astrogeo-mark-simple.svg`): the graticule is dropped, the waves are reduced to two, and the sphere outline, orbit and star are all thickened. Inside `favicon.ico`, 16–32px use the simplified artwork while 48px and above use the full version.

`03-favicon/size-comparison.png` shows both versions at 16/24/32px, pixel for pixel.

## Editing and re-exporting

Everything is drawn as vectors. To change colours or proportions, edit `01-mark/astrogeo-mark.svg` directly — no redrawing needed.

To regenerate the raster assets after an edit:

```bash
cd tools
npm install
npm run build
```

The script reads the `.svg` sources in each folder and regenerates every PNG, WebP and `favicon.ico`.

## Online preview

The `index.html` at the repository root can be hosted directly with GitHub Pages: Settings → Pages → Source → `main` branch, root folder. That gives you a live preview page of the whole identity.

## License

The logo and graphic assets in this repository are licensed under **[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)**. See [`LICENSE`](LICENSE) for the full terms.

- ✅ You may share and redistribute, with **attribution** and an indication of any changes
- ❌ **No commercial use**
- ❌ **No modified versions may be distributed** (this includes recoloured, reshaped or re-lettered variants)

Suggested credit line:

> Logo © NCWU-AstroGeo, licensed under CC BY-NC-ND 4.0

**The names "AstroGeo" and "North China University of Water Resources and Electric Power" are not covered by this license**, and no trademark or naming rights are granted. For commercial use or a modified version of the mark, please contact the group.
