import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "../../../types";

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [isComplete, setIsComplete] = useState(!message.isStreaming);

  /**
   * Converts plain text newlines into Markdown-compatible line breaks
   * - Single \n  → line break
   * - Double \n\n → paragraph break
   */
  const normalizeForMarkdown = (text: string) => {
    return text
      .replace(/\*\* /g, "**\n") // Replace "* " with "*\n"
      .replace(/\r\n|\n/g, "\n\n"); // Replace "** " with "**\n"
  };

  useEffect(() => {
    if (!message.isStreaming) {
      setDisplayedContent(message.content);
      setIsComplete(true);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < message.content.length) {
        setDisplayedContent(message.content.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 10);

    return () => {
      message.isStreaming = false;
      return clearInterval(interval);
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
        {/* Markdown block */}
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {normalizeForMarkdown(displayedContent) + (isComplete ? "" : " ▍")}
          </ReactMarkdown>
        </div>

        {/* Streaming cursor */}
        {/* {!isComplete && message.type === "ai" && (
          <span className="inline-block w-0.5 h-4 bg-gray-800 ml-1 animate-pulse" />
        )} */}
      </div>
    </div>
  );
};

export default MessageBubble;
