import React, { useState } from "react";
import { de } from "date-fns/locale";
import Datepicker, {
  DateRangeType,
  DateValueType,
  ShortcutsItem,
} from "react-tailwindcss-datepicker";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import { Label } from "../elements/Typography";
import { DatepickerProps } from "../../../tailwind/types/forms/datepicker";

const DefaultDatepicker: React.FC<DatepickerProps> = ({
  label,
  placeholder = "Select a date",
  theme = "light",
  onChange,
  useRange = false,
  disabled = false,
  initialDate = { startDate: null, endDate: null },
  minDate,
  asSingle = !useRange,
  maxDate,
  showShortcuts = true,
  configs,
  className,
}) => {
  const [date, setDate] = useState<DateValueType>(initialDate);
  const { fontSize } = useEnvironmentSettings();

  const handleDateChange = (newDate: DateValueType) => {
    if (newDate) {
      const startDate = newDate.startDate
        ? newDate.startDate.toLocaleString("de-DE")
        : null;
      const endDate = newDate.endDate
        ? newDate.endDate.toLocaleString("de-DE")
        : null;

      setDate(newDate);
      onChange(newDate as DateRangeType);
    }
  };

  const themeColorss = {
    light: {
      background: "bg-white",
      text: "text-black",
      border: "border-dark-secondary",
    },
    dark: {
      background: "bg-black",
      text: "text-white",
      border: "border-light-secondary",
    },
  };

  const themeColors = {
    light: `bg-white text-black border-gray-300`,
    dark: `bg-black text-white border-gray-700`,
  };

  const themeClasses = themeColors[theme] || themeColors.light;

  const inputClasses = `
      w-full px-4 py-2 
       ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"}
      border ${theme === "dark" ? "border-gray-600" : "border-gray-300"}
      rounded-lg
      focus:outline-none focus:ring-2 focus:ring-primary
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className || ""}
    `;

  //const currentTheme = themeColors[theme] || themeColors.light;
  //const { background, text, border } = currentTheme;

  const defaultShortcuts: Record<string, ShortcutsItem> = {
    today: {
      text: "Heute",
      period: { start: new Date(), end: new Date() },
    },
    thisWeek: {
      text: "Diese Woche",
      period: {
        start: new Date(
          new Date().setDate(new Date().getDate() - new Date().getDay())
        ),
        end: new Date(
          new Date().setDate(new Date().getDate() + (6 - new Date().getDay()))
        ),
      },
    },
    thisMonth: {
      text: "Dieser Monat",
      period: {
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      },
    },
  };

  const mergedShortcuts = {
    ...defaultShortcuts,
    ...configs?.shortcuts,
  };

  return (
    <div className={`flex flex-col mb-4`}>
      {label && (
        <Label htmlFor={label} className={`block font-medium`}>
          {label}
        </Label>
      )}
      <Datepicker
        value={date}
        i18n={"de"}
        onChange={handleDateChange}
        inputClassName={`${inputClasses}`}
        useRange={useRange}
        placeholder={placeholder}
        primaryColor={theme === "light" ? "blue" : "orange"}
        showShortcuts={showShortcuts}
        disabled={disabled}
        minDate={minDate}
        asSingle={asSingle}
        maxDate={maxDate}
        configs={{
          shortcuts: mergedShortcuts,
        }}
      />
    </div>
  );
};

export default DefaultDatepicker;
