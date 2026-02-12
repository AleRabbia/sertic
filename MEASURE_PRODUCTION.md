Measure performance in production
--------------------------------

This repo includes a GitHub Actions workflow to run Lighthouse CI against a production URL.

How to use

- Option A (recommended for CI):
  1. Add a repository secret named `MEASURE_URL` with your production URL (e.g. `https://your-site.com`).
  2. Push to `main` or run the workflow manually via the Actions > Lighthouse CI > Run workflow, providing `target_url` if you want to override the secret.

- Option B (manual local run):
  1. Install Lighthouse CLI: `npm i -D @lhci/cli`
  2. Run locally: `npx @lhci/cli autorun --upload.target=temporary-public-storage --config=.lighthouserc.js --url=https://your-site.com`

Notes
- The workflow uploads reports to a temporary public storage (useful for quick inspection). For persistent storage or dashboards consider configuring a Lighthouse CI server.
- Update `.lighthouserc.js` assertions to match your target budgets.
- Make sure your production deployment uses the caching rules we added earlier for realistic results.
