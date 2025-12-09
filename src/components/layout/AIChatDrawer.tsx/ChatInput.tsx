import { Smile, Send } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

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
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 relative">
        <input
          type="text"
          value={inputMessage}
          onFocus={onFocusInput}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask luqta AI anything..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
        />
        {/* PICKER POPUP */}
        {showPicker && (
          <div className="absolute mt-2 bottom-16 right-3 z-50">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <button className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
          <Smile size={20} onClick={onTogglePicker} />
        </button>
        <button
          onClick={onSendMessage}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-2 hover:shadow-lg transition"
        >
          <Send size={16} className="cursor-pointer" />
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        Luqta AI can make mistakes. Double-check replies.
      </p>
    </div>
  );
};

export default ChatInput;
