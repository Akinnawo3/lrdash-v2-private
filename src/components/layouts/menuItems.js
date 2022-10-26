import { TiThLargeOutline } from "react-icons/ti";
import { TiChartBarOutline } from "react-icons/ti";
import { financeRoutes } from "../sidebarRoutes/financeLinks";
import { performanceLinks } from "../sidebarRoutes/performanceLinks";

export const menuItems = [
  { title: "Dashboard", icon: <TiThLargeOutline />, link: "/" },
  performanceLinks,
  financeRoutes,
];
