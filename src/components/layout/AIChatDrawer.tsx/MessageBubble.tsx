import { useEffect, useState } from "react";
import type { ChatMessage } from "../../../types";

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [isComplete, setIsComplete] = useState(!message.isStreaming);

  useEffect(() => {
    if (!message.isStreaming) {
      setDisplayedContent(message.content);
      setIsComplete(true);
      return;
    }

    let currentIndex = 0;
    const streamInterval = setInterval(() => {
      if (currentIndex < message.content.length) {
        setDisplayedContent(message.content.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(streamInterval);
      }
    }, 10); // Adjust speed here (lower = faster)

    return () => {
      clearInterval(streamInterval);
      message.isStreaming = false;
    };
  }, [message.content, message.isStreaming]);

  return (
    <div
      className={`flex ${
        message.type === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          message.type === "user"
            ? "bg-gradient-to-r from-[#5304FB] to-[#8F67FD] text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">
          {displayedContent}
          {!isComplete && message.type === "ai" && (
            <span className="inline-block w-0.5 h-4 bg-gray-800 ml-1 animate-pulse"></span>
          )}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
