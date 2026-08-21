# Deploy: Vercel + GoDaddy domain

Host the Next.js app on **Vercel**. Keep **tobiastattoo.com.au** registered at GoDaddy and point DNS at Vercel.

## Why Vercel

- Native Next.js builds (no GoDaddy Node / Passenger issues)
- Git push to `main` → automatic production deploy
- Supports `/api/booking` (Resend) and `/studio` (Sanity)

## 1. Connect the GitHub repo

1. [vercel.com](https://vercel.com) → import `Lee-Armstrong-Repo/tobias-meredith` (or your fork).
2. Framework: Next.js (auto-detected).
3. Build command stays `npm run build` (`next build --webpack` in `package.json`).
4. Deploy.

Team/scope used previously: `studio-untitled1`.

## 2. Environment variables

Project → **Settings** → **Environment Variables** (Production + Preview):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=cu77z1un
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-08-05
RESEND_API_KEY=re_xxxxxxxx
BOOKING_TO_EMAIL=tmeredith1988@gmail.com
BOOKING_FROM_EMAIL=Tobias Meredith <onboarding@resend.dev>
```

Redeploy after adding or changing vars (`NEXT_PUBLIC_*` are baked in at build time).

## 3. Attach the GoDaddy domain

1. Vercel → Project → **Settings** → **Domains** → add:
   - `tobiastattoo.com.au`
   - `www.tobiastattoo.com.au` (optional; redirect www → apex or the reverse)
2. Vercel shows the DNS records to create.
3. In **GoDaddy** → DNS for `tobiastattoo.com.au`, set those records (typically):
   - Apex `@` → **A** record to Vercel’s IP (shown in the UI), or follow Vercel’s current instructions
   - `www` → **CNAME** to `cname.vercel-dns.com` (or the value Vercel shows)
4. Remove conflicting old A/CNAME/parking records that point at GoDaddy website hosting.
5. Wait for DNS + SSL (often minutes; can take up to 24–48h).

Domain stays billed/renewed at GoDaddy; the site runs on Vercel.

## 4. Sanity CORS

[Sanity manage → project `cu77z1un` → API → CORS](https://www.sanity.io/manage/project/cu77z1un/api) — **Allow credentials**:

- `https://tobiastattoo.com.au`
- `https://www.tobiastattoo.com.au` (if you use www)
- `http://localhost:3000`
- Optional while testing: `https://tobias-meredith.vercel.app`

## 5. Day-to-day

```bash
git push origin main
```

Vercel rebuilds production. Canonical site URL in code: `https://tobiastattoo.com.au` ([`content/site.ts`](content/site.ts)).

## 6. Verify

- [ ] `https://tobiastattoo.com.au`
- [ ] Booking form (`/booking`)
- [ ] `/studio` login
- [ ] New Sanity post on `/blog`
