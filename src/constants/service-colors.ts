export type ServiceColorScheme =
  | "blue-cyan"
  | "pink-rose"
  | "yellow-orange"
  | "purple-indigo"
  | "emerald-green"
  | "teal-blue";

export const DEFAULT_SERVICE_COLOR_SCHEME: ServiceColorScheme = "blue-cyan";

const SERVICE_TITLE_COLOR_SCHEME: Record<string, ServiceColorScheme> = {
  "Production Web & Mobile Products": "blue-cyan",
  "Reliable Infrastructure & Delivery": "yellow-orange",
  "Modernizing Legacy Software": "emerald-green",
  "Architecture & Engineering Leadership": "purple-indigo",
};

export function getServiceColorScheme(title: string): ServiceColorScheme {
  return SERVICE_TITLE_COLOR_SCHEME[title] ?? DEFAULT_SERVICE_COLOR_SCHEME;
}

export type ServiceCarouselTokens = {
  gradient: string;
  accent: string;
  glow: string;
};

export const SERVICE_CAROUSEL_TOKENS: Record<
  ServiceColorScheme,
  ServiceCarouselTokens
> = {
  "blue-cyan": {
    gradient: "from-blue-500/20 via-cyan-500/15 to-indigo-500/10",
    accent: "from-blue-600 to-cyan-600",
    glow: "from-blue-400/10 to-cyan-400/5",
  },
  "yellow-orange": {
    gradient: "from-yellow-500/20 via-orange-500/15 to-amber-500/10",
    accent: "from-yellow-600 to-orange-600",
    glow: "from-yellow-400/10 to-orange-400/5",
  },
  "emerald-green": {
    gradient: "from-emerald-500/20 via-green-500/15 to-teal-500/10",
    accent: "from-emerald-600 to-green-600",
    glow: "from-emerald-400/10 to-green-400/5",
  },
  "purple-indigo": {
    gradient: "from-purple-500/20 via-indigo-500/15 to-violet-500/10",
    accent: "from-purple-600 to-indigo-600",
    glow: "from-purple-400/10 to-indigo-400/5",
  },
  "pink-rose": {
    gradient: "from-pink-500/20 via-rose-500/15 to-fuchsia-500/10",
    accent: "from-pink-600 to-rose-600",
    glow: "from-pink-400/10 to-rose-400/5",
  },
  "teal-blue": {
    gradient: "from-teal-500/20 via-sky-500/15 to-blue-500/10",
    accent: "from-teal-600 to-sky-600",
    glow: "from-teal-400/10 to-sky-400/5",
  },
};
