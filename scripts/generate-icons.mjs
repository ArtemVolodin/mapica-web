/**
 * Regenerate favicon + app icons from public/mapica-logo.png
 * Crops the gradient "M" mark only — optimized for Safari tab sizes.
 * Run: npm run icons
 */
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public/mapica-logo.png");

const BG = { r: 3, g: 3, b: 8, alpha: 1 };

/** Square 512px master — gradient M mark only */
async function buildMarkSource() {
  const meta = await sharp(logoPath).metadata();

  return sharp(logoPath)
    .extract({
      left: 0,
      top: 0,
      width: Math.min(768, meta.width),
      height: Math.min(580, meta.height),
    })
    .resize(512, 512, {
      fit: "contain",
      background: BG,
      position: "north",
    })
    .flatten({ background: BG });
}

/** Zoom mark to ~88% of canvas — readable at 16×16 in Safari */
function markForSize(pipeline, size) {
  const inner = Math.round(size * 0.88);
  const pad = Math.floor((size - inner) / 2);

  return pipeline
    .clone()
    .resize(inner, inner, {
      fit: "contain",
      background: BG,
      kernel: sharp.kernel.lanczos3,
    })
    .extend({
      top: pad,
      bottom: size - inner - pad,
      left: pad,
      right: size - inner - pad,
      background: BG,
    })
    .flatten({ background: BG });
}

async function writePng(pipeline, file, size) {
  await markForSize(pipeline, size).png().toFile(join(root, file));
  console.log("wrote", file, `(${size}px)`);
}

const mark = await buildMarkSource();

await mark.clone().png().toFile(join(root, "public/mapica-mark.png"));
console.log("wrote public/mapica-mark.png (512px master)");

const sizes = [
  { file: "src/app/icon.png", size: 32 },
  { file: "public/icon-48.png", size: 48 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of sizes) {
  await writePng(mark, file, size);
}

const png16 = await markForSize(mark, 16).png().toBuffer();
const png32 = await markForSize(mark, 32).png().toBuffer();
const png48 = await markForSize(mark, 48).png().toBuffer();
const ico = await toIco([png16, png32, png48]);

for (const file of ["src/app/favicon.ico", "public/favicon.ico"]) {
  writeFileSync(join(root, file), ico);
  console.log("wrote", file);
}
