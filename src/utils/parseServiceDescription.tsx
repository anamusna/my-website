import React from "react";
import { renderInlineMarkdown } from "./renderInlineMarkdown";

/**
 * Parses service fullDescription markdown into JSX:
 * - **Section** lines as headings
 * - • bullets (optional **Title**: body)
 * - inline **bold** in paragraphs
 */
export const parseServiceDescription = (text: string): React.ReactNode[] => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      elements.push(<br key={key++} />);
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      const content = line.slice(2, -2);
      elements.push(
        <h3
          key={key++}
          className="text-lg sm:text-xl font-semibold text-body mt-4 first:mt-0"
        >
          {content}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("• **") && line.includes("**:")) {
      const parts = line.split("**:");
      const title = parts[0].replace("• **", "");
      const description = parts.slice(1).join("**:").trim();

      elements.push(
        <div key={key++} className="flex items-start mb-2">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
          <div className="ml-3">
            <span className="font-semibold text-body">
              {title}:
            </span>{" "}
            <span className="text-body">
              {renderInlineMarkdown(description)}
            </span>
          </div>
        </div>,
      );
      continue;
    }

    if (line.startsWith("• ")) {
      const content = line.slice(2);
      elements.push(
        <div key={key++} className="mb-2">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-body">
              {renderInlineMarkdown(content)}
            </span>
          </div>
        </div>,
      );
      continue;
    }

    elements.push(
      <p
        key={key++}
        className="text-body mb-2 leading-relaxed"
      >
        {renderInlineMarkdown(line)}
      </p>,
    );
  }

  return elements;
};
