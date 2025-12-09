interface AIButtonProps {
  onClick?: () => void;
}
const AIButton: React.FC<AIButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition flex items-center gap-2"
  >
    <span>✨</span>
    <span>LUQTA AI</span>
  </button>
);

export default AIButton;
