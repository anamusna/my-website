import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface AccordionItem {
  id: string;
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
  icon?: IconDefinition;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  variant?: "default" | "bordered" | "modern" | "minimal";
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  onItemToggle?: (itemId: string, isOpen: boolean) => void;
}
