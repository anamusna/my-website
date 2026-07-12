import clsx from "clsx";
import { HTMLMotionProps, motion } from "motion/react";
import React, { forwardRef } from "react";

export type PeekRootProps = React.HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<"div">;

export const PeekRoot = forwardRef<HTMLDivElement, PeekRootProps>(
  function PeekRoot({ children, className, ...rest }, ref) {
    return (
      <motion.div
        ref={ref}
        data-cy="peek-root"
        className={clsx(
          "grid bg-white h-full w-full grid-rows-[auto_1fr_auto] [grid-template-areas:'header'_'content'_'footer']",
          className,
        )}
        initial={{ minWidth: 0, opacity: 0, flexBasis: 0 }}
        animate={{ minWidth: "auto", opacity: 1, flexBasis: "auto" }}
        exit={{ minWidth: 0, opacity: 0, flexBasis: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);
