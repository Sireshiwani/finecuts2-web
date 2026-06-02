# finecuts2 on DigitalOcean VPS

The marketing site runs behind **nginx** with Django. Full steps:

**See `F:\Programming\gardencity\deploy\DEPLOY-DIGITALOCEAN.md`** (or `deploy/DEPLOY-DIGITALOCEAN.md` in the Django repo on the server).

Quick summary:

1. Build Next: `npm ci && npm run build`
2. Run with `npm run start` on port **3000** (systemd unit `finecuts-next.service`)
3. Set `.env.production` from `.env.production.example`
4. Nginx sends `yourdomain.com/` → Next; `/api`, `/login`, `/dashboard`, etc. → Django
