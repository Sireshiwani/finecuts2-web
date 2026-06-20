/** URL prefixes served by Django (must match deploy/nginx-finecuts.conf). */
export const DJANGO_PROXY_PREFIXES = [
  "api",
  "admin",
  "login",
  "logout",
  "account",
  "book",
  "staff",
  "sales",
  "expenses",
  "payments",
  "loyalty",
  "customers",
  "barber",
  "static",
  "media",
  "password-reset",
  "reset",
  "reports",
  "notifications",
  "salary-advances",
] as const;

/** Nginx location regex — matches /login and /login/ (and nested paths). */
export const NGINX_DJANGO_LOCATION_REGEX =
  "^/(api|admin|login|logout|account|book|staff|sales|expenses|payments|loyalty|customers|barber|static|media|password-reset|reset|reports|notifications|salary-advances)(/.*)?$";
