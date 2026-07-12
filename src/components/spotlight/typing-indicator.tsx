import React from "react";

const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-emerald-400">
    <span className="flex items-center gap-1">
      <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" />
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-emerald-400"
        style={{ animationDelay: "120ms" }}
      />
      <span
        className="h-2 w-2 animate-bounce rounded-full bg-emerald-400"
        style={{ animationDelay: "240ms" }}
      />
    </span>
    thinking
  </div>
);

export default TypingIndicator;


