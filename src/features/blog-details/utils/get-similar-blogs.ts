import { blogs } from "data/blogs";

type BlogPost = (typeof blogs)[number];

export function getSimilarBlogs(blogPost: BlogPost, limit = 3): BlogPost[] {
  const currentBlogTags = blogPost.tags ?? [];
  const otherBlogs = blogs.filter((blog) => blog.id !== blogPost.id);

  const scoredBlogs = otherBlogs.map((blog) => {
    const blogTags = blog.tags ?? [];
    const sharedTags = currentBlogTags.filter((tag) => blogTags.includes(tag));
    return {
      blog,
      score: sharedTags.length,
    };
  });

  return scoredBlogs
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ blog }) => blog);
}
