import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ActivityPage from "./pages/ActivityPage";
import ThreadsPage from "./pages/ThreadsPage";
import HuddlesPage from "./pages/HuddlesPage";
import DirectoriesPage from "./pages/DirectoriesPage";
import Channel from "./components/Channel";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/activity",
        element: <ActivityPage />,
      },
      {
        path: "/threads",
        element: <ThreadsPage />,
      },
      {
        path: "/huddles",
        element: <HuddlesPage />,
      },
      {
        path: "/directories",
        element: <DirectoriesPage />,
      },
      {
        path: "/channel/:channelName",
        element: <Channel />,
      },
    ],
  },
]);
