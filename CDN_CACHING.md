**CDN & Caching guide**

This project includes example headers/config for common hosts:

- `public/_headers` — Netlify headers file (placed in `public/`).
- `vercel.json` — Vercel headers configuration.
- `nginx-caching.conf` — Example Nginx snippets to add to your server.

Recommended strategy:

1. Version static assets (Vite already emits hashed filenames in `dist/`).
2. Serve hashed assets with `Cache-Control: public, max-age=31536000, immutable`.
3. Serve HTML (`/` / `index.html`) with short caching such as `max-age=3600, must-revalidate`.
4. Use a CDN (Cloudflare, Fastly, Bunny, or built-in Netlify/Vercel CDN). Configure the CDN to respect origin headers or set similar cache rules there.

Quick deploy examples:

Netlify: include `public/_headers` (already added). Netlify will read it and set the headers.

Vercel: `vercel.json` included — Vercel will use these rules when deployed.

Cloudflare: you can add a Page Rule or use Cache Rules to set the same `Cache-Control` values for static assets.

Notes:
- If you use service worker or other advanced caching, ensure you handle asset updates via cache-busting (hashed filenames).
- Update `canonical` and JSON-LD URLs in `index.html` to your production domain before deploying.
