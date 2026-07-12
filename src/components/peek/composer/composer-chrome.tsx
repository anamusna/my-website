import clsx from "clsx";
import React, { type PropsWithChildren } from "react";
import { PeekFooter } from "../components/peek-footer";
import { PeekHeader } from "../components/peek-header";

export function ComposerWindowHeader({ children }: PropsWithChildren) {
  return (
    <PeekHeader data-cy="composer-header">{children}</PeekHeader>
  );
}

type ComposerFooterProps = React.ComponentProps<"footer">;

export function ComposerFooter({
  children,
  className,
  ...props
}: ComposerFooterProps) {
  return (
    <PeekFooter
      data-cy="composer-footer"
      className={clsx(
        "sticky bottom-0 z-10 border-t border-light-border/50 bg-white/90 p-5 glass dark:border-dark-border/40 dark:bg-gray-900/90",
        className,
      )}
      {...props}
    >
      {children}
    </PeekFooter>
  );
}
