import clsx from "clsx";
import React from "react";

type PeekContentProps = React.ComponentProps<"div">;

export const PeekContent: React.FC<PeekContentProps> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-cy="peek-content"
    className="flex min-h-0 flex-1 flex-col overflow-y-auto [grid-area:content]"
  >
    <div
      data-cy="peek-content__inner"
      className={clsx(
        "relative flex min-h-0 max-w-full flex-1 flex-col p-5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  </div>
);
