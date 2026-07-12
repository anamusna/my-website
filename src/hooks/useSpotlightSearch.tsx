import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  SpotlightCategory,
  SpotlightEntry,
  SPOTLIGHT_CATEGORY_ORDER,
  SPOTLIGHT_ENTRIES,
} from "../data/about/spotlightData";

export interface SpotlightResult {
  id: string;
  title: string;
  description: string;
  category: SpotlightCategory;
  icon: SpotlightEntry["icon"];
  response: string;
}

export interface SpotlightSearchState {
  searchInput: string;
  results: SpotlightResult[];
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  isSearching: boolean;
  showModal: boolean;
  showSpotlight: boolean;
  isChatMode: boolean;
  selectedIndex: number;
  openSpotlight: () => void;
  closeSpotlight: () => void;
  updateSearchInput: (value: string) => void;
  clearSearchInput: () => void;
  submitCurrentQuery: () => void;
  selectResult: (result: SpotlightResult) => void;
  submitChatMessage: (message: string) => void;
  moveSelection: (direction: "up" | "down") => void;
  resetSelection: () => void;
  clearChat: () => void;
}

const SpotlightSearchContext = createContext<SpotlightSearchState | null>(null);

const SCORE_THRESHOLD = 1;
const DEBOUNCE_DELAY = 260;
const CHAT_DELAY = 800;

const normalize = (value: string) => value.trim().toLowerCase();

const buildDefaultResults = (): SpotlightResult[] => {
  const seedIds = [
    "journey-summary",
    "intro-overview",
    "project-quincy",
    "skills-core",
    "focus-healthcare",
    "education-gtti",
  ];

  const seeded: SpotlightEntry[] = seedIds
    .map((id) => SPOTLIGHT_ENTRIES.find((entry) => entry.id === id))
    .filter((e): e is SpotlightEntry => Boolean(e));

  const DEFAULT_CATEGORY_LIMIT = 1; // number of items per category
  const DEFAULT_MAX_RESULTS = 6; // overall cap to keep UI concise

  const byCategory: SpotlightEntry[] = SPOTLIGHT_CATEGORY_ORDER.flatMap(
    (cat) => {
      const entries = SPOTLIGHT_ENTRIES.filter((e) => e.category === cat);
      // Prefer entries that look like overviews/summaries when available
      const prioritized = entries.sort((a, b) => {
        const aw = Number(
          /overview|summary|what|how/i.test(a.title) ||
            a.keywords.some((k) => /overview|summary/i.test(k)),
        );
        const bw = Number(
          /overview|summary|what|how/i.test(b.title) ||
            b.keywords.some((k) => /overview|summary/i.test(k)),
        );
        return bw - aw; // true first
      });
      return prioritized.slice(0, DEFAULT_CATEGORY_LIMIT);
    },
  );

  // Merge seed with category entries, remove duplicates, and cap length
  const merged: SpotlightEntry[] = [];
  const seen = new Set<string>();
  [...seeded, ...byCategory].forEach((entry) => {
    if (!seen.has(entry.id)) {
      seen.add(entry.id);
      merged.push(entry);
    }
  });

  return merged.slice(0, DEFAULT_MAX_RESULTS).map((entry) => ({
    id: entry.id,
    title: entry.title,
    description: entry.description,
    category: entry.category,
    icon: entry.icon,
    response: entry.response,
  }));
};

const DEFAULT_RESULTS = buildDefaultResults();

const buildResult = (entry: SpotlightEntry): SpotlightResult => ({
  id: entry.id,
  title: entry.title,
  description: entry.description,
  category: entry.category,
  icon: entry.icon,
  response: entry.response,
});

const matchScore = (query: string, entry: SpotlightEntry) => {
  const normalizedQuery = normalize(query);
  const tokens = normalizedQuery.split(/\s+/);
  let score = 0;

  entry.keywords.forEach((keyword) => {
    const normalizedKeyword = normalize(keyword);
    if (normalizedKeyword === normalizedQuery) {
      score += 3;
    } else if (normalizedKeyword.includes(normalizedQuery)) {
      score += 2;
    } else if (tokens.some((token) => normalizedKeyword.includes(token))) {
      score += 1;
    }
  });

  if (normalize(entry.title).includes(normalizedQuery)) {
    score += 2;
  }

  if (entry.description.toLowerCase().includes(normalizedQuery)) {
    score += 1;
  }

  return score;
};

