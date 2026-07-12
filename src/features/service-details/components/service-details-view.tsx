import { LAYOUT_STYLES } from "data/heroData";
import { ExtendedService } from "data/services";
import React from "react";
import { ServiceDetailTab } from "../hooks/use-service-details";
import { ServiceDetailsAmbientGlow } from "./service-details-ambient-glow";
import { ServiceDetailsHero } from "./service-details-hero";
import { ServiceDetailsMainContent } from "./service-details-main-content";
import { ServiceDetailsSidebar } from "./service-details-sidebar";
import { ServiceDetailsTabBar } from "./service-details-tab-bar";

export type ServiceDetailsViewProps = {
  service: ExtendedService;
  activeTabId: string;
  tabs: ServiceDetailTab[];
  onTabChange: (tabId: string) => void;
};

export const ServiceDetailsView: React.FC<ServiceDetailsViewProps> = ({
  service,
  activeTabId,
  tabs,
  onTabChange,
}) => (
  <div className={LAYOUT_STYLES.PAGE_ROOT}>
    <main className="relative z-10">
      <ServiceDetailsHero key={`${activeTabId}-hero`} service={service} />

      <ServiceDetailsTabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onTabChange={onTabChange}
      />

      <div
        className={`${LAYOUT_STYLES.CONTENT_CONTAINER} ${LAYOUT_STYLES.CONTENT_SECTION}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          <div
            key={activeTabId}
            className={`lg:col-span-2 ${LAYOUT_STYLES.SECTION_STACK}`}
          >
            <ServiceDetailsMainContent service={service} />
          </div>

          <ServiceDetailsSidebar service={service} />
        </div>
      </div>
    </main>

    <ServiceDetailsAmbientGlow />
  </div>
);
