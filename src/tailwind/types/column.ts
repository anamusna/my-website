export type columnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
  children: React.ReactNode;
  offset?: {
    default: columnNumber,
    sm?: columnNumber,
    md?: columnNumber,
    lg?: columnNumber,
  },
  order?: {
    default: number,
    sm?: number,
    md?: number,
    lg?: number,
  },
  span?: {
    default: columnNumber,
    sm?: columnNumber,
    md?: columnNumber,
    lg?: columnNumber,
  },
  [key: string]: unknown,
}
