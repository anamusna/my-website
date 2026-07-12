import { RouteLoadingFallback } from "components/layout/route-loading-fallback";
import { PAGE_SEO } from "data/page-seo";
import React, { Suspense, lazy, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/app-layout";
import { withPageSeo } from "./utils/with-page-seo";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Story = lazy(() => import("./pages/Story"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Career = lazy(() => import("./pages/Career"));
const Faq = lazy(() => import("./pages/Faq"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

const LayoutWrapper: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      { path: "/", element: React.createElement(withPageSeo(PAGE_SEO.home, Home)) },
      { path: "/about", element: React.createElement(withPageSeo(PAGE_SEO.about, About)) },
      { path: "/projects", element: React.createElement(withPageSeo(PAGE_SEO.projects, Projects)) },
      { path: "/projects/:id", element: <ProjectDetails /> },
      { path: "/services", element: React.createElement(withPageSeo(PAGE_SEO.services, Services)) },
      { path: "/services/:slug", element: <ServiceDetail /> },
      { path: "/blog", element: React.createElement(withPageSeo(PAGE_SEO.blog, Blog)) },
      { path: "/blog/:slug", element: <BlogDetail /> },
      { path: "/story", element: React.createElement(withPageSeo(PAGE_SEO.story, Story)) },
      { path: "/contact", element: React.createElement(withPageSeo(PAGE_SEO.contact, Contact)) },
      { path: "/testimonials", element: React.createElement(withPageSeo(PAGE_SEO.testimonials, Testimonials)) },
      { path: "/career", element: React.createElement(withPageSeo(PAGE_SEO.career, Career)) },
      { path: "/faq", element: React.createElement(withPageSeo(PAGE_SEO.faq, Faq)) },
      { path: "/privacy", element: React.createElement(withPageSeo(PAGE_SEO.privacy, Privacy)) },
      { path: "*", element: React.createElement(withPageSeo(PAGE_SEO.notFound, NotFound)) },
    ],
  },
]);

const Routes: React.FC = () => {
  return (
    <RouterProvider
      router={router}
      future={
        {
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        } as any
      }
    />
  );
};

export default Routes;
