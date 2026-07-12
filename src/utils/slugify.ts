/** Canonical URL slug — used for blog posts, services, and sitemap generation. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Builds the canonical service detail route for a service title. */
export function getServiceDetailPath(title: string): string {
  return `/services/${slugify(title)}`;
}
