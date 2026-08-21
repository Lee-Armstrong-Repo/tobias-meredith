# Deploy: Bitbucket → GoDaddy (Node.js)

This app runs as a **Next.js Node.js process** on GoDaddy (cPanel **Setup Node.js App** / Passenger), with source from **Bitbucket**. It is not a static-only site: booking (`/api/booking`) and Sanity Studio (`/studio`) need Node.

Builds must use **webpack** (`npm run build` → `next build --webpack`). Next.js 16 defaults to Turbopack, which fails in restricted sandboxes with port-binding / permission errors.

## 1. Bitbucket

1. Push this repository to Bitbucket.
2. In GoDaddy cPanel → **Git Version Control**, clone the Bitbucket repo into the Node application root (the folder that will contain `package.json`).

## 2. GoDaddy Node.js App

In cPanel → **Setup Node.js App** → Create Application:

| Setting | Value |
|--------|--------|
| Node.js version | **20.x or 22.x** (required for Next.js 16) |
| Application mode | Production |
| Application root | Directory with `package.json` (not necessarily `public_html`) |
| Application URL | Your live domain |
| Application startup file | `server.js` |

Then:

1. Add environment variables (below).
2. **Stop** the app if it is running.
3. **Run NPM Install**.
4. In the app shell / SSH (with the Node virtualenv activated):

```bash
npm ci
npm run build
```

5. **Start / Restart** the app.

### Release loop

```bash
git pull
npm ci
npm run build
# Restart the Node.js app in cPanel
```

If on-server builds run out of memory, build elsewhere and sync `.next` plus app files, or add a Bitbucket Pipeline that builds with webpack and deploys over SSH.

## 3. Environment variables

Set these in the Node.js App environment UI (and keep a local `.env.local` for development):

```
NODE_ENV=production
NEXT_PUBLIC_SANITY_PROJECT_ID=cu77z1un
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-05
RESEND_API_KEY=re_xxxxxxxx
BOOKING_TO_EMAIL=tmeredith1988@gmail.com
BOOKING_FROM_EMAIL=Tobias Meredith <onboarding@resend.dev>
```

`NEXT_PUBLIC_*` values are embedded at **build** time. If you change them, rebuild and restart.

Until a Resend domain is verified, use the onboarding sender and ensure the Resend account can deliver to `BOOKING_TO_EMAIL`.

## 4. Production domain and Sanity CORS

1. Canonical URL is set in [`content/site.ts`](content/site.ts) as `https://tobiastattoo.com.au` (used for sitemap, robots, Open Graph, JSON-LD). Rebuild after any change.
2. In [Sanity manage → API → CORS origins](https://www.sanity.io/manage/project/cu77z1un/api), add with **Allow credentials**:
   - `https://tobiastattoo.com.au`
   - `http://localhost:3000` for local Studio

Without CORS, `/studio` login will fail in the browser.

## 5. Verify after go-live

- [ ] Homepage `/`
- [ ] Booking form sends mail (`/booking` → `/api/booking`)
- [ ] `/studio` loads and accepts Sanity login
- [ ] Publish a blog post in Studio → appears on `/blog` within ~1 minute

## Local production smoke test

```bash
npm run build
npm start
```

App listens on `PORT` (default `3000`) via `server.js`.
