import React from "react";
import { Navigate } from "react-router-dom";
import { PageMetadata } from "components/seo/page-metadata";
import { ServiceDetailsView } from "./components/service-details-view";
import { useServiceDetails } from "./hooks/use-service-details";

const ServiceDetailsPage: React.FC = () => {
  const { service, activeTabId, tabs, redirectPath, pageSeo, handleTabChange } =
    useServiceDetails();

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  if (!service || !pageSeo || !activeTabId) {
    return null;
  }

  return (
    <>
      <PageMetadata {...pageSeo} />
      <ServiceDetailsView
        service={service}
        activeTabId={activeTabId}
        tabs={tabs}
        onTabChange={handleTabChange}
      />
    </>
  );
};

export default ServiceDetailsPage;
