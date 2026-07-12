import clsx from "clsx";
import React, { useState } from "react";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import { TabsProps } from "../../../tailwind/types/elements/tabs";

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  orientation = "horizontal",
  size = "md",
  shape = "circle",
  theme = "light",
  variant = "primary",
  mode = "underline",
  fullWidth = true,
  onTabChange,
  customClasses = {},
}) => {
  const { fontSize } = useEnvironmentSettings();
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    if (
      tabId !== activeTab &&
      !tabs.find((tab) => tab.id === tabId)?.disabled
    ) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
    xl: "px-5 py-4 text-xl",
  };

  const themeColors: any = {
    light: {
      primary: "bg-primary-light-500 text-white hover:bg-primary-light-600",
      secondary: "bg-light-secondary text-white hover:bg-light-primary",
      outline:
        "border border-primary-light-500 text-primary-light-500 hover:bg-primary-light-50",
      transparent:
        "bg-transparent text-primary-light-500 hover:bg-primary-light-50",
      danger: "bg-red-500 text-white hover:bg-red-600",
      success: "bg-green-500 text-white hover:bg-green-600",
    },
    dark: {
      primary: "bg-primary-dark-500 text-white hover:bg-primary-dark-600",
      secondary: "bg-dark-secondary text-white hover:bg-dark-primary",
      outline:
        "border border-primary-dark-500 text-primary-dark-500 hover:bg-primary-dark-50",
      transparent:
        "bg-transparent text-primary-dark-500 hover:bg-primary-dark-50",
      danger: "bg-red-600 text-white hover:bg-red-700",
      success: "bg-green-600 text-white hover:bg-green-700",
    },
  };

  const currentTheme = themeColors[theme] || themeColors.light;
  const variantClasses = currentTheme[variant];

  const shapeClasses: any = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  const modeClasses = {
    underline: "border-b-2 border-transparent hover:border-current ",
    pills: shapeClasses[shape],
  };

  return (
    <div className={clsx("tabs-container", fullWidth && "w-full")}>
      <div
        role="tablist"
        className={clsx(
          "tabs-header flex flex-wrap",
          //orientation === "horizontal" ? "flex-row" : "flex-col"
        )}
      >
        {tabs.map((tab) => (
          <button
            role="tab"
            aria-selected={tab.id === activeTab}
            key={tab.id}
            className={clsx(
              "tab-item focus:outline-none transition-all duration-200",
              sizeClasses[fontSize || size],
              variantClasses,
              modeClasses[mode],
              tab.disabled &&
                "cursor-not-allowed opacity-50 pointer-events-none",
              tab.id === activeTab &&
                (customClasses.activeTab || "font-bold opacity-50"),
              customClasses.tab,
            )}
            disabled={tab.disabled}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className={clsx(
          "tabs-content mt-4",
          customClasses.content || "p-4 glass",
        )}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
