/**
 * Regenerate favicon + app icons from public/mapica-logo.png
 * Crops the gradient "M" mark (not the wordmark) for readable tab icons.
 * Run: npm run icons
 */
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public/mapica-logo.png");

/** Site background — matches favicon canvas */
const BG = { r: 3, g: 3, b: 8, alpha: 1 };

/** Build a square source image containing only the gradient M icon */
async function buildMarkSource() {
  const meta = await sharp(logoPath).metadata();

  // Tuned crop: gradient M mark only (no "mapica" wordmark)
  const markOnly = await sharp(logoPath)
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
    });

  return markOnly;
}

async function writePng(pipeline, file, size) {
  await pipeline
    .clone()
    .resize(size, size, {
      fit: "contain",
      background: BG,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: size <= 48 ? 0.8 : 0.4 })
    .png({ compressionLevel: 9 })
    .toFile(join(root, file));
  console.log("wrote", file, `(${size}px)`);
}

const mark = await buildMarkSource();

const sizes = [
  { file: "src/app/icon.png", size: 32 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of sizes) {
  await writePng(mark, file, size);
}

const png16 = await mark.clone().resize(16, 16, { fit: "contain", background: BG }).png().toBuffer();
const png32 = await mark.clone().resize(32, 32, { fit: "contain", background: BG }).png().toBuffer();
const png48 = await mark.clone().resize(48, 48, { fit: "contain", background: BG }).png().toBuffer();
const ico = await toIco([png16, png32, png48]);

for (const file of ["src/app/favicon.ico", "public/favicon.ico"]) {
  writeFileSync(join(root, file), ico);
  console.log("wrote", file);
}
