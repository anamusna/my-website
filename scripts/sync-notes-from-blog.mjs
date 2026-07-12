import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = [
  {
    module: "../src/data/blogContent/optimized/why-react-over-angular-or-vue-optimized.ts",
    exportName: "whyReactOverAngularOrVueContentOptimized",
    outfile: "../notes/Why React Over Angular or Vue.js.md",
  },
  {
    module: "../src/data/blogContent/optimized/deep-dive-into-react-optimized.ts",
    exportName: "deepDiveIntoReactContentOptimized",
    outfile: "../notes/A Deep Dive into React.md",
  },
  {
    module: "../src/data/blogContent/optimized/understanding-react-concepts-optimized.ts",
    exportName: "understandingReactConceptsContentOptimized",
    outfile: "../notes/Understanding React: Components, State, and Props.md",
  },
  {
    module: "../src/data/blogContent/optimized/the-virtual-dom-optimized.ts",
    exportName: "theVirtualDOMContentOptimized",
    outfile: "../notes/The Virtual Dom.md",
  },
  {
    module: "../src/data/blogContent/optimized/understanding-performance-optimization-optimized.ts",
    exportName: "understandingPerformanceOptimizationContentOptimized",
    outfile: "../notes/Understanding Performace optimization.md",
  },
  {
    module: "../src/data/blogContent/optimized/understanding-react-hooks-optimized.ts",
    exportName: "understandingReactHooksContentOptimized",
    outfile: "../notes/Understanding Reack Hooks .md",
  },
  {
    module: "../src/data/blogContent/optimized/event-driven-microservice-optimized.ts",
    exportName: "eventDrivenMicroserviceContentOptimized",
    outfile: "../notes/Event-Driven Microservices.md",
  },
];

const sectionsToMarkdown = (sections) =>
  sections
    .map((section) => {
      switch (section.type) {
        case "heading":
          return `${"#".repeat(section.level)} ${section.content}\n`;
        case "paragraph":
          return `${section.content}\n`;
        case "code":
          return `\`\`\`${section.language ?? "typescript"}\n${section.content}\n\`\`\`\n`;
        case "list":
          return `${section.items.map((item) => `- ${item}`).join("\n")}\n`;
        default:
          return "";
      }
    })
    .join("\n");

for (const entry of exports) {
  const modulePath = join(__dirname, entry.module);
  const mod = await import(pathToFileURL(modulePath).href);
  const content = mod[entry.exportName];
  const markdown = sectionsToMarkdown(content.sections);
  writeFileSync(join(__dirname, entry.outfile), markdown);
  console.log(`Wrote ${entry.outfile}`);
}
