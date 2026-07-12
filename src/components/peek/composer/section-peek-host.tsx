import clsx from "clsx";
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

type SectionPeekHostProps = {
  children: ReactNode;
};

/**
 * Responsive composer host:
 * - Desktop (≥1024px): true split — content shifts left by the drawer's actual
 *   registered width, drawer occupies the freed right side. No overlay.
 * - Mobile / tablet: fixed overlay + full-width drawer sheet.
 */
export function SectionPeekHost({ children }: SectionPeekHostProps) {
  const { stack } = useComposerStack();
  const { composer } = useComposer();
  const isOpen = stack.length > 0;
  const isLargeScreen = useIsPeekLargeScreen();

  // Resolve the top entry's drawer width (matches the logic in ComposerDrawer).
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

  // Inline style keeps padding-right in sync with the actual drawer width.
  const contentStyle =
    isOpen && isLargeScreen ? { paddingRight: resolvedDrawerWidth } : undefined;

  return (
    <>
      {/* Content area — shifts right on desktop to make room for the drawer */}
      <div
        className={clsx(
          "transition-[padding-right] duration-300 ease-in-out",
        )}
        style={contentStyle}
      >
        {children}
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            {/* Backdrop — only on small / tablet screens */}
            {!isLargeScreen && (
              <PeekOverlay
                key="section-peek-overlay"
                onClick={() => composer.close()}
                className="fixed z-[60]"
              />
            )}

            {/* Drawer panel — fixed right, full height below header */}
            <div
              key="section-peek-panel"
              data-cy="section-peek-panel"
              className="fixed inset-x-0 top-16 bottom-0 z-[70] flex justify-end sm:top-20"
            >
              <ComposerRoot />
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
