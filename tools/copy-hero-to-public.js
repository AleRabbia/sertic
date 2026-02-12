#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HERO_DIR = path.resolve(__dirname, '../src/assets/hero');
const PUBLIC_HERO_DIR = path.resolve(__dirname, '../public/hero');
if (!fs.existsSync(PUBLIC_HERO_DIR)) fs.mkdirSync(PUBLIC_HERO_DIR, { recursive: true });
const files = fs.readdirSync(HERO_DIR).filter((f) => /\.(avif|webp)$/i.test(f));
if (!files.length) {
  console.log('No optimized hero files found to copy.');
  process.exit(0);
}
for (const f of files) {
  const src = path.join(HERO_DIR, f);
  const dest = path.join(PUBLIC_HERO_DIR, f);
  fs.copyFileSync(src, dest);
  console.log('Copied', f);
}
console.log('Done.');
