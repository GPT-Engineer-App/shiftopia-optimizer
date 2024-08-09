import { Home, Calendar, Settings, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import ShiftManagement from "./pages/ShiftManagement.jsx";
import Settings from "./pages/Settings.jsx";
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
    icon: <Settings className="h-4 w-4" />,
    page: <Settings />,
  },
  {
    title: "統計",
    to: "/statistics",
    icon: <BarChart className="h-4 w-4" />,
    page: <Statistics />,
  },
];
