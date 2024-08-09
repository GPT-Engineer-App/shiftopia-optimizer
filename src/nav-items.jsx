import { Home, Calendar, Settings as SettingsIcon, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import ShiftManagement from "./pages/ShiftManagement.jsx";
import SettingsPage from "./pages/Settings.jsx";
import Statistics from "./pages/Statistics.jsx";

export const navItems = [
  {
    title: "ホーム",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "シフト管理",
    to: "/shifts",
    icon: <Calendar className="h-4 w-4" />,
    page: <ShiftManagement />,
  },
  {
    title: "設定",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <SettingsPage />,
  },
  {
    title: "統計",
    to: "/statistics",
    icon: <BarChart className="h-4 w-4" />,
    page: <Statistics />,
  },
];
