// src/components/Sidebar.jsx
import React from "react";

function Sidebar() {
  return (
    <aside className="hidden lg:block h-3/5 w-3/5 space-y-6 mt-28 text-center">
      <ul className="space-y-6">
        <li className="cursor-pointer hover:opacity-80">
          <img
            src="/recents.png"
            alt="Recents Icon"
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2">Recents</p>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <img
            src="/favorite.png"
            alt="Favorites Icon"
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2">Favorites</p>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <img
            src="/playlist.png"
            alt="Playlists Icon"
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2">Playlists</p>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <img
            src="/video.png"
            alt="Videos Icon"
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2">Videos</p>
        </li>
        <li className="cursor-pointer hover:opacity-80">
          <img
            src="/share.png"
            alt="Share Icon"
            className="w-10 h-10 mx-auto"
          />
          <p className="mt-2">Share</p>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
