import { ComposerPortalContent } from "components/peek/composer/portals/composer-portal-content";
import { getComposerRegistryEntry } from "components/peek/composer/registry";
import { useComposer } from "components/peek/composer/use-composer";
import { useComposerStackEntry } from "components/peek/composer/composer-stack/use-composer-stack-entry";
import type { ComposerSwitchProps } from "components/peek/composer/props";
import type { SectionPeekData } from "../composer/section-peek-trigger";
import { PEEK_SAMPLE_TYPES } from "./peek-types";

type SectionPeekDataWithType = SectionPeekData & {
  peekTypeId?: string;
};

export function SamplePeekComposer({ onClose }: ComposerSwitchProps) {
  const { composer } = useComposer();
  const { entry } = useComposerStackEntry();
  const section = entry.data as SectionPeekDataWithType | undefined;
  const registryEntry = getComposerRegistryEntry(entry.type);
  const peekType = PEEK_SAMPLE_TYPES.find(
    (item) => item.type === entry.type || item.type === section?.peekTypeId,
  );

  const handleClose = () => {
    onClose?.();
    composer.close();
  };

  const title = section?.sectionLabel
    ? `${section.sectionLabel} · ${registryEntry?.label ?? peekType?.label ?? "Peek"}`
    : (registryEntry?.label ?? "Sample peek");

  return (
    <>
      <ComposerPortalContent name="title">{title}</ComposerPortalContent>

      <ComposerPortalContent name="toolbar">
        <div className="flex flex-wrap items-center gap-2">
          {section?.sectionId ? (
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-300">
              #{section.sectionId}
            </span>
          ) : null}
          {peekType ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700/40 dark:text-slate-200">
              {peekType.drawerWidth} width
            </span>
          ) : null}
        </div>
      </ComposerPortalContent>

      <div className="flex flex-col gap-4 text-sm leading-6 text-light-text/90 dark:text-dark-text/90">
        {peekType ? <p>{peekType.description}</p> : null}
        {section ? (
          <p>
            Opened from{" "}
            <strong className="font-medium text-heading">
              {section.sectionLabel}
            </strong>{" "}
            ({section.sectionId}).
          </p>
        ) : (
          <p>
            Global peek demo: pick a section button to attach section context.
          </p>
        )}
      </div>

      <ComposerPortalContent name="footer">
        <button
          type="button"
          onClick={handleClose}
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Close peek
        </button>
      </ComposerPortalContent>
    </>
  );
}
