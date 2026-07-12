export const STORAGE_KEYS = {
  THEME: "theme" as const,
  LANGUAGE: "language" as const,
  USER_PREFERENCES: "userPreferences" as const,
  IS_MOBILE: "isMobile" as const,
  PERMISSIONS: "permissions" as const,
  DISPLAY_SETTINGS: "displaySettings" as const,
  AVAILABLE_DEVICES: "availableDevices" as const,
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export type StorageKeyType = keyof typeof STORAGE_KEYS;

export type EncryptedKey = "userPreferences";

export const TOKEN_KEYS = {
  ACCESS: "accessToken",
  REFRESH: "refreshToken",
} as const;

export const SETTINGS_KEYS = {
  THEME: "theme",
  FONT_SIZE: "fontSize",
  LANGUAGE: "language",
} as const;

export const ENCRYPTED_KEYS = ["userPreferences"] as const;
