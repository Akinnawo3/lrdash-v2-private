import { TiThLargeOutline } from "react-icons/ti";
import { TiChartBarOutline } from "react-icons/ti";

export const menuItems = [
    { title: "Dashboard", icon: <TiThLargeOutline />, link: "/" },
    {
        title: "Performance",
        icon: <TiChartBarOutline />,
        link: "performa..",
        subNavs: [
            {
                title: "Business Perf.",
                link: "/performance/business",
            },
            {
                title: "Drivers' Perf.",
                link: "/performance/driver",

            },
            {
                title: "Watch List",
                link: "/performance/watchlist",
               
            },
        ],
    },
    { title: "Finance", icon: <TiChartBarOutline />, link: "/finance" },
    {
        title: "Drivers",
        icon: <TiThLargeOutline />,
        link: "drivers",
        subNavs: [
            {
                title: "Pending",
                link: "/drivers/pending",
            },
            {
                title: "Active",
                link: "/drivers/active",
            },
        ],
    },
];