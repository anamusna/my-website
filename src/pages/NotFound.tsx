import { SECTION_VARIANTS, SECTION_VIEWPORT } from "constants/section-motion";
import AnimatedCTAButton from "components/elements/animated-cta-button";
import { motion } from "motion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_HEADER_HERO_TITLE } from "tailwind/styles/pageHeader";
import { TEXT_BODY } from "tailwind/styles/textTokens";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main content */}
      <main className="relative  z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-3xl text-center px-3 sm:px-4 lg:px-6">
          {/* 404 Icon */}
          <motion.div
            className="mb-6 sm:mb-8"
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full surface-card border border-light-border/55 dark:border-dark-border/40 shadow-sm">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading leading-none">
                  404
                </div>
                <div className="text-xs text-muted font-medium mt-1">
                  ERROR
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 mb-8 sm:mb-12"
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            {/* Title */}
            <div className="space-y-3">
              <h1 className={`${PAGE_HEADER_HERO_TITLE} text-heading`}>
                Page Not Found
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-muted max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have wandered off into the
                digital void
              </h2>
            </div>

            <div className="surface-card rounded-xl p-4 sm:p-6 border border-light-border/55 dark:border-dark-border/40 max-w-xl mx-auto">
              <div className="space-y-3 text-center">
                <p className={`${TEXT_BODY}`}>
                  Don't worry though! This happens to the best of us. The page
                  might have been moved, deleted, or you might have mistyped
                  the URL.
                </p>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Let's get you back on track with some helpful options below.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
          >
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <AnimatedCTAButton
                text="Go Home"
                onClick={handleGoHome}
                as="button"
                colorScheme="indigo-violet"
                size="md"
                showIcon={true}
              />
              <AnimatedCTAButton
                text="Go Back"
                onClick={handleGoBack}
                as="button"
                colorScheme="indigo-violet"
                size="md"
                variant="outline"
                showIcon={true}
              />
            </div>
          </motion.div>

          {/* Additional Navigation */}
          <div className="mt-8 sm:mt-12">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Or explore these popular sections:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                { label: "Projects", href: "/projects", icon: "💼" },
                { label: "About", href: "/about", icon: "👨‍💻" },
                { label: "Services", href: "/services", icon: "📧" },
                { label: "Blog", href: "/blog", icon: "📝" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.href)}
                  className="group px-3 py-1.5 text-xs font-medium text-muted hover:text-heading transition-colors duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
