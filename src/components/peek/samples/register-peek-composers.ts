import { registerComposer } from "components/peek/composer/registry";
import { SamplePeekComposer } from "./sample-peek-composer";
import { PEEK_SAMPLE_TYPES } from "./peek-types";

let registered = false;

export function registerPeekComposers() {
  if (registered) {
    return;
  }

  for (const peekType of PEEK_SAMPLE_TYPES) {
    registerComposer(peekType.type, {
      component: SamplePeekComposer,
      drawerWidth: peekType.drawerWidth,
      label: peekType.label,
    });
  }

  registered = true;
}
