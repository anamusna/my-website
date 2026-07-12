import { LAYOUT_STYLES } from "data/heroData";
import React from "react";
import { SURFACE_CARD_HEADER } from "tailwind/styles/surfaceCard";
import { ServiceDetailTab } from "../hooks/use-service-details";
import {
  getAdjacentServiceTabId,
  getServiceTabProgress,
} from "../utils/service-tab-navigation";

type ServiceDetailsTabBarProps = {
  tabs: ServiceDetailTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
};

export const ServiceDetailsTabBar: React.FC<ServiceDetailsTabBarProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);
  const displayIndex = activeIndex >= 0 ? activeIndex + 1 : 1;
  const progressWidth = getServiceTabProgress(tabs, activeTabId);

  return (
    <div className={SURFACE_CARD_HEADER}>
      <div className={LAYOUT_STYLES.CONTENT_CONTAINER}>
        <div className="relative">
          <div className="flex items-center justify-between py-1 sm:py-1.5">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1">
              {tabs.map((tab, index) => {
                const isActive = tab.id === activeTabId;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    className={`group relative flex-shrink-0 px-1.5 sm:px-2.5 py-1 sm:py-1.5 text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[28px] sm:min-h-[32px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-1 rounded-md sm:rounded-lg ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-body hover:text-heading"
                    }`}
                    style={{ animationDelay: `${index * 30}ms` }}
                    aria-pressed={isActive}
                    aria-label={`View ${tab.label} service details`}
                  >
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500 rounded-md sm:rounded-lg shadow-lg" />
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500 rounded-md sm:rounded-lg blur opacity-40" />
                      </>
                    )}

                    {!isActive && (
                      <div className="absolute inset-0 bg-gray-100/80 dark:bg-gray-800/80 rounded-md sm:rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    )}

                    <span className="relative z-10 flex items-center gap-1">
                      <div
                        className={`w-0.5 h-0.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white"
                            : "bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-600 dark:group-hover:bg-gray-400"
                        }`}
                      />
                      <span className="font-medium truncate max-w-[60px] sm:max-w-[80px] lg:max-w-[100px]">
                        {tab.label}
                      </span>
                    </span>

                    {isActive && (
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 ml-2 sm:ml-3">
              <div className="hidden sm:flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">{displayIndex}</span>
                <span>/</span>
                <span>{tabs.length}</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() =>
                    onTabChange(
                      getAdjacentServiceTabId(tabs, activeTabId, "previous"),
                    )
                  }
                  className="p-0.5 sm:p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                  aria-label="Previous service"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onTabChange(
                      getAdjacentServiceTabId(tabs, activeTabId, "next"),
                    )
                  }
                  className="p-0.5 sm:p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200"
                  aria-label="Next service"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 transition-all duration-500 ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
