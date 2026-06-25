import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ActivityPage from "./pages/ActivityPage";
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
        path: "/channel/:channelName",
        element: <Channel />,
      },
    ],
  },
]);
