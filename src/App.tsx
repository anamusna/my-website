import React from "react";
import { EnvironmentProvider } from "./context/EnvironmentContext";
import "./lib/fontawesome";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <EnvironmentProvider>
      <Routes />
    </EnvironmentProvider>
  );
};

export default App;
