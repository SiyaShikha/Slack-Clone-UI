import {
  Headphones,
  MessageCircle,
  MessagesSquare,
  NotebookTabs,
  SquareEqual,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkspaceSidebar = () => {
  const navigate = useNavigate();
  const channels = ["general", "engineering", "system-design"]; // get channels from API
  const dms = ["Alice", "Bob"]; // get DMs from API

  const [channelList] = useState(channels);
  const [dmList] = useState(dms);

  const [showChannels, setShowChannels] = useState(true);
  const [showDMs, setShowDMs] = useState(true);

  return (
    <aside className="w-80 border-r p-4 bg-(--light-purple) text-white rounded-tl-lg">
      <h1 className="mb-4">Workspace</h1>

      <div className="mb-6">
        <button
          onClick={() => navigate("/threads")}
          className="hover:bg-white/10 px-1 py-1 rounded mb-2 flex items-center gap-2 w-full group"
        >
          <MessageCircle size={18} />
          Threads
        </button>
        <button
          onClick={() => navigate("/huddles")}
          className="hover:bg-white/10 px-1 py-1 rounded mb-2 flex items-center gap-2 w-full group"
        >
          <Headphones size={18} />
          Huddles
        </button>
        <button
          onClick={() => navigate("/directories")}
          className="hover:bg-white/10 px-1 py-1 rounded mb-2 flex items-center gap-2 w-full group"
        >
          <NotebookTabs size={18} />
          Directories
        </button>
      </div>

      <hr className="mb-6" />

      <div className="mb-6">
        <button
          onClick={() => setShowChannels(!showChannels)}
          className="mb-2 flex items-center gap-2 w-full group"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            {showChannels ? "▾" : "▸"}
          </span>

          <SquareEqual size={18} />
          <span>Channels</span>

          <span className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:bg-white/10 px-1 rounded">+</button>
            <button className="hover:bg-white/10 px-1 rounded">⋮</button>
          </span>
        </button>

        {showChannels && (
          <ul className="space-y-2 ml-4">
            {channelList.map((channel, index) => (
              <li key={index}>
                <button
                  className="hover:bg-white/10 px-2 py-1 rounded w-full text-left"
                  onClick={() => navigate(`/channel/${channel}`)}
                >
                  # {channel}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button
          onClick={() => setShowDMs(!showDMs)}
          className="mb-2 flex items-center gap-2 w-full group"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            {showDMs ? "▾" : "▸"}
          </span>

          <MessagesSquare size={18} />
          <span>Direct Messages</span>

          <span className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:bg-white/10 px-1 rounded">+</button>
            <button className="hover:bg-white/10 px-1 rounded">⋮</button>
          </span>
        </button>

        {showDMs && (
          <ul className="space-y-2 ml-4">
            {dmList.map((dm, index) => (
              <li key={index}>{dm}</li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default WorkspaceSidebar;
