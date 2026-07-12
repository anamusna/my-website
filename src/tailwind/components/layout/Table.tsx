import React from "react";

interface Column {
  key?: string;
  accessor?: string;
  header: string;
  cell?: (row: any) => React.ReactNode;
}

interface TableProps {
  data: any[];
  columns: Column[];
  caption?: string;
  summary?: string;
  "aria-label"?: string;
  className?: string;
  rowClassName?: string;
  theme?: "light" | "dark";
  striped?: boolean;
  onRowClick?: any;
  hoverable?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "fw";
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  caption,
  summary,
  "aria-label": ariaLabel,
  className = "",
  rowClassName = "",
  theme = "light",
  striped = false,
  onRowClick,
  hoverable = false,
  size = "md",
}) => {
  const getColumnKey = (column: Column) => column.key || column.accessor || "";
  const getCellContent = (row: any, column: Column) => {
    if (column.cell) {
      return column.cell(row);
    }
    const key = getColumnKey(column);
    return row[key] || "";
  };

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    fw: "w-full",
  };

  return (
    <div role="region" aria-label={ariaLabel} className={`w-full ${className}`}>
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table
          data-testid="table-desktop"
          role="grid"
          className={`min-w-full divide-y divide-grey-dividers dark:divide-grey-primary ${
            hoverable ? "hover:bg-gray-50 dark:hover:bg-gray-800" : ""
          } ${sizeClasses[size]}`}
          aria-label={ariaLabel}
          aria-rowcount={data.length + 1}
          aria-colcount={columns.length}
          summary={summary}
        >
          {caption && <caption>{caption}</caption>}
          <thead className="bg-bg-light dark:bg-gray-900">
            <tr role="row">
              {columns.map((column) => (
                <th
                  key={getColumnKey(column)}
                  scope="col"
                  role="columnheader"
                  aria-label={column.header}
                  className="px-6 py-3 text-left text-xs font-medium text-grey-hover uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            role="rowgroup"
            className="divide-y divide-grey-dividers dark:divide-grey-primary"
          >
            {data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                role="row"
                aria-rowindex={rowIndex + 1}
                className={`${rowClassName} ${
                  striped && rowIndex % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-800"
                    : ""
                }`}
              >
                {columns.map((column) => (
                  <td
                    key={getColumnKey(column)}
                    role="gridcell"
                    aria-label={`${column.header}: ${
                      getCellContent(row, column) || ""
                    }`}
                    className="px-6 py-4 whitespace-nowrap text-grey-primary"
                  >
                    {getCellContent(row, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div
        data-testid="table-mobile"
        className={`md:hidden ${sizeClasses[size]}`}
        role="region"
        aria-label={`${ariaLabel} (Mobile View)`}
      >
        {data?.map((row, rowIndex) => (
          <div
            key={rowIndex}
            role="row"
            aria-rowindex={rowIndex + 1}
            className={`p-4 mb-4 rounded-lg border bg-white dark:bg-gray-800 border-grey-dividers transition-all duration-200 ${rowClassName} ${
              hoverable ? "hover:shadow-lg" : ""
            }`}
          >
            {columns.map((column) => (
              <div
                key={getColumnKey(column)}
                role="cell"
                className="mb-2 last:mb-0"
              >
                <div
                  className="text-xs font-medium text-grey-hover"
                  aria-hidden="true"
                >
                  {column.header}
                </div>
                <div
                  className="mt-1 text-grey-primary"
                  aria-label={`${column.header}: ${
                    getCellContent(row, column) || ""
                  }`}
                >
                  {getCellContent(row, column)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
