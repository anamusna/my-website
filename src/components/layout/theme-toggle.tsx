import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEnvironmentSettings } from "../../context/EnvironmentContext";
import Icon from "../../tailwind/components/elements/Icon";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useEnvironmentSettings();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-primary/50"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <Icon
        icon={theme === "dark" ? faSun : faMoon}
        className="text-body"
        size="lg"
      />
    </button>
  );
};

export default ThemeToggle;
