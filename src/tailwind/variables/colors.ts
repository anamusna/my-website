interface TailwindColors {
  [key: string]: string | Record<string, string>;
}

/**
 * Ansu's Color System
 * Personalized for Ansumana "Ansu" Darboe
 *
 * Philosophy:
 * - Precision & Reliability: Clear, purposeful colors for maintainable systems
 * - Simplicity & Minimalism: Neutral, balanced tones that reduce visual clutter
 * - Warmth & Approachability: Subtle, inviting accents that feel modern and friendly
 * - Energy & Optimism: Lively, positive shades without overwhelming interfaces
 * - Technical Sophistication: Perfect for dashboards, mobile-first apps, complex UIs
 * - Accessibility First: WCAG compliant contrast for light and dark modes
 */

const defaultColors: TailwindColors = {
  // Core Brand Colors - Ansu's signature palette
  "royal-primary": "#4A5FBF", // Calm, authoritative royal blue - primary brand
  "navy-primary": "#2563EB", // Clean, technical navy - secondary brand
  "red-primary": "#E74C3C", // Approachable error red - friendly yet clear
  "orange-primary": "#F97316", // Warm, energetic orange - signature accent
  "green-primary": "#0EA47C", // Fresh, reliable green - success states
  "grey-primary": "#64748B", // Balanced neutral grey - text and borders
  "grey-dividers": "#E2E8F0", // Subtle divider grey - clean separation

  // Background Colors - Clean foundations
  "bg-grey-dark": "#F1F5F9", // Light neutral for surfaces
  "bg-grey-light": "#F8FAFC", // Very light for surfaces (cool neutral)
  F6F2EE: "#F6F2EE", // Light theme page background (warm off-white)
  "light-background": "#F6F2EE",
  "light-background-alt": "#FBF8F4",
  "dark-background": "#0F172A",
  "dark-background-alt": "#151F33",
  "light-surface-raised": "#FFFFFF",

  // Interactive States - Clear affordances
  "royal-darker": "#3949A1", // Deeper royal for hover
  "navy-hover": "#1D4ED8", // Darker navy for interactions
  "green-hover": "#0B7A5F", // Darker green for success hovers
  "grey-primary-hover": "#475569", // Darker grey for hover states

  // Foundational Colors
  white: "#FFFFFF", // Pure white
  "black-primary": "#0F172A", // Deep slate for primary text
  black: "#000000", // True black

  // Accent Colors - Signature touches
  "blue-primary": "#3B82F6", // Vibrant blue for primary actions
  "cyan-primary": "#0891B2", // Technical cyan for data viz
  "mauve-primary": "#8B5CF6", // Sophisticated purple for creative elements

  // Royal Color Scale - Primary brand progression
  "royal-50": "#EEF2FF",
  "royal-100": "#E0E7FF",
  "royal-200": "#C7D2FE",
  "royal-300": "#A5B4FC",
  "royal-400": "#818CF8",
  "royal-500": "#4A5FBF",
  "royal-600": "#3949A1",
  "royal-700": "#2E3A8A",
  "royal-800": "#1E2A6C",
  "royal-900": "#131E4F",

  // Navy Color Scale - Technical precision
  "navy-50": "#EFF6FF",
  "navy-100": "#DBEAFE",
  "navy-200": "#BFDBFE",
  "navy-300": "#93C5FD",
  "navy-400": "#60A5FA",
  "navy-500": "#2563EB",
  "navy-600": "#1D4ED8",
  "navy-700": "#1E40AF",
  "navy-800": "#1E3A8A",
  "navy-900": "#1A2C5B",

  // Orange Color Scale - Warm energy
  "orange-50": "#FFF7ED",
  "orange-100": "#FFEDD5",
  "orange-200": "#FED7AA",
  "orange-300": "#FDBA74",
  "orange-400": "#FB923C",
  "orange-500": "#F97316",
  "orange-600": "#EA580C",
  "orange-700": "#C2410C",
  "orange-800": "#9A3412",
  "orange-900": "#7C2D12",

  // Primary Light Theme Colors
  "primary-light": "#4A5FBF",
  "primary-light-50": "#EEF2FF",
  "primary-light-100": "#E0E7FF",
  "primary-light-200": "#C7D2FE",
  "primary-light-300": "#A5B4FC",
  "primary-light-400": "#818CF8",
  "primary-light-500": "#4A5FBF",
  "primary-light-600": "#3949A1",
  "primary-light-700": "#2E3A8A",
  "primary-light-800": "#1E2A6C",
  "primary-light-900": "#131E4F",

  // Primary Dark Theme Colors (inverted for dark mode)
  "primary-dark": "#6366F1",
  "primary-dark-50": "#1E1B4B",
  "primary-dark-100": "#312E81",
  "primary-dark-200": "#3730A3",
  "primary-dark-300": "#4338CA",
  "primary-dark-400": "#4F46E5",
  "primary-dark-500": "#6366F1",
  "primary-dark-600": "#818CF8",
  "primary-dark-700": "#A5B4FC",
  "primary-dark-800": "#C7D2FE",
  "primary-dark-900": "#E0E7FF",

  // Grey Light Theme - Neutral hierarchy
  "grey-light": "#64748B",
  "grey-light-50": "#F8FAFC",
  "grey-light-100": "#F1F5F9",
  "grey-light-200": "#E2E8F0",
  "grey-light-300": "#CBD5E1",
  "grey-light-400": "#94A3B8",
  "grey-light-500": "#64748B",
  "grey-light-600": "#475569",
  "grey-light-700": "#334155",
  "grey-light-800": "#1E293B",
  "grey-light-900": "#0F172A",

  // Grey Dark Theme (inverted)
  "grey-dark": "#64748B",
  "grey-dark-50": "#0F172A",
  "grey-dark-100": "#1E293B",
  "grey-dark-200": "#334155",
  "grey-dark-300": "#475569",
  "grey-dark-400": "#64748B",
  "grey-dark-500": "#94A3B8",
  "grey-dark-600": "#CBD5E1",
  "grey-dark-700": "#E2E8F0",
  "grey-dark-800": "#F1F5F9",
  "grey-dark-900": "#F8FAFC",

  // Mint Light - Fresh success states
  "mint-light": "#2DD4BF",
  "mint-light-50": "#F0FDFA",
  "mint-light-100": "#CCFBF1",
  "mint-light-200": "#99F6E4",
  "mint-light-300": "#5EEAD4",
  "mint-light-400": "#2DD4BF",
  "mint-light-500": "#14B8A6",
  "mint-light-600": "#0D9488",
  "mint-light-700": "#0F766E",
  "mint-light-800": "#115E59",
  "mint-light-900": "#134E4A",

  // Mint Dark (inverted)
  "mint-dark": "#2DD4BF",
  "mint-dark-50": "#134E4A",
  "mint-dark-100": "#115E59",
  "mint-dark-200": "#0F766E",
  "mint-dark-300": "#0D9488",
  "mint-dark-400": "#14B8A6",
  "mint-dark-500": "#2DD4BF",
  "mint-dark-600": "#5EEAD4",
  "mint-dark-700": "#99F6E4",
  "mint-dark-800": "#CCFBF1",
  "mint-dark-900": "#F0FDFA",

  // Green Light - Reliable success
  "green-light": "#0EA47C",
  "green-light-50": "#ECFDF5",
  "green-light-100": "#D1FAE5",
  "green-light-200": "#A7F3D0",
  "green-light-300": "#6EE7B7",
  "green-light-400": "#34D399",
  "green-light-500": "#0EA47C",
  "green-light-600": "#059669",
  "green-light-700": "#047857",
  "green-light-800": "#065F46",
  "green-light-900": "#064E3B",

  // Green Dark (inverted)
  "green-dark": "#34D399",
  "green-dark-50": "#064E3B",
  "green-dark-100": "#065F46",
  "green-dark-200": "#047857",
  "green-dark-300": "#059669",
  "green-dark-400": "#10B981",
  "green-dark-500": "#34D399",
  "green-dark-600": "#6EE7B7",
  "green-dark-700": "#A7F3D0",
  "green-dark-800": "#D1FAE5",
  "green-dark-900": "#ECFDF5",

  // Ruby Light - Approachable errors
  "ruby-light": "#E74C3C",
  "ruby-light-50": "#FEF2F2",
  "ruby-light-100": "#FEE2E2",
  "ruby-light-200": "#FECACA",
  "ruby-light-300": "#FCA5A5",
  "ruby-light-400": "#F87171",
  "ruby-light-500": "#E74C3C",
  "ruby-light-600": "#DC2626",
  "ruby-light-700": "#B91C1C",
  "ruby-light-800": "#991B1B",
  "ruby-light-900": "#7F1D1D",

  // Ruby Dark (inverted)
  "ruby-dark": "#F87171",
  "ruby-dark-50": "#7F1D1D",
  "ruby-dark-100": "#991B1B",
  "ruby-dark-200": "#B91C1C",
  "ruby-dark-300": "#DC2626",
  "ruby-dark-400": "#EF4444",
  "ruby-dark-500": "#F87171",
  "ruby-dark-600": "#FCA5A5",
  "ruby-dark-700": "#FECACA",
  "ruby-dark-800": "#FEE2E2",
  "ruby-dark-900": "#FEF2F2",

  // Red Light - Clear alerts
  "red-light": "#E74C3C",
  "red-light-50": "#FEF2F2",
  "red-light-100": "#FEE2E2",
  "red-light-200": "#FECACA",
  "red-light-300": "#FCA5A5",
  "red-light-400": "#F87171",
  "red-light-500": "#E74C3C",
  "red-light-600": "#DC2626",
  "red-light-700": "#B91C1C",
  "red-light-800": "#991B1B",
  "red-light-900": "#7F1D1D",

  // Red Dark (inverted)
  "red-dark": "#F87171",
  "red-dark-50": "#7F1D1D",
  "red-dark-100": "#991B1B",
  "red-dark-200": "#B91C1C",
  "red-dark-300": "#DC2626",
  "red-dark-400": "#EF4444",
  "red-dark-500": "#F87171",
  "red-dark-600": "#FCA5A5",
  "red-dark-700": "#FECACA",
  "red-dark-800": "#FEE2E2",
  "red-dark-900": "#FEF2F2",
};

