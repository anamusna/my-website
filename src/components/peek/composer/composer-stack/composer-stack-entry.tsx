import React, { useContext, type ReactNode } from "react";
import { ComposerStackContext } from "./composer-stack-context";
import { ComposerStackEntryContext } from "./composer-stack-entry-context";

type Props = {
  children: ReactNode;
  index: number;
};

export function ComposerStackEntry({ children, index }: Props) {
  const { stack } = useContext(ComposerStackContext);
  const entry = stack[index];

  if (!entry) {
    return null;
  }

  return (
    <ComposerStackEntryContext.Provider value={{ entry }}>
      {children}
    </ComposerStackEntryContext.Provider>
  );
}
