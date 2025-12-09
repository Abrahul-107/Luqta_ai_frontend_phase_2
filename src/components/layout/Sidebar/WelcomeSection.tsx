import { Plus } from "lucide-react";

const WelcomeSection: React.FC = () => (
  <div className="bg-opacity-20 rounded-xl p-4 mb-5">
    <h2 className="text-white text-sm mb-3">WELCOME BACK!</h2>
    <div className="flex items-center gap-2 mb-3 bg-purple-500 bg-opacity-20 p-2 rounded-lg">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
        D
      </div>
      <div className="flex-1">
        <h3 className="text-white text-sm">Hi, DigiContests</h3>
        <p className="text-white text-opacity-60 text-xs">
          Admin • sc@luqta.com
        </p>
      </div>
    </div>
    <p className="text-white text-opacity-80 text-xs mb-4">
      Manage your contests and participants efficiently.
    </p>
    <button className="w-full border border-purple-500 text-white py-2 px-4 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-purple-600 transition">
      <Plus size={16} />
      Create Contest
    </button>
  </div>
);
export default WelcomeSection;
