import { useCallback, useMemo } from "react";
import type { ComposeItem } from "./config";
import { getComposerRegistryEntry } from "./registry";
import { useComposerStack } from "./composer-stack/use-composer-stack";

export function useComposer() {
  const { push, pop, replace, stack } = useComposerStack();

  const close = useCallback(
    (count: number = 1) => {
      pop(count);
    },
    [pop],
  );

  const create = useCallback(
    (item: Omit<ComposeItem, "intent">) => {
      const entry: ComposeItem = { ...item, intent: "create" };
      const registryEntry = getComposerRegistryEntry(entry.type);
      const topEntry = stack.at(-1);

      const shouldReplaceTopDrawer =
        entry.as === "drawer" &&
        registryEntry?.replaceTopDrawerOnCreate === true &&
        topEntry?.type === entry.type &&
        topEntry.as === "drawer";

      if (shouldReplaceTopDrawer) {
        replace([...stack.slice(0, -1), entry]);
        return;
      }

      push(entry);
    },
    [push, replace, stack],
  );

  const edit = useCallback(
    (item: Omit<ComposeItem, "intent">) => {
      push({ ...item, intent: "edit" });
    },
    [push],
  );

  const followUp = useCallback(
    (item: Omit<ComposeItem, "intent">) => {
      push({ ...item, intent: "followup" });
    },
    [push],
  );

  const replaceStack = useCallback(
    (nextStack: ComposeItem[]) => {
      replace(nextStack);
    },
    [replace],
  );

  return useMemo(
    () => ({
      composer: {
        close,
        create,
        edit,
        followUp,
        replace: replaceStack,
        stack,
      },
    }),
    [close, create, edit, followUp, replaceStack, stack],
  );
}
