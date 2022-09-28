import {useContext} from "react";
import {TiThLargeOutline} from "react-icons/ti";
import {RiCloseCircleFill} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import sidebarIMG from "../assets/img/sidebar-card-Img.png";
import {AppPrefrenceContext} from "../contexts/AppPrefrenceContext";
import "../assets/scss/sidebar.scss";

const SideBar = () => {
  const {expanded, setExpanded} = useContext(AppPrefrenceContext);

  const menuItems = [{title: "Home", icon: <TiThLargeOutline />, linkTo: "/"}];

  return <div className={`sidebar ms-4 ${expanded && "expanded"}`}>
    
  </div>;
};

export default SideBar;
