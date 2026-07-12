import { SITE_URL } from "data/site-config";
import { Blog } from "types/blog";

export function buildBlogPostSchema(blog: Blog, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.summary,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: blog.author.name,
      url: SITE_URL,
    },
    image: `${SITE_URL}/images/${blog.coverImage}`,
    keywords: (blog.tags ?? []).join(", "),
  };
}
