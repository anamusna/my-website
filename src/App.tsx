import React, { useRef, useState, useEffect } from "react";
import Routes from "./Routes";
import "./styles/main.scss";
import { ThemeContext, initialThemeState } from "./ThemeContext";
import { useThemeStyles } from "./helpers/use-theme-styles";

const App: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || initialThemeState.theme;
  });
  
  const { backgroundColor } = useThemeStyles(theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div ref={divRef} className={`position-relative pt-4 ${backgroundColor}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
