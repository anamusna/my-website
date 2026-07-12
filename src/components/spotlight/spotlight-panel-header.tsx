import ChatHeader from "components/spotlight/chat-header";
import SearchHeader from "components/spotlight/search-header";
import { useSpotlightSearch } from "hooks/useSpotlightSearch";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef } from "react";

type SpotlightPanelHeaderProps = {
  className?: string;
  chatInput?: string;
  isChatMode?: boolean;
  setChatInput?: React.Dispatch<React.SetStateAction<string>>;
};

const SpotlightPanelHeader: React.FC<SpotlightPanelHeaderProps> = ({
  chatInput,
  isChatMode,
  setChatInput,
}) => {
  const {
    searchInput,
    results,
    messages,
    closeSpotlight,
    updateSearchInput,
    clearSearchInput,
    submitCurrentQuery,
    resetSelection,
    clearChat,
  } = useSpotlightSearch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitCurrentQuery();
  };

  const handleChatClear = () => {
    clearChat();
    if (setChatInput) {
      setChatInput("");
    }
  };

  const isSearchSendDisabled = !searchInput.trim() && results.length === 0;

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isChatMode ? (
        <motion.div
          key="search-header"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <SearchHeader
            searchInput={searchInput}
            onSearchInputChange={updateSearchInput}
            onSubmit={handleSearchSubmit}
            onClear={clearSearchInput}
            onClose={closeSpotlight}
            isSearchSendDisabled={isSearchSendDisabled}
            isSearchClearDisabled={searchInput.trim().length === 0}
            inputRef={inputRef}
            resetSelection={resetSelection}
          />
        </motion.div>
      ) : (
        <motion.div
          key="chat-header"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <ChatHeader
            onClear={handleChatClear}
            onClose={closeSpotlight}
            messages={messages}
            chatInput={chatInput ?? ""}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpotlightPanelHeader;
