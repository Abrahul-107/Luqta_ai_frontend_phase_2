import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="text-center h-100 flex flex-col justify-center items-center mb-8 relative z-10">
      <LanguageSwitcher className="absolute top-4 right-4" />
      <div className="flex items-center justify-center gap-2 text-white text-xs mb-2 border rounded-full p-1 px-3">
        <img src="src/assets/icons/wand_stars.svg" alt="" />
        <span>{t("platform.powered_by")}</span>
      </div>

      <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
        {t("platform.title")}
      </h1>

      <p className="text-white mt-2 text-sm md:text-base">
        {t("platform.subtitle")}
      </p>
    </header>
  );
};
export default Header;
