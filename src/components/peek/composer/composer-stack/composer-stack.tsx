import React, { useCallback, useState, type ReactNode } from "react";
import type { ComposeItem, ComposerStackState } from "../config";
import { ComposerStackContext } from "./composer-stack-context";

type Props = {
  children: ReactNode;
  onStackChange?: (stack: ComposerStackState) => void;
};

export function ComposerStack({ children, onStackChange }: Props) {
  const [stack, setStack] = useState<ComposerStackState>([]);

  const updateStack = useCallback(
    (updater: (current: ComposerStackState) => ComposerStackState) => {
      setStack((current) => {
        const next = updater(current);
        onStackChange?.(next);
        return next;
      });
    },
    [onStackChange],
  );

  const push = useCallback(
    (item: ComposeItem) => {
      updateStack((current) => current.concat(item));
    },
    [updateStack],
  );

  const pop = useCallback(
    (count = 1) => {
      updateStack((current) =>
        current.slice(0, Math.max(0, current.length - count)),
      );
    },
    [updateStack],
  );

  const replace = useCallback(
    (nextStack: ComposerStackState) => {
      updateStack(() => nextStack);
    },
    [updateStack],
  );

  const clear = useCallback(() => {
    updateStack(() => []);
  }, [updateStack]);

  return (
    <ComposerStackContext.Provider
      value={{ stack, push, pop, replace, clear }}
    >
      {children}
    </ComposerStackContext.Provider>
  );
}
