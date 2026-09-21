#!/usr/bin/env node
/**
 * AstroGeo 标志 —— 位图重新导出脚本
 *
 * 读取各文件夹里的 .svg 矢量源，重新生成全部 PNG / WebP / favicon.ico。
 * 改完 SVG（配色、字形、粗细）后跑一次即可，不需要重新描图。
 *
 * 用法：
 *   cd tools
 *   npm install
 *   npm run build
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SIZES = [1024, 512, 256, 128, 64, 32];

const read = f => fs.readFileSync(path.join(ROOT, f));
const out = (f, buf) => {
  fs.writeFileSync(path.join(ROOT, f), buf);
  console.log('  ' + f);
};

/** SVG -> 指定边长的透明底 PNG Buffer */
function render(svgPath, size) {
  return sharp(read(svgPath), { density: 600 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** 导出一整套正方形尺寸 */
async function squareSet(svgPath, dir, base, sizes = SIZES) {
  for (const s of sizes) out(`${dir}/${base}-${s}.png`, await render(svgPath, s));
}

/** 导出 WebP（小尺寸标志用无损，大尺寸 banner 用有损） */
async function webp(svgPath, dest, { lossless = true, width } = {}) {
  let p = sharp(read(svgPath), { density: 600 });
  if (width) p = p.resize(width);
  out(dest, await (lossless ? p.webp({ lossless: true }) : p.webp({ quality: 92 })).toBuffer());
}

/** 按宽度导出 PNG（用于 banner 类非正方形素材） */
async function raster(svgPath, dest, width) {
  out(dest, await sharp(read(svgPath), { density: 600 })
    .resize(width).png({ compressionLevel: 9 }).toBuffer());
}

/** 组装 PNG 内嵌格式的 ICO 容器 */
function buildIco(entries) {
  const n = entries.length;
  const head = Buffer.alloc(6);
  head.writeUInt16LE(0, 0);   // reserved
  head.writeUInt16LE(1, 2);   // type = icon
  head.writeUInt16LE(n, 4);   // count
  const dir = Buffer.alloc(16 * n);
  let offset = 6 + 16 * n;
  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o);      // 256 必须写 0
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt8(0, o + 2);                           // 调色板数
    dir.writeUInt8(0, o + 3);                           // reserved
    dir.writeUInt16LE(1, o + 4);                        // planes
    dir.writeUInt16LE(32, o + 6);                       // 位深
    dir.writeUInt32LE(e.buf.length, o + 8);             // 数据长度
    dir.writeUInt32LE(offset, o + 12);                  // 数据偏移
    offset += e.buf.length;
  });
  return Buffer.concat([head, dir, ...entries.map(e => e.buf)]);
}

(async () => {
  console.log('01-mark/');
  await squareSet('01-mark/astrogeo-mark.svg', '01-mark', 'astrogeo-mark');
  await webp('01-mark/astrogeo-mark.svg', '01-mark/astrogeo-mark.webp');
  await squareSet('01-mark/astrogeo-mark-rounded.svg', '01-mark', 'astrogeo-mark-rounded');
  await webp('01-mark/astrogeo-mark-rounded.svg', '01-mark/astrogeo-mark-rounded.webp');

  console.log('02-mono/');
  for (const tone of ['light', 'dark']) {
    const src = `02-mono/astrogeo-mark-mono-${tone}.svg`;
    await squareSet(src, '02-mono', `astrogeo-mark-mono-${tone}`);
    await webp(src, `02-mono/astrogeo-mark-mono-${tone}.webp`);
  }

  console.log('03-favicon/');
  // 16-32px 用简化版，48 以上用完整版
  const pick = s => (s <= 32 ? '03-favicon/astrogeo-mark-simple.svg' : '01-mark/astrogeo-mark.svg');
  for (const s of [16, 24, 32, 48, 192, 256, 512]) {
    out(`03-favicon/favicon-${s}.png`, await render(pick(s), s));
  }
  const entries = [];
  for (const s of [16, 24, 32, 48, 64, 128, 256]) {
    entries.push({ size: s, buf: await render(pick(s), s) });
  }
  out('03-favicon/favicon.ico', buildIco(entries));

  console.log('04-lockup/');
  await raster('04-lockup/astrogeo-lockup.svg', '04-lockup/astrogeo-lockup-2000.png', 2000);
  await raster('04-lockup/astrogeo-lockup.svg', '04-lockup/astrogeo-lockup-1000.png', 1000);
  await webp('04-lockup/astrogeo-lockup.svg', '04-lockup/astrogeo-lockup.webp',
    { lossless: false, width: 2000 });

  console.log('05-social-preview/');
  await raster('05-social-preview/astrogeo-social-preview.svg',
    '05-social-preview/astrogeo-social-preview-1280x640.png', 1280);
  await webp('05-social-preview/astrogeo-social-preview.svg',
    '05-social-preview/astrogeo-social-preview.webp', { lossless: false, width: 1280 });

  console.log('06-alternates/');
  for (const base of [
    'astrogeo-concept-B-horizon',
    'astrogeo-concept-C-monogram',
    'astrogeo-concept-D-astral-a',
  ]) {
    await squareSet(`06-alternates/${base}.svg`, '06-alternates', base, [1024, 512]);
  }

  console.log('\n完成。');
})().catch(e => { console.error('导出失败：' + e.message); process.exit(1); });
