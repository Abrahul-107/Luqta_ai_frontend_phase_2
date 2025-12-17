import { useTranslation } from "react-i18next";

interface AIButtonProps {
  onClick?: () => void;
}
const AIButton: React.FC<AIButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className="fixed flex items-center justify-between bottom-8 right-8 cursor-pointer bg-[#611BFB] text-white pl-2 pr-4 py-1 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition flex items-center"
    >
      <img
        className="size-12 p-0 mt-1  rounded-full"
        src="src/assets/icons/chat_icon.png"
        alt=""
      />
      <span>{t("chat_button.label")}</span>
    </button>
  );
};

export default AIButton;