/**
 * Complete Tailwind Color Palette
 * Personalized for Ansu's brand and development philosophy
 */
const ansuColors = {
  // Slate - Cool, technical neutrals for developer interfaces
  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },

  // Gray - Balanced, minimalist neutrals
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  // Zinc - Warm, approachable neutrals
  zinc: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
    950: "#09090B",
  },

  // Neutral - Pure, simple grays
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A",
  },

  // Stone - Warm neutrals with personality
  stone: {
    50: "#FAFAF9",
    100: "#F5F5F4",
    200: "#E7E5E4",
    300: "#D6D3D1",
    400: "#A8A29E",
    500: "#78716C",
    600: "#57534E",
    700: "#44403C",
    800: "#292524",
    900: "#1C1917",
    950: "#0C0A09",
  },

  // Red - Friendly, approachable error states
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#E74C3C",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#450A0A",
  },

  // Orange - Warm, energetic signature color
  orange: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316",
    600: "#EA580C",
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12",
    950: "#431407",
  },

  // Amber - Golden warmth for highlights
  amber: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },

  // Yellow - Bright, optimistic attention
  yellow: {
    50: "#FEFCE8",
    100: "#FEF9C3",
    200: "#FEF08A",
    300: "#FDE047",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
    700: "#A16207",
    800: "#854D0E",
    900: "#713F12",
    950: "#422006",
  },

  // Lime - Fresh, natural energy
  lime: {
    50: "#F7FEE7",
    100: "#ECFCCB",
    200: "#D9F99D",
    300: "#BEF264",
    400: "#A3E635",
    500: "#84CC16",
    600: "#65A30D",
    700: "#4D7C0F",
    800: "#3F6212",
    900: "#365314",
    950: "#1A2E05",
  },

  // Green - Fresh, reliable success (core brand)
  green: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#0EA47C",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
    950: "#022C22",
  },

  // Emerald - Deep, trustworthy success
  emerald: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
    950: "#022C22",
  },

  // Teal - Technical sophistication with calm
  teal: {
    50: "#F0FDFA",
    100: "#CCFBF1",
    200: "#99F6E4",
    300: "#5EEAD4",
    400: "#2DD4BF",
    500: "#14B8A6",
    600: "#0D9488",
    700: "#0F766E",
    800: "#115E59",
    900: "#134E4A",
    950: "#042F2E",
  },

  // Cyan - Bright, technical accent (signature)
  cyan: {
    50: "#ECFEFF",
    100: "#CFFAFE",
    200: "#A5F3FC",
    300: "#67E8F9",
    400: "#22D3EE",
    500: "#0891B2",
    600: "#0E7490",
    700: "#155E75",
    800: "#164E63",
    900: "#164E63",
    950: "#083344",
  },

  // Sky - Light, airy, approachable
  sky: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
    950: "#082F49",
  },

  // Blue - Royal, calm authority (primary brand)
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },

  // Indigo - Deep technical precision
  indigo: {
    50: "#EEF2FF",
    100: "#E0E7FF",
    200: "#C7D2FE",
    300: "#A5B4FC",
    400: "#818CF8",
    500: "#6366F1",
    600: "#4F46E5",
    700: "#4338CA",
    800: "#3730A3",
    900: "#312E81",
    950: "#1E1B4B",
  },

  // Violet - Creative sophistication
  violet: {
    50: "#F5F3FF",
    100: "#EDE9FE",
    200: "#DDD6FE",
    300: "#C4B5FD",
    400: "#A78BFA",
    500: "#8B5CF6",
    600: "#7C3AED",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#4C1D95",
    950: "#2E1065",
  },

  // Purple - Muted, charming personality
  purple: {
    50: "#FAF5FF",
    100: "#F3E8FF",
    200: "#E9D5FF",
    300: "#D8B4FE",
    400: "#C084FC",
    500: "#A855F7",
    600: "#9333EA",
    700: "#7E22CE",
    800: "#6B21A8",
    900: "#581C87",
    950: "#3B0764",
  },

  // Fuchsia - Playful precision
  fuchsia: {
    50: "#FDF4FF",
    100: "#FAE8FF",
    200: "#F5D0FE",
    300: "#F0ABFC",
    400: "#E879F9",
    500: "#D946EF",
    600: "#C026D3",
    700: "#A21CAF",
    800: "#86198F",
    900: "#701A75",
    950: "#4A044E",
  },

  // Pink - Warm, energetic approachability
  pink: {
    50: "#FDF2F8",
    100: "#FCE7F3",
    200: "#FBCFE8",
    300: "#F9A8D4",
    400: "#F472B6",
    500: "#EC4899",
    600: "#DB2777",
    700: "#BE185D",
    800: "#9D174D",
    900: "#831843",
    950: "#500724",
  },

  // Rose - Subtle, sophisticated accents
  rose: {
    50: "#FFF1F2",
    100: "#FFE4E6",
    200: "#FECDD3",
    300: "#FDA4AF",
    400: "#FB7185",
    500: "#F43F5E",
    600: "#E11D48",
    700: "#BE123C",
    800: "#9F1239",
    900: "#881337",
    950: "#4C0519",
  },

  white: "#FFFFFF",
  black: "#000000",
};

const tailwindColors = {
  ...defaultColors,
  ...ansuColors,
};

export default tailwindColors;
