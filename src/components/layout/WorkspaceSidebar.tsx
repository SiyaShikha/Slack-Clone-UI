import { useState } from "react";

function WorkspaceSidebar() {
  const [showChannels, setShowChannels] = useState(true);
  const [showDMs, setShowDMs] = useState(true);

  return (
    <aside className="w-96 border-r p-4 bg-(--light-purple) text-white rounded-tl-lg">
      <h1 className="mb-4">Workspace</h1>

      <div className="mb-6">
        <button
          onClick={() => setShowChannels(!showChannels)}
          className="mb-2 flex items-center gap-2 w-full group"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            {showChannels ? "▾" : "▸"}
          </span>

          <span>Channels</span>

          <span className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:bg-white/10 px-1 rounded">+</button>
            <button className="hover:bg-white/10 px-1 rounded">⋮</button>
          </span>
        </button>

        {showChannels && (
          <ul className="space-y-2 ml-4">
            <li># general</li>
            <li># engineering</li>
            <li># system-design</li>
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

          <span>Direct Messages</span>

          <span className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:bg-white/10 px-1 rounded">+</button>
            <button className="hover:bg-white/10 px-1 rounded">⋮</button>
          </span>
        </button>

        {showDMs && (
          <ul className="space-y-2 ml-4">
            <li>Alice</li>
            <li>Bob</li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default WorkspaceSidebar;
