# Deploy: Bitbucket → GoDaddy (Node.js)

This app runs as a **Next.js Node.js process** on GoDaddy (cPanel **Setup Node.js App**), with source from **Bitbucket**. Booking (`/api/booking`) and Sanity Studio (`/studio`) need Node — this is not a static-only website.

You do **not** need SSH/terminal. The start command builds the app with webpack automatically, then serves it.

## No-terminal workflow (recommended)

### First setup

1. Push this repo to Bitbucket.
2. cPanel → **Git Version Control** → clone into your app folder (must contain `package.json`).
3. cPanel → **Setup Node.js App** → Create / edit:

| Setting | Value |
|--------|--------|
| Node.js version | **20.x or 22.x** |
| Application mode | Production |
| Application root | Folder with `package.json` |
| Application URL | `tobiastattoo.com.au` |
| Application startup file | `scripts/godaddy-start.js` |

4. Add environment variables (section below).
5. Click **Run NPM Install**.
6. Click **Start** / **Restart**.

The first start can take **several minutes** while it runs `next build --webpack`. Logs should show a webpack build, then:

```text
> Ready on http://…:PORT
```

### Every update (still no terminal)

1. cPanel Git → **Pull** latest from Bitbucket.
2. **Run NPM Install** (if dependencies changed).
3. **Restart** the Node.js app (this rebuilds, then starts).

## Why not “just a website”?

Static `public_html` hosting cannot run `/api/booking` or `/studio`. Use **Setup Node.js App**.

## Environment variables

Set these in the Node.js App UI:

```
NODE_ENV=production
NEXT_PUBLIC_SANITY_PROJECT_ID=cu77z1un
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-05
RESEND_API_KEY=re_xxxxxxxx
BOOKING_TO_EMAIL=tmeredith1988@gmail.com
BOOKING_FROM_EMAIL=Tobias Meredith <onboarding@resend.dev>
```

`NEXT_PUBLIC_*` values are baked in at **build** time (on each Restart). Change them, then Restart.

## Production domain and Sanity CORS

1. Canonical URL in [`content/site.ts`](content/site.ts) is `https://tobiastattoo.com.au`.
2. [Sanity → API → CORS origins](https://www.sanity.io/manage/project/cu77z1un/api) — **Allow credentials**:
   - `https://tobiastattoo.com.au`
   - `http://localhost:3000`

## Verify

- [ ] `https://tobiastattoo.com.au`
- [ ] Booking form
- [ ] `/studio` login
- [ ] New Sanity blog post appears on `/blog`

## If the build fails in logs

Paste the full error from the Node.js App log. Common causes: Node version too old, missing env vars, or the host running out of memory during `next build`.

## Local smoke test

```bash
npm run build
npm run start:server
```

`npm start` always rebuilds (same as GoDaddy). Use `start:server` locally when `.next` already exists.
