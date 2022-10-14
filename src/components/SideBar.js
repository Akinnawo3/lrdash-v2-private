import {useContext} from "react";
import {TiThLargeOutline} from "react-icons/ti";
import {TiChartBarOutline} from "react-icons/ti";
import {AppPrefrenceContext} from "../contexts/AppPrefrenceContext";
import "../assets/scss/sidebar.scss";
import {Link, useNavigate} from "react-router-dom";

import {Navigation} from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const SideBar = () => {
  const {expanded, setExpanded} = useContext(AppPrefrenceContext);
  const navigate = useNavigate();

  const menuItems = [
    {title: "Dashboard", icon: <TiThLargeOutline />, link: "/"},
    {
      title: "Performance",
      icon: <TiChartBarOutline />,
      link: "performa..",
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
    {title: "Finance", icon: <TiChartBarOutline />, link: "/finance"},
    {
      title: "Drivers",
      icon: <TiThLargeOutline />,
      link: "drivers",
      subNavs: [
        {
          title: "Pending",
          link: "/performance/business",
        },
        {
          title: "Active",
          link: "/performance/driver",
        },
      ],
    },
  ];
  return (
    <div className={`sidebar ${expanded && "expanded"}`}>
      <div className="mt-4 mb-5 d-flex justify-content-center">
        <Link to="/">
          <img className="" alt="logo" src="images/logo.png" width={150} />
        </Link>
      </div>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/"
        onSelect={({itemId}) => {
          // maybe push to the route
          itemId.includes("/") && navigate(itemId);
          itemId.includes("/") && setExpanded(false);
        }}
        items={
          menuItems.map((item) => ({
            title: item.title,
            itemId: item.link,
            elemBefore: () => item?.icon,
            subNav: item.subNavs
              ? item.subNavs.map((subNav) => ({
                  title: subNav.title,
                  itemId: subNav.link,
                }))
              : null,
          }))

          // [
          //   {
          //     title: "Dashboard",
          //     itemId: "/dashboard",
          //     // you can use your own custom Icon component as well
          //     // icon is optional
          //     elemBefore: () => <RiCloseCircleFill />,
          //   },
          //   {
          //     title: "Management",
          //     itemId: "/management",
          //     elemBefore: () => <RiCloseCircleFill />,
          //     subNav: [
          //       {
          //         title: "Projects",
          //         itemId: "/management/projects",
          //       },
          //       {
          //         title: "Members",
          //         itemId: "/management/members",
          //       },
          //     ],
          //   },
          //   {
          //     title: "Another Item",
          //     itemId: "/another",
          //     elemBefore: () => <RiCloseCircleFill />,
          //     subNav: [
          //       {
          //         title: "Teams",
          //         itemId: "/management/teams",
          //       },
          //     ],
          //   },
          // ]
        }
      />
    </div>
  );
};

export default SideBar;
