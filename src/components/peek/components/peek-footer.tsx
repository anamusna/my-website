import clsx from "clsx";
import React from "react";

type PeekFooterProps = React.ComponentProps<"footer">;

export const PeekFooter: React.FC<PeekFooterProps> = ({
  children,
  className,
  ...rest
}) => (
  <footer
    data-cy="peek-footer"
    className={clsx(
      "sticky bottom-0 flex items-center border-t border-light-border/50 bg-white px-5 py-3.5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] [grid-area:footer] empty:hidden dark:border-dark-border/40 dark:bg-gray-900",
      className,
    )}
    {...rest}
  >
    {children}
  </footer>
);
