import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { ModalProps } from "../../types/layout/modal";
import { spacers } from "../../variables/scales";

const themeClasses = {
  light: {
    modal: "bg-white text-primary-light-900",
  },
  dark: {
    modal: "bg-primary-dark-900 text-white",
  },
} as const;

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  title,
  onClose,
  children,
  className,
  theme = "light",
  size = "fw",
  id,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      // Store the current focused element
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }

      // Prevent scrolling on the body
      document.body.style.overflow = "hidden";

      // Add event listener for escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);

      return () => {
        // Restore body scrolling
        document.body.style.overflow = "";

        // Remove event listener
        document.removeEventListener("keydown", handleEscape);

        // Restore focus when modal closes
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isModalOpen, onClose]);

  if (!isModalOpen) return null;

  const containerClass = "container mx-auto";
  const currentTheme = themeClasses[theme] || themeClasses.light;
  const { modal } = currentTheme;

  const gutter = spacers.xl;
  const sizeClasses = {
    sm: `max-w-sm p-${gutter / 3}rem`,
    md: `max-w-md p-${gutter / 4}rem`,
    lg: `max-w-lg p-${gutter / 5}rem`,
    xl: `max-w-xl p-${gutter / 6}rem`,
    fw: `w-full p-${gutter / 6}rem`,
  };

  const classNames = clsx(
    containerClass,
    "w-full",
    sizeClasses[size],
    modal,
    className,
  );

  const modalId = id || "modal";
  const titleId = `${modalId}-title`;
  const contentId = `${modalId}-content`;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={ariaDescribedby || contentId}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden p-4 pointer-events-none sm:p-4 md:p-6">
        <div
          ref={modalRef}
          className={clsx(
            "relative flex flex-col w-full overflow-hidden shadow-2xl pointer-events-auto transition-all duration-300 ease-out",
            "h-[90dvh] max-h-[90dvh] rounded-2xl",
            "sm:h-[calc(100vh-2rem)] sm:max-h-[92vh] sm:rounded-3xl",
            "md:h-auto md:max-h-[88vh]",
            sizeClasses[size],
            classNames,
          )}
          tabIndex={-1}
          role="document"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
