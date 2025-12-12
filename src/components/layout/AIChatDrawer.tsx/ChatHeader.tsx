import {
  Maximize2,
  Minimize2,
  PanelTopClose,
  PanelTopOpen,
} from "lucide-react";

interface ChatHeaderProps {
  name?: string;
  isMinimized: boolean;
  showActions: boolean;
  showActionToggle: boolean;
  onToggleMinimize: () => void;
  onToggleShowActions: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  isMinimized,
  showActions,
  showActionToggle,
  onToggleShowActions,
  onToggleMinimize,
}) => {
  return (
    <div className="bg-gray-100 p-6 relative text-black text-center rounded-t-lg">
      <div className="flex items-center mt-10 justify-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <img src="src/assets/icons/chatbot_header.svg" alt="" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span
                className="font-bold text-xl"
                style={{ fontFamily: "Eurostile, sans-serif" }}
              >
                LUQTA
              </span>
              <span className="text-xs text-white bg-gradient-to-r from-[#5304FB] to-[#8F67FD] text-black bg-opacity-20 px-4 py-0.5 rounded-full">
                AI
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onToggleMinimize}
          className="text-gray-600 absolute right-6 top-6 hover:bg-white cursor-pointer hover:text-black hover:bg-opacity-20 rounded-full p-2 transition"
        >
          <span className="text-xl">
            {isMinimized ? <Maximize2 /> : <Minimize2 />}
          </span>
        </button>

        {showActionToggle && (
          <button
            onClick={onToggleShowActions}
            title="Quick Actions"
            className="absolute right-2 bottom-0 z-[60] bg-white text-gray-700
               hover:bg-gray-100 p-1 shadow rounded-t cursor-pointer
             transition"
          >
            {showActions ? (
              <PanelTopOpen size={16} />
            ) : (
              <PanelTopClose size={16} />
            )}
          </button>
        )}
      </div>
      <h2 className="text-xl font-bold mb-1">Hello {name} 👋</h2>
      <p className="text-sm text-gray-500 text-opacity-90">
        How can I help you today?
      </p>
    </div>
  );
};

export default ChatHeader;
