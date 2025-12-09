import { ChevronsRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "../../../types";
import { useLuqtaAI } from "../../../hooks/useLuqtaAI";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import QuickActions from "./QuickActions";
import { quickActions } from "../../../data/quickActions";

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ isOpen, onClose }) => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const [showPicker, setShowPicker] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const { askAI, loading } = useLuqtaAI();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    const aiReply = await askAI(inputMessage);

    const newAIMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: aiReply || "Sorry, I could not process that.",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newAIMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emojiData: any) => {
    setInputMessage((prev) => prev + emojiData.emoji);
    setShowPicker(false);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed bg-transparent inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen
            ? "bg-opacity-50 backdrop-blur-sm"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full
            ${isMinimized ? "md:w-[405px]" : "md:w-[100%]"}
            bg-white shadow-2xl z-50 transform
            transition-all duration-300 ease-in-out flex flex-col
            ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Close Button */}
        <button
          onClick={isMinimized ? onClose : () => setIsMinimized(true)}
          className="absolute left-3 top-2 -ml-3 z-[60] bg-white text-gray-700
             hover:bg-gray-100 p-1 rounded-r shadow cursor-pointer
             transition"
        >
          <ChevronsRight size={20} />
        </button>

        <ChatHeader
          isMinimized={isMinimized}
          onToggleMinimize={() => setIsMinimized((prev) => !prev)}
        />

        <QuickActions
          actions={quickActions}
          showActions={!messages.length}
          onActionClick={(label) => setInputMessage(label)}
        />

        <ChatMessages
          messages={messages}
          loading={loading}
          messagesEndRef={messagesEndRef}
        />

        <ChatInput
          inputMessage={inputMessage}
          showPicker={showPicker}
          onInputChange={setInputMessage}
          onKeyPress={handleKeyPress}
          onEmojiClick={handleEmojiClick}
          onTogglePicker={() => setShowPicker((prev) => !prev)}
          onSendMessage={handleSendMessage}
          onFocusInput={() => setShowPicker(false)}
        />
      </div>
    </>
  );
};

export default AIChatDrawer;
