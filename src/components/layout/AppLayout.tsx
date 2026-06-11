import { Outlet } from "react-router-dom";

import TopNav from "./TopNav";
import LeftRail from "./LeftRail";
import WorkspaceSidebar from "./WorkspaceSidebar";

const AppLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-(--dark-purple)">
      <TopNav />

      <div className="flex flex-1 overflow-hidden">
        <LeftRail />
        <WorkspaceSidebar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
