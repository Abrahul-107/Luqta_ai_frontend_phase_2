const Header: React.FC = () => (
  <header className="text-center h-60 flex flex-col justify-center items-center mb-8 relative z-10">
    <div className="flex items-center justify-center gap-2 text-white/70 text-xs mb-2">
      <span>✨</span>
      <span>Powered by Luqta AI</span>
    </div>

    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
      Luqta AI Analytics Platform
    </h1>

    <p className="text-white/60 mt-2 text-sm md:text-base">
      User Insights & Predictions
    </p>
  </header>
);
export default Header;
