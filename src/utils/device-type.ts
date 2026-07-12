export type DeviceType =
  | "mobile-xs"
  | "mobile"
  | "mobile-large"
  | "mobile-landscape"
  | "tablet"
  | "tablet-landscape"
  | "laptop"
  | "desktop"
  | "desktop-large";

export interface ScreenSize {
  width: number;
  height: number;
  orientation: "portrait" | "landscape";
}

export const getDeviceType = (screenSize: ScreenSize): DeviceType => {
  const { width, orientation } = screenSize;

  if (width < 480) return "mobile-xs"; // Very small phones
  if (width < 640) return "mobile"; // Standard phones
  if (width < 768)
    return orientation === "landscape" ? "mobile-landscape" : "mobile-large"; // Large phones
  if (width < 1024)
    return orientation === "landscape" ? "tablet-landscape" : "tablet"; // Tablets/iPads
  if (width < 1280) return "laptop"; // Small laptops
  if (width < 1536) return "desktop"; // Standard desktops
  return "desktop-large"; // Large desktops
};
