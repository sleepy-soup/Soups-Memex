/** Prefixes internal links with Astro's configured deployment base path. */
export function withBase(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const target = path.replace(/^\//, '');
  if (!target) return base;
  return `${base.endsWith('/') ? base : `${base}/`}${target}`;
}
