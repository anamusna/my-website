import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import { motion } from "motion/react";
import React from "react";
import Image from "components/image";
import BlogImage from "components/sections/blog/blog-image";
import ansuImage from "images/ansu6-b.png";
import { blogs } from "data/blogs";
import { PAGE_HEADER_HERO_TITLE } from "tailwind/styles/pageHeader";
import { SURFACE_CARD_ICON } from "tailwind/styles/surfaceCard";

type BlogPost = (typeof blogs)[number];

type BlogDetailsIntroProps = {
  blogPost: BlogPost;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const BlogDetailsIntro: React.FC<BlogDetailsIntroProps> = ({
  blogPost,
}) => (
  <>
    <motion.section
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT}
      className="relative py-4 sm:py-6 overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-3 sm:space-y-4">
          <div
            className={`${SURFACE_CARD_ICON} w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full`}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl" aria-hidden="true">
              📝
            </span>
          </div>

          <div className="space-y-2">
            <h1 className={`${PAGE_HEADER_HERO_TITLE} text-heading`}>
              {blogPost.title}
            </h1>
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT}
      className="relative py-2 bg-white/30 dark:bg-gray-800/30"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-light-border/50 dark:border-dark-border/40 shadow-sm">
                <Image
                  src={ansuImage}
                  className="object-cover w-full h-full"
                  variant="avatar"
                />
              </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-heading">
                {blogPost.author.name}
              </p>
              <p className="text-sm text-muted">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-center">
              <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                {formatDate(blogPost.date)}
              </p>
              <p className="text-sm text-muted">Published</p>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <p className="text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400">
                {blogPost.readTime} min
              </p>
              <p className="text-sm text-muted">Read time</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section
      variants={SECTION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={SECTION_VIEWPORT}
      className="relative py-4 bg-white/20 dark:bg-gray-800/20"
    >
      <div className="container relative z-10 mx-auto px-4">
        <BlogImage blog={blogPost} />
      </div>
    </motion.section>
  </>
);
