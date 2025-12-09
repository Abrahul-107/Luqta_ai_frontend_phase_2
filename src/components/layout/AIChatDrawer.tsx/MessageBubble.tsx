import type { ChatMessage } from "../../../types";

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div
      className={`flex ${
        message.type === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          message.type === "user"
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
