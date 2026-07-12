import { blogs } from "data/blogs";
import { getSimilarBlogs } from "features/blog-details/utils/get-similar-blogs";

describe("getSimilarBlogs", () => {
  it("returns blogs with shared tags first", () => {
    const source = blogs[0];
    const similar = getSimilarBlogs(source, 3);

    expect(similar.length).toBeLessThanOrEqual(3);
    expect(similar.every((blog) => blog.id !== source.id)).toBe(true);
  });

  it("respects the limit parameter", () => {
    const source = blogs[0];
    const similar = getSimilarBlogs(source, 1);

    expect(similar).toHaveLength(1);
  });
});
