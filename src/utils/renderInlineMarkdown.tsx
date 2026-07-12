import React from "react";

const DEFAULT_BOLD_CLASS =
  "font-semibold text-body";

/**
 * Renders simple inline markdown: **bold** segments within plain text.
 */
export const renderInlineMarkdown = (
  text: string,
  boldClassName: string = DEFAULT_BOLD_CLASS,
): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <React.Fragment key={`t-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </React.Fragment>,
      );
    }
    nodes.push(
      <strong key={`b-${key++}`} className={boldClassName}>
        {match[1]}
      </strong>,
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <React.Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</React.Fragment>,
    );
  }

  return nodes.length > 0 ? nodes : [text];
};
