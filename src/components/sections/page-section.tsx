import React from "react";

interface PageSectionProps {
  children?: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ children }) => {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      <div className="container max-w-7xl relative z-10 mx-auto px-3 sm:px-4 lg:px-6">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
