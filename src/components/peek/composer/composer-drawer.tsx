import clsx from "clsx";
import {
  PEEK_DRAWER_WIDTH,
  resolvePeekAnimateWidth,
  toPeekDrawerWidth,
} from "../config";
import { useIsPeekLargeScreen } from "../hooks/use-is-peek-large-screen";
import { SidePeek } from "../patterns/side-peek";
import { ComposerDrawerContent } from "./composer-drawer-content";
import { useComposerStackEntry } from "./composer-stack/use-composer-stack-entry";
import { getComposerRegistryEntry } from "./registry";

export function ComposerDrawer() {
  const { entry } = useComposerStackEntry();
  const isLargeScreen = useIsPeekLargeScreen();
  const registryEntry = getComposerRegistryEntry(entry.type);
  const drawerWidth = toPeekDrawerWidth(
    entry.drawerWidth ?? registryEntry?.drawerWidth ?? PEEK_DRAWER_WIDTH.half,
  );
  const peekAnimateWidth = resolvePeekAnimateWidth(drawerWidth, isLargeScreen);

  if (!entry) {
    return null;
  }

  return (
    <SidePeek
      className={clsx("relative z-10 h-full glass")}
      animateWidth={peekAnimateWidth}
    >
      <ComposerDrawerContent />
    </SidePeek>
  );
}
