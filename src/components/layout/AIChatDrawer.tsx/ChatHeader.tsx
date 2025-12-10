import { Maximize2, Minimize2 } from "lucide-react";

interface ChatHeaderProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  isMinimized,
  onToggleMinimize,
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white text-center rounded-t-lg">
      <div className="flex items-center justify-center relative mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">✨</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold">LUQTA</span>
              <span className="text-xs bg-gradient-to-r from-blue-400 to-blue-500 text-black bg-opacity-20 px-4 py-0.5 rounded-full">
                AI
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onToggleMinimize}
          className="text-white absolute right-0 top-0 hover:bg-white cursor-pointer hover:text-black hover:bg-opacity-20 rounded-full p-2 transition"
        >
          <span className="text-xl">
            {isMinimized ? <Maximize2 /> : <Minimize2 />}
          </span>
        </button>
      </div>
      <h2 className="text-xl font-bold mb-1">Hello Mohammed M. 👋</h2>
      <p className="text-sm text-white text-opacity-90">
        How can I help you today?
      </p>
    </div>
  );
};

export default ChatHeader;
