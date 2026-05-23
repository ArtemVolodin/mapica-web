/**
 * Regenerate favicon + app icons from public/mapica-logo.png
 * Run: node scripts/generate-icons.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public/mapica-logo.png");

const meta = await sharp(logoPath).metadata();
const side = Math.min(meta.width, meta.height);
const left = Math.floor((meta.width - side) / 2);
const top = Math.floor((meta.height - side) / 2);

const square = sharp(logoPath).extract({
  left,
  top,
  width: side,
  height: side,
});

const sizes = [
  { file: "src/app/icon.png", size: 32 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
];

for (const { file, size } of sizes) {
  await square.clone().resize(size, size).png().toFile(join(root, file));
  console.log("wrote", file);
}

const png16 = await square.clone().resize(16, 16).png().toBuffer();
const png32 = await square.clone().resize(32, 32).png().toBuffer();
const png48 = await square.clone().resize(48, 48).png().toBuffer();
const ico = await toIco([png16, png32, png48]);

for (const file of ["src/app/favicon.ico", "public/favicon.ico"]) {
  writeFileSync(join(root, file), ico);
  console.log("wrote", file);
}
