import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

execSync(
  "react-scripts test --watchAll=false --testPathPattern=sitemap-generate.test.ts",
  {
    cwd: rootDir,
    stdio: "inherit",
    env: { ...process.env, CI: "true" },
  },
);
