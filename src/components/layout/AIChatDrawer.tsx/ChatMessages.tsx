import type { ChatMessage } from "../../../types";
import LoadingIndicator from "./LoadingIndicator";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface ChatMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  loading,
  messagesEndRef,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={messagesEndRef}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {loading && <TypingIndicator />}
    </div>
  );
};

export default ChatMessages;
