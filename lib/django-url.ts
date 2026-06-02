/** Django base URL (no trailing slash). Works on server and client when NEXT_PUBLIC_* is set. */
export function getDjangoApiBase(): string {
  const url =
    (typeof window === "undefined"
      ? process.env.DJANGO_API_URL || process.env.NEXT_PUBLIC_DJANGO_API_URL
      : process.env.NEXT_PUBLIC_DJANGO_API_URL || process.env.DJANGO_API_URL) ||
    "http://127.0.0.1:8000";
  return url.replace(/\/$/, "");
}

export function djangoUrl(path: string): string {
  const base = getDjangoApiBase();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
