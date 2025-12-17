import { Smile, Send } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ChatInputProps {
  inputMessage: string;
  showPicker: boolean;
  onInputChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onEmojiClick: (emojiData: any) => void;
  onTogglePicker: () => void;
  onSendMessage: () => void;
  onFocusInput: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputMessage,
  showPicker,
  onInputChange,
  onKeyPress,
  onEmojiClick,
  onTogglePicker,
  onSendMessage,
  onFocusInput,
}) => {
  const { t, i18n } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [emojiPosition, setEmojiPosition] = useState("right-3");
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputMessage]);
  useEffect(() => {
    const position = document.dir === "rtl" ? "left-3" : "right-3";
    setEmojiPosition(position);
  }, [i18n.language]);
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 relative">
        <input
          type="text"
          ref={inputRef}
          value={inputMessage}
          onFocus={onFocusInput}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder={t("chat_room.input.placeholder")}
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 caret-black"
        />
        {/* PICKER POPUP */}
        {showPicker && (
          <div className={`absolute mt-2 bottom-16 ${emojiPosition} z-50`}>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <button
          className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
          onMouseDown={onTogglePicker}
        >
          <Smile size={20} className="text-[#00bfa6]" />
        </button>
        <button
          onClick={onSendMessage}
          className="group bg-gray-200 text-gray-600 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#5304FB] hover:to-[#8F67FD] hover:text-white hover:shadow-lg"
        >
          <Send
            size={16}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
          />
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        {t("chat_room.footer.disclaimer")}
      </p>
    </div>
  );
};

export default ChatInput;
