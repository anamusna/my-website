import clsx from "clsx";
import React, { useLayoutEffect } from "react";
import { useComposerPortals } from "./use-composer-portals";
import type { ComposerPortalName } from "./types";

export type ComposerPortalProps = React.HTMLAttributes<HTMLDivElement> & {
  name: ComposerPortalName;
};

export function ComposerPortal({ name, ...divProps }: ComposerPortalProps) {
  const { portals, setMounted } = useComposerPortals();

  useLayoutEffect(() => {
    setMounted((current) =>
      current.includes(name) ? current : current.concat(name),
    );

    return () => {
      setMounted((current) => current.filter((portal) => portal !== name));
    };
  }, [name, setMounted]);

  return (
    <div
      {...divProps}
      data-cy={`composer-portal-${name}`}
      ref={portals[name]}
    />
  );
}

export function ComposerPortalTitle({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      data-cy="composer-title"
      className={clsx("min-w-0 flex-1 text-base font-semibold text-heading", className)}
    >
      <ComposerPortal
        className={clsx(
          "flex h-full min-w-0 items-center gap-x-2.5 break-words sm:whitespace-nowrap",
          className,
        )}
        name="title"
      />
    </div>
  );
}
