import {
  Headphones,
  MessageCircle,
  MessagesSquare,
  NotebookTabs,
  SquareEqual,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateChannelModal from "../CreateChannelModal";

const WorkspaceSidebar = () => {
  const navigate = useNavigate();
  const initialChannels = ["general", "engineering", "system-design"]; // get channels from API
  const dms = ["Alice", "Bob"]; // get DMs from API

  const [channelList, setChannelList] = useState(initialChannels);
  const [dmList] = useState(dms);

  const [showChannels, setShowChannels] = useState(true);
  const [showDMs, setShowDMs] = useState(true);
  const [showChannelMenu, setShowChannelMenu] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");

  const handleCreateChannel = () => {
    const channelName = newChannelName.trim();

    if (!channelName) {
      return;
    }

    setChannelList((prev) =>
      prev.includes(channelName) ? prev : [...prev, channelName],
    );
    setNewChannelName("");
    setShowCreateChannelModal(false);
    setShowChannelMenu(false);
  };

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
          Huddle
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
        <div className="mb-2 flex items-center gap-2 w-full group">
          <button
            type="button"
            onClick={() => setShowChannels(!showChannels)}
            className="flex items-center gap-2 flex-1 text-left"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
              {showChannels ? "▾" : "▸"}
            </span>

            <SquareEqual size={18} />
            <span>Channels</span>
          </button>

          <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity relative">
            <button
              type="button"
              className="hover:bg-white/10 px-1 rounded"
              onClick={(event) => {
                event.stopPropagation();
                setShowCreateChannelModal(true);
              }}
            >
              +
            </button>
            <button
              type="button"
              className="hover:bg-white/10 px-1 rounded"
              onClick={(event) => {
                event.stopPropagation();
                setShowChannelMenu((prev) => !prev);
              }}
            >
              ⋮
            </button>

            {showChannelMenu && (
              <div className="absolute right-0 top-8 z-20 w-48 rounded-md border border-slate-200 bg-white p-2 shadow-lg text-slate-800">
                <button
                  type="button"
                  className="w-full rounded px-2 py-1 text-left hover:bg-slate-100"
                  onClick={(event) => {
                    event.stopPropagation();
                    setShowChannelMenu(false);
                    setShowCreateChannelModal(true);
                  }}
                >
                  Create a channel
                </button>
              </div>
            )}
          </div>
        </div>

        {showChannels && (
          <ul className="space-y-2 ml-4">
            {channelList.map((channel, index) => (
              <li key={`${channel}-${index}`}>
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
              <li key={`${dm}-${index}`}>{dm}</li>
            ))}
          </ul>
        )}
      </div>

      <CreateChannelModal
        isOpen={showCreateChannelModal}
        newChannelName={newChannelName}
        onChannelNameChange={setNewChannelName}
        onCancel={() => {
          setShowCreateChannelModal(false);
          setNewChannelName("");
        }}
        onCreate={handleCreateChannel}
      />
    </aside>
  );
};

export default WorkspaceSidebar;
