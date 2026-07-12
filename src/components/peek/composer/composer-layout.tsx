import { AnimatePresence } from "motion/react";
import { type ReactNode } from "react";
import { PeekOverlay } from "../components/peek-overlay";
import {
  PEEK_DRAWER_WIDTH,
  resolvePeekAnimateWidth,
  toPeekDrawerWidth,
} from "../config";
import { useIsPeekLargeScreen } from "../hooks/use-is-peek-large-screen";
import { ComposerRoot } from "./composer-root";
import { useComposerStack } from "./composer-stack/use-composer-stack";
import { getComposerRegistryEntry } from "./registry";
import { useComposer } from "./use-composer";

type ComposerLayoutProps = {
  /** Left-panel content (page body). Window scroll is preserved. */
  main: ReactNode;
  /**
   * Right-panel override. Defaults to <ComposerRoot />.
   * Do not wrap in SidePeek — the panel is positioned automatically.
   */
  detail?: ReactNode;
};

/**
 * Page-level split layout — mirrors the Doctorly ComposerStack / SidePeek pattern.
 *
 * Desktop (≥1024px): content shifts left by the drawer's registered width;
 * drawer occupies the freed right side as a fixed panel. No overlay.
 *
 * Mobile / tablet: fixed full-width sheet + backdrop overlay.
 *
 * Window scroll is intentionally preserved so that BottomDock section nav,
 * ScrollToTopButton, and Framer Motion whileInView all keep working.
 * Place <ComposerStack> at the router / layout level (already in Layout.tsx).
 */
export function ComposerLayout({ main, detail }: ComposerLayoutProps) {
  const { stack } = useComposerStack();
  const { composer } = useComposer();
  const isOpen = stack.length > 0;
  const isLargeScreen = useIsPeekLargeScreen();

  // Mirror the width-resolution logic in ComposerDrawer so the content padding
  // always matches the actual drawer width (quarter / third / half).
  const topEntry = stack[stack.length - 1];
  const registryEntry = topEntry
    ? getComposerRegistryEntry(topEntry.type)
    : undefined;
  const resolvedDrawerWidth = resolvePeekAnimateWidth(
    toPeekDrawerWidth(
      topEntry?.drawerWidth ??
        registryEntry?.drawerWidth ??
        PEEK_DRAWER_WIDTH.half,
    ),
    isLargeScreen,
  );

  // Inline style — Tailwind can't generate arbitrary percentage utilities.
  const contentStyle =
    isOpen && isLargeScreen ? { paddingRight: resolvedDrawerWidth } : undefined;

  return (
    <>
      {/* Left content — shifts right on desktop to give room to the drawer */}
      <div
        className="transition-[padding-right] duration-300 ease-in-out"
        style={contentStyle}
      >
        {main}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            {/* Backdrop — mobile / tablet only */}
            {!isLargeScreen && (
              <PeekOverlay
                key="composer-layout-overlay"
                onClick={() => composer.close()}
                className="fixed z-[60]"
              />
            )}

            {/* Drawer panel — fixed right, full height below the header */}
            <div
              key="composer-layout-panel"
              data-cy="composer-layout-panel"
              className="fixed inset-x-0 top-16 bottom-0 z-[70] flex justify-end sm:top-20"
            >
              {detail ?? <ComposerRoot />}
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
