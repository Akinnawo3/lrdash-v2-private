import { useContext } from "react";
import { AppPrefrenceContext } from "../contexts/AppPrefrenceContext";
import "../assets/scss/sidebar.scss";
import { Link, useNavigate } from "react-router-dom";

import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { menuItems } from "./layouts/menuItems";

const SideBar = () => {
  const { expanded, setExpanded } = useContext(AppPrefrenceContext);
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${expanded && "expanded"}`}>
      <div className="mt-4 mb-5 d-flex justify-content-center">
        <Link to="/">
          <img className="" alt="logo" src="/images/logo.png" width={150} />
        </Link>
      </div>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/"
        onSelect={({ itemId }) => {
          // maybe push to the route
          itemId.includes("/") && navigate(itemId);
          itemId.includes("/") && setExpanded(false);
        }}
        items={menuItems.map((item) => ({
          title: item.title,
          itemId: item.link,
          elemBefore: () => item?.icon,
          subNav: item.subNavs
            ? item.subNavs.map((subNav) => ({
                title: subNav.title,
                itemId: subNav.link,
              }))
            : null,
        }))}
      />
    </div>
  );
};

export default SideBar;
