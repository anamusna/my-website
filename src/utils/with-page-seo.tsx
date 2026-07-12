import { PageMetadata } from "components/seo/page-metadata";
import { PageSeoConfig } from "data/page-seo";
import React from "react";

export function withPageSeo(
  seo: PageSeoConfig,
  Page: React.ComponentType,
): React.FC {
  const WrappedPage: React.FC = () => (
    <>
      <PageMetadata {...seo} />
      <Page />
    </>
  );

  WrappedPage.displayName = `WithPageSeo(${Page.displayName ?? Page.name ?? "Page"})`;

  return WrappedPage;
}
