const Header: React.FC = () => (
  <header className="text-center h-100 flex flex-col justify-center items-center mb-8 relative z-10">
    <div className="flex items-center justify-center gap-2 text-white text-xs mb-2 border rounded-full p-1 px-3">
      <img src="src/assets/icons/wand_stars.svg" alt="" />
      <span>Powered by Luqta AI</span>
    </div>

    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
      Luqta AI Analytics Platform
    </h1>

    <p className="text-white mt-2 text-sm md:text-base">
      User Insights & Predictions
    </p>
  </header>
);
export default Header;
