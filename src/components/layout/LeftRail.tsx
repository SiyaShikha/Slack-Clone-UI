import {
  Home,
  Bell,
  Folder,
  MoreHorizontal,
  MessagesSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeftRail = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-16 flex flex-col items-center py-4 gap-8   text-white text-xs">
      <button
        className="hover:bg-white/10 px-1 py-1 rounded w-full flex flex-col items-center"
        onClick={() => navigate("/home")}
      >
        <Home size={22} />
        <span>Home</span>
      </button>

      <button className="hover:bg-white/10 px-1 py-1 rounded w-full flex flex-col items-center">
        <MessagesSquare size={22} />
        <span>DMs</span>
      </button>

      <button className="hover:bg-white/10 px-1 py-1 rounded w-full flex flex-col items-center">
        <Bell size={22} />
        <span>Activity</span>
      </button>

      <button className="hover:bg-white/10 px-1 py-1 rounded w-full flex flex-col items-center">
        <Folder size={22} />
        <span>Files</span>
      </button>

      <button className="hover:bg-white/10 px-1 py-1 rounded w-full flex flex-col items-center">
        <MoreHorizontal />
        <span>More</span>
      </button>
    </aside>
  );
};

export default LeftRail;
