import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  faAdd,
  faLock,
  faLockOpen,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useEnvironmentSettings } from "../../../context/EnvironmentContext";
import { devError, devWarn } from "../../../utils/logger";
import { FieldsetProps } from "../../types/forms/fieldset";
import Button from "../elements/Button";
import { Typography } from "../elements/Typography";

const editorConfiguration = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
    ],
    shouldNotGroupWhenFull: true,
  },
  placeholder: "Add your clinical note here...",
  removePlugins: [
    "CKFinderUploadAdapter",
    "CKFinder",
    "EasyImage",
    "Image",
    "ImageCaption",
    "ImageStyle",
    "ImageToolbar",
    "ImageUpload",
    "MediaEmbed",
    "Table",
    "TableToolbar",
    "TableProperties",
    "TableCellProperties",
  ],
};

const Fieldset: React.FC<FieldsetProps> = ({
  data = "",
  onChange,
  editing = false,
  onButtonClick,
  field = "text",
  isConfidential,
  onConfidentialToggle,
  title,
  children,
  className = "",
}) => {
  const { theme } = useEnvironmentSettings();

  const themeClasses = {
    wrapper:
      theme === "dark"
        ? "bg-gray-800 border-gray-700 text-white"
        : "bg-white border-gray-200 text-gray-900",
    editor:
      theme === "dark"
        ? "[&_.ck-editor__editable]:!bg-gray-800 [&_.ck-editor__editable]:!text-white [&_.ck-editor__editable]:!border-gray-700 [&_.ck-toolbar]:!bg-gray-700 [&_.ck-toolbar__item]:!text-white"
        : "[&_.ck-editor__editable]:!bg-white [&_.ck-editor__editable]:!text-gray-900 [&_.ck-editor__editable]:!border-gray-200",
  };

  useEffect(() => {
    // Apply dark mode styles to CKEditor
    if (theme === "dark") {
      const style = document.createElement("style");
      style.textContent = `
        .ck.ck-editor__main>.ck-editor__editable {
          background: rgb(31, 41, 55) !important;
          color: white !important;
        }
        .ck.ck-toolbar {
          background: rgb(55, 65, 81) !important;
          border-color: rgb(75, 85, 99) !important;
        }
        .ck.ck-button:not(.ck-disabled):hover,
        .ck.ck-button:not(.ck-disabled):active {
          background: rgb(75, 85, 99) !important;
        }
        .ck.ck-button .ck-button__label {
          color: white !important;
        }
        .ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
          background: rgb(75, 85, 99) !important;
        }
        .ck.ck-editor__editable_inline {
          min-height: 150px;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [theme]);

  const handleEditorChange = (_event: any, editor: any) => {
    if (!onChange) return;

    try {
      const newData = editor.getData();
      if (typeof newData === "string") {
        onChange(newData);
      } else {
        devWarn("Editor data is not a string:", newData);
        onChange("");
      }
    } catch (error) {
      devError("Editor change error:", error);
      onChange("");
    }
  };

  return (
    <div
      className={`relative p-4 rounded-lg border shadow-sm ${themeClasses.wrapper} ${className}`}
    >
      {title && (
        <Typography variant="h4" className="mb-4">
          {title}
        </Typography>
      )}

      {field === "note" && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={onConfidentialToggle}
              icon={isConfidential ? faLock : faLockOpen}
              theme={theme}
              variant={isConfidential ? "primary" : "transparent"}
              size="sm"
              className="touch-action-manipulation"
              aria-label={
                isConfidential ? "Confidential Note" : "Mark as Confidential"
              }
            >
              {isConfidential ? "Confidential" : "Mark as Confidential"}
            </Button>
          </div>
        </div>
      )}

      <div
        className={`min-h-[150px] touch-action-manipulation rounded-lg ${themeClasses.editor}`}
      >
        <CKEditor
          editor={ClassicEditor}
          data={typeof data === "string" ? data : ""}
          config={editorConfiguration}
          onChange={handleEditorChange}
          onError={(error) => {
            devError("CKEditor error:", error);
          }}
        />
      </div>

      {field === "note" && onButtonClick && (
        <div className="mt-4 flex justify-end">
          <Button
            onClick={onButtonClick}
            icon={editing ? faSave : faAdd}
            theme={theme}
            variant="primary"
            size="lg"
            className="touch-action-manipulation shadow-sm hover:shadow-md transition-all"
          >
            {editing ? "Save Note" : "Add Note"}
          </Button>
        </div>
      )}

      {children}
    </div>
  );
};

export default Fieldset;
