import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogImages } from "../../../data/blogImages";
import Icon from "../../../tailwind/components/elements/Icon";
import { SURFACE_CARD_INTERACTIVE } from "../../../tailwind/styles/surfaceCard";
import { Blog } from "../../../types/blog";
import { slugify } from "../../../utils/slugify";
import { devWarn } from "../../../utils/logger";

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, className = "" }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  const blogImage = blogImages[blog.coverImage];

  const handleBlogClick = useCallback(() => {
    navigate(`/blog/${slugify(blog.title)}`);
  }, [navigate, blog.title]);

  if (!blogImage && !imageError) {
    devWarn(`No image found for: ${blog.coverImage}`);
  }

  return (
    <article className={`${SURFACE_CARD_INTERACTIVE} rounded-2xl overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={handleBlogClick}
        className="block w-full text-left"
      >
        <div className="relative aspect-video overflow-hidden bg-light-elevated dark:bg-dark-surface">
          <img
            src={imageError ? blogImages["react.png"] : blogImage}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={() => {
              devWarn(`Failed to load image: ${blog.coverImage}`);
              setImageError(true);
            }}
          />
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium text-primary-light dark:text-primary-dark
                         bg-primary-light/10 dark:bg-primary-dark/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3 text-heading">
            {blog.title}
          </h3>

          <p className="text-muted mb-4 line-clamp-2">
            {blog.summary}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Icon
                icon={faCalendar}
                size="sm"
                className="text-primary-light/70 dark:text-primary-dark/70"
              />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Icon
                icon={faClock}
                size="sm"
                className="text-primary-light/70 dark:text-primary-dark/70"
              />
              {blog.readTime} min read
            </span>
          </div>

          <div className="mt-4 text-primary-light dark:text-primary-dark font-medium">
            Read More
          </div>
        </div>
      </button>
    </article>
  );
};

export default BlogCard;
