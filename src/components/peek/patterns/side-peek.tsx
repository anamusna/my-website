import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import React, { forwardRef } from "react";
import { PeekRoot } from "../components/peek-root";
import { PeekDrawerWidth } from "../config";

export type SidePeekProps = React.PropsWithChildren<{
  className?: string;
  animateWidth?: PeekDrawerWidth;
}>;

export const SidePeek = forwardRef<HTMLDivElement, SidePeekProps>(
  function SidePeek({ children, className, animateWidth }, ref) {
    const animate =
      animateWidth !== undefined
        ? { minWidth: animateWidth, opacity: 1, flexBasis: animateWidth }
        : undefined;

    return (
      <AnimatePresence>
        <PeekRoot
          ref={ref}
          className={clsx(
            "relative flex h-full w-full flex-col border-l border-light-border/30 bg-light-background shadow-[-2px_0_16px_0_rgba(14,14,44,0.1)] dark:border-dark-border/30 dark:bg-dark-background",
            className,
          )}
          {...(animate !== undefined && { animate })}
        >
          {children}
        </PeekRoot>
      </AnimatePresence>
    );
  },
);
