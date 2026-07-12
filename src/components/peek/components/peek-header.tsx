import clsx from "clsx";
import React from "react";

type PeekHeaderProps = React.ComponentProps<"header">;

export const PeekHeader: React.FC<PeekHeaderProps> = ({
  children,
  className,
  ...rest
}) => (
  <header
    data-cy="peek-header"
    className={clsx(
      "flex items-center gap-3 border-b border-light-border/50 bg-white/80 px-5 py-4 backdrop-blur-xl dark:border-dark-border/40 dark:bg-gray-900/80 [grid-area:header]",
      className,
    )}
    {...rest}
  >
    {children}
  </header>
);
