import clsx from "clsx";
import React from "react";

type PeekTitleProps = React.ComponentProps<"div">;

export const PeekTitle: React.FC<PeekTitleProps> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-cy="peek-title"
    className={clsx("min-w-0 flex-1 text-base font-semibold text-heading", className)}
    {...rest}
  >
    {children}
  </div>
);
