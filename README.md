# Garden City Fine Cuts — finecuts2

Luxury barbershop marketing site built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Setup

```bash
cd finecuts2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Images

Place photos in `public/images/` (see `public/images/README.md`). Until then, Unsplash placeholders in `lib/site-images.ts` are used.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services, gallery, team, membership, booking CTA |
| `/booking` | Appointment form (loads services/staff from Django) |
| `/services` | Services showcase |
| `/gallery` | Photo gallery |
| `/membership` | Membership tiers + rewards signup link |
| `/dashboard` | Links to Django backend |

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Lucide React & React Icons

## Django backend (booking)

1. Start Django (`gardencity`): `py -3 manage.py runserver`
2. Copy `.env.local.example` → `.env.local` and set `DJANGO_API_URL=http://127.0.0.1:8000`
3. Run Next: `npm run dev` — `/booking` submits via `/api/booking` → Django `/api/booking/`

Optional APIs (still available): `/api/booking/options`, `/api/public/home`.

## Production (DigitalOcean VPS)

The **official** public site is this Next app on your domain root. Django handles staff login, API, and admin on the same domain (via nginx).

1. Copy `.env.production.example` → `.env.production` on the server.
2. `npm ci && npm run build && npm run start` (port 3000).
3. Follow **`deploy/DEPLOY-DIGITALOCEAN.md`** in the `gardencity` Django repo for nginx, Gunicorn, SSL, and `PUBLIC_SITE_URL`.

```bash
npm run build
npm start
```