const buildAssistantResponse = (results: SpotlightResult[]): string => {
  if (!results.length) {
    return [
      "I couldn’t find an exact match. Here’s a quick snapshot:",
      "",
      "- Senior Full-Stack Engineer from The Gambia, now in Berlin, modernizing healthcare software at Frey ADV.",
      "- Core stack: React, TypeScript, Node.js, Next.js, AWS, Docker, Kubernetes, MongoDB.",
      "- Projects include Quincy, ZULA, innn.it, Propstack, and Buildy.",
      "",
      "Try asking about a specific project, skill, or milestone for more detail.",
    ].join("\n");
  }

  return results
    .slice(0, 3)
    .map((result) => `**${result.title}**\n${result.response}`)
    .join("\n\n");
};

export const SpotlightSearchProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState<SpotlightResult[]>(DEFAULT_RESULTS);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chatTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetChatTimer = useCallback(() => {
    if (chatTimer.current) {
      clearTimeout(chatTimer.current);
      chatTimer.current = null;
    }
  }, []);

  const openSpotlight = useCallback(() => {
    setShowModal(true);
    setShowSpotlight(true);
    setIsChatMode(false);
    setIsSearching(false);
    setMessages([]);
    setSearchInput("");
    setResults(DEFAULT_RESULTS);
    setSelectedIndex(0);
  }, []);

  const closeSpotlight = useCallback(() => {
    setShowModal(false);
    setShowSpotlight(false);
    setIsChatMode(false);
    setIsSearching(false);
    resetChatTimer();
  }, [resetChatTimer]);

  const performSearch = useCallback((query: string) => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults(DEFAULT_RESULTS);
      setSelectedIndex(0);
      return;
    }

    const ranked = SPOTLIGHT_ENTRIES.map((entry) => ({
      entry,
      score: matchScore(trimmed, entry),
    }))
      .filter(({ score }) => score >= SCORE_THRESHOLD)
      .sort((a, b) => {
        if (b.score === a.score) {
          return (
            SPOTLIGHT_CATEGORY_ORDER.indexOf(a.entry.category) -
            SPOTLIGHT_CATEGORY_ORDER.indexOf(b.entry.category)
          );
        }
        return b.score - a.score;
      })
      .map(({ entry }) => buildResult(entry));

    setResults(ranked);
    setSelectedIndex(0);
  }, []);

  const updateSearchInput = useCallback(
    (value: string) => {
      setSearchInput(value);
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        performSearch(value);
      }, DEBOUNCE_DELAY);
    },
    [performSearch],
  );

  const clearSearchInput = useCallback(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }
    setSearchInput("");
    setResults(DEFAULT_RESULTS);
    setSelectedIndex(0);
  }, []);

  const appendAssistantResponse = useCallback(
    (prompt: string, matchingResults: SpotlightResult[]) => {
      resetChatTimer();
      setIsSearching(true);
      chatTimer.current = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: buildAssistantResponse(matchingResults),
          },
        ]);
        setIsSearching(false);
      }, CHAT_DELAY);
    },
    [resetChatTimer],
  );

  const enterChatMode = useCallback(
    (prompt: string, entry?: SpotlightResult) => {
      setIsChatMode(true);
      setSearchInput("");
      setResults(DEFAULT_RESULTS);
      setSelectedIndex(0);

      setMessages((prev) => [...prev, { role: "user", content: prompt }]);

      if (entry) {
        appendAssistantResponse(prompt, [entry]);
      } else {
        const ranked = SPOTLIGHT_ENTRIES.map((candidate) => ({
          entry: candidate,
          score: matchScore(prompt, candidate),
        }))
          .filter(({ score }) => score >= SCORE_THRESHOLD)
          .sort((a, b) => b.score - a.score)
          .map(({ entry }) => buildResult(entry));

        appendAssistantResponse(prompt, ranked);
      }
    },
    [appendAssistantResponse],
  );

  const submitCurrentQuery = useCallback(() => {
    if (isChatMode) {
      return;
    }

    const trimmed = searchInput.trim();
    if (!trimmed && results[selectedIndex]) {
      enterChatMode(results[selectedIndex].title, results[selectedIndex]);
      return;
    }

    if (results.length > 0 && selectedIndex < results.length) {
      enterChatMode(results[selectedIndex].title, results[selectedIndex]);
      return;
    }

    if (trimmed) {
      enterChatMode(trimmed);
    }
  }, [enterChatMode, isChatMode, results, searchInput, selectedIndex]);

  const selectResult = useCallback(
    (result: SpotlightResult) => {
      enterChatMode(result.title, result);
    },
    [enterChatMode],
  );

  const submitChatMessage = useCallback(
    (message: string) => {
      const trimmed = message.trim();
      if (!trimmed) {
        return;
      }
      enterChatMode(trimmed);
    },
    [enterChatMode],
  );

  const moveSelection = useCallback(
    (direction: "up" | "down") => {
      if (!results.length || isChatMode) {
        return;
      }

      setSelectedIndex((prev) => {
        if (direction === "up") {
          return prev === 0 ? results.length - 1 : prev - 1;
        }
        return prev === results.length - 1 ? 0 : prev + 1;
      });
    },
    [isChatMode, results],
  );

  const resetSelection = useCallback(() => {
    setSelectedIndex(0);
  }, []);

  const clearChat = useCallback(() => {
    resetChatTimer();
    setMessages([]);
    setIsSearching(false);
    setResults(DEFAULT_RESULTS);
    setSelectedIndex(0);
  }, [resetChatTimer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSpotlight();
      } else if (event.key === "Escape" && (showModal || showSpotlight)) {
        event.preventDefault();
        if (isChatMode && messages.length > 0) {
          setIsChatMode(false);
          setMessages([]);
          setIsSearching(false);
          setResults(DEFAULT_RESULTS);
          setSearchInput("");
          setSelectedIndex(0);
        } else {
          closeSpotlight();
        }
      } else if ((showModal || showSpotlight) && !isChatMode) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          moveSelection("down");
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          moveSelection("up");
        } else if (event.key === "Enter") {
          event.preventDefault();
          submitCurrentQuery();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    closeSpotlight,
    isChatMode,
    messages.length,
    moveSelection,
    openSpotlight,
    showModal,
    showSpotlight,
    submitCurrentQuery,
  ]);

  useEffect(
    () => () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      resetChatTimer();
    },
    [resetChatTimer],
  );

  const value = useMemo<SpotlightSearchState>(
    () => ({
      searchInput,
      results,
      messages,
      isSearching,
      showModal,
      showSpotlight,
      isChatMode,
      selectedIndex,
      openSpotlight,
      closeSpotlight,
      updateSearchInput,
      clearSearchInput,
      submitCurrentQuery,
      selectResult,
      submitChatMessage,
      moveSelection,
      resetSelection,
      clearChat,
    }),
    [
      closeSpotlight,
      isChatMode,
      isSearching,
      messages,
      openSpotlight,
      results,
      searchInput,
      selectResult,
      selectedIndex,
      showModal,
      showSpotlight,
      submitChatMessage,
      submitCurrentQuery,
      updateSearchInput,
      clearSearchInput,
      moveSelection,
      resetSelection,
      clearChat,
    ],
  );

  return (
    <SpotlightSearchContext.Provider value={value}>
      {children}
    </SpotlightSearchContext.Provider>
  );
};

export const useSpotlightSearch = () => {
  const context = useContext(SpotlightSearchContext);
  if (!context) {
    throw new Error(
      "useSpotlightSearch must be used within a SpotlightSearchProvider",
    );
  }
  return context;
};
