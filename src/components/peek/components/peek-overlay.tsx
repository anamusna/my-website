import clsx from "clsx";
import React from "react";

type PeekOverlayProps = React.ComponentProps<"button">;

export const PeekOverlay: React.FC<PeekOverlayProps> = ({
  className,
  type = "button",
  "aria-label": ariaLabel = "Close panel",
  ...rest
}) => (
  <button
    type={type}
    data-cy="peek-overlay"
    aria-label={ariaLabel}
    className={clsx(
      "fixed inset-0 z-[60] bg-black/20 backdrop-blur-[1px] dark:bg-black/40",
      className,
    )}
    {...rest}
  />
);
