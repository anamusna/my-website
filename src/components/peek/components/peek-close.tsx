import clsx from "clsx";
import React from "react";

type PeekCloseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PeekClose: React.FC<PeekCloseProps> = ({
  children,
  className,
  type = "button",
  ...rest
}) => (
  <button
    type={type}
    data-cy="peek-close"
    className={clsx(
      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-light-border/50 text-light-text transition hover:bg-light-surface/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-primary/50 dark:border-dark-border/50 dark:text-dark-text dark:hover:bg-dark-surface/50",
      className,
    )}
    {...rest}
  >
    {children ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586z" />
      </svg>
    )}
  </button>
);
