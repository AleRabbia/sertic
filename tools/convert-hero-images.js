#!/usr/bin/env node
// Convert hero images in src/assets/hero to .webp and .avif using sharp
// Usage: node tools/convert-hero-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HERO_DIR = path.resolve(__dirname, '../src/assets/hero');
const PUBLIC_HERO_DIR = path.resolve(__dirname, '../public/hero');

if (!fs.existsSync(PUBLIC_HERO_DIR)) {
  fs.mkdirSync(PUBLIC_HERO_DIR, { recursive: true });
}

const SIZES = [480, 768, 1280, 1920];

async function convert(file) {
  const ext = path.extname(file).toLowerCase();
  const baseName = file.slice(0, -ext.length);
  const input = path.join(HERO_DIR, file);

  console.log('Converting', input);

    for (const size of SIZES) {
      const outAvif = path.join(HERO_DIR, `${baseName}-${size}.avif`);
      const outWebp = path.join(HERO_DIR, `${baseName}-${size}.webp`);
      try {
        await sharp(input).resize({ width: size }).avif({ quality: 60 }).toFile(outAvif);
        // copy to public
        fs.copyFileSync(outAvif, path.join(PUBLIC_HERO_DIR, path.basename(outAvif)));
        console.log(`  -> ${path.basename(outAvif)}`);
      } catch (e) {
        console.warn('  avif failed:', e.message);
      }

      try {
        await sharp(input).resize({ width: size }).webp({ quality: 70 }).toFile(outWebp);
        fs.copyFileSync(outWebp, path.join(PUBLIC_HERO_DIR, path.basename(outWebp)));
        console.log(`  -> ${path.basename(outWebp)}`);
      } catch (e) {
        console.warn('  webp failed:', e.message);
      }
    }

    // also write a non-resized optimized fallback
    const outAvifFull = path.join(HERO_DIR, `${baseName}.avif`);
    const outWebpFull = path.join(HERO_DIR, `${baseName}.webp`);
    try {
      await sharp(input).avif({ quality: 60 }).toFile(outAvifFull);
      fs.copyFileSync(outAvifFull, path.join(PUBLIC_HERO_DIR, path.basename(outAvifFull)));
      console.log(`  -> ${path.basename(outAvifFull)}`);
    } catch (e) {
      console.warn('  avif full failed:', e.message);
    }

    try {
      await sharp(input).webp({ quality: 70 }).toFile(outWebpFull);
      fs.copyFileSync(outWebpFull, path.join(PUBLIC_HERO_DIR, path.basename(outWebpFull)));
      console.log(`  -> ${path.basename(outWebpFull)}`);
    } catch (e) {
      console.warn('  webp full failed:', e.message);
    }
}

async function run() {
  if (!fs.existsSync(HERO_DIR)) {
    console.error('Hero dir not found:', HERO_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(HERO_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (!files.length) {
    console.log('No hero images found in', HERO_DIR);
    return;
  }

  for (const f of files) {
    // skip if all responsive variants already present
    const base = f.replace(/\.[^.]+$/, '');
    const allExist = SIZES.every((size) => {
      const a = path.join(HERO_DIR, `${base}-${size}.avif`);
      const w = path.join(HERO_DIR, `${base}-${size}.webp`);
      return fs.existsSync(a) && fs.existsSync(w);
    });

    if (allExist) {
      console.log('Skipping', f, '— responsive variants already exist');
      continue;
    }

    await convert(f);
  }
}

run().catch((e) => {
  console.error('Conversion failed:', e);
  process.exit(1);
});
