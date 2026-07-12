import React from "react";
import { Navigate } from "react-router-dom";
import { PageMetadata } from "components/seo/page-metadata";
import { BlogDetailsView } from "./components/blog-details-view";
import { useBlogDetails } from "./hooks/use-blog-details";

const BlogDetailsPage: React.FC = () => {
  const {
    blogPost,
    similarBlogs,
    pageSeo,
    jsonLd,
    redirectPath,
    handleSimilarBlogClick,
  } = useBlogDetails();

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  if (!blogPost || !pageSeo) {
    return null;
  }

  return (
    <>
      <PageMetadata {...pageSeo} jsonLd={jsonLd} />
      <BlogDetailsView
        blogPost={blogPost}
        similarBlogs={similarBlogs}
        onSimilarBlogClick={handleSimilarBlogClick}
      />
    </>
  );
};

export default BlogDetailsPage;
