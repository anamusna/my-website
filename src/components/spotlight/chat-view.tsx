import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { SpotlightResult } from "hooks/useSpotlightSearch";
import ChatComposer from "./chat-composer";
import ChatMessages from "./chat-messages";
import ChatSuggestions from "./chat-suggestions";
import { SpotlightChatMessage } from "./types";

interface ChatViewProps {
  messages: SpotlightChatMessage[];
  isSearching: boolean;
  suggestions: SpotlightResult[];
  onSelectSuggestion: (result: SpotlightResult) => void;
  chatInput: string;
  onChatInputChange: (value: string) => void;
  onChatSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChatDraftClear: () => void;
  chatInputRef: React.RefObject<HTMLInputElement>;
  onClearConversation: () => void;
  onClose: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({
  messages,
  isSearching,
  suggestions,
  onSelectSuggestion,
  chatInput,
  onChatInputChange,
  onChatSubmit,
  onChatDraftClear,
  chatInputRef,
  onClearConversation,
  onClose,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isSearching]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className={clsx(
          "flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 sm:px-4 sm:py-4",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700",
          messages.length === 0 ? "pb-3" : "pb-2",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {messages.length === 0 ? (
            <motion.div
              key="suggestions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              <ChatSuggestions
                suggestions={suggestions}
                onSelectSuggestion={onSelectSuggestion}
              />
            </motion.div>
          ) : (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <ChatMessages messages={messages} isSearching={isSearching} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0">
        <ChatComposer
          value={chatInput}
          onChange={onChatInputChange}
          onSubmit={onChatSubmit}
          onClearDraft={onChatDraftClear}
          inputRef={chatInputRef}
        />
      </div>
    </>
  );
};

export default React.memo(ChatView);
