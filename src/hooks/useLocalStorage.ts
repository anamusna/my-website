import { useState } from "react";
import { StorageKeyType, STORAGE_KEYS } from "../shared/constants/storage";
import { devError } from "../utils/logger";

const parseStoredValue = <T>(
  key: StorageKeyType,
  value: string,
  initialValue: T
): T => {
  try {
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  } catch {
    return initialValue;
  }
};

const stringifyValue = (key: StorageKeyType, value: any): string => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value.toString();
  }

  if (typeof value === "object" || Array.isArray(value)) {
    return JSON.stringify(value);
  }

  return String(value);
};

export const useLocalStorage = <T>(
  key: keyof typeof STORAGE_KEYS,
  initialValue: T
) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(STORAGE_KEYS[key]);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      devError(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(
        STORAGE_KEYS[key],
        JSON.stringify(valueToStore)
      );
    } catch (error) {
      devError(error);
    }
  };

  return [storedValue, setValue] as const;
};
