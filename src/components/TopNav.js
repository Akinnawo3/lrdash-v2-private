import "../assets/scss/top-nav.scss";
import {BsSearch} from "react-icons/bs";
import {MdNotificationsNone} from "react-icons/md";
import {RiArrowDownSLine} from "react-icons/ri";
import {useContext, useState} from "react";
import {AppPrefrenceContext} from "../contexts/AppPrefrenceContext";
import {GiCrossMark} from "react-icons/gi";
import {IoMdLogOut} from "react-icons/io";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {useAuthApiServices} from "../services/AuthApiServices";
import {confirmDialogue} from "../helpers/confirmationDialogue";

const TopNav = ({title}) => {
  const {logoutUser} = useAuthApiServices();
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const {expanded, toggle} = useContext(AppPrefrenceContext);
  return (
    <div className={"sticky-top top-nav w-100 d-flex align-items-end justify-content-between px-2 pb-3"}>
      <div className="d-flex align-items-end  ">
        <div className="me-2 icons-box cursor-pointer sidebar-control d-md-none" onClick={toggle}>
          {expanded ? (
            <GiCrossMark />
          ) : (
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5954 5.29464H1.44775M1.44775 0.875977H6.22096M10.5954 9.34066H6.22096"
                stroke="#082E38"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="fs-5 fw-bold mt-5 lh-sm">{title}</div>
      </div>
      <div className="d-flex align-items-end px-2">
        <span className="icons-box me-3 cursor-pointer">
          <BsSearch />
        </span>
        <span className="icons-box me-3 cursor-pointer">
          <MdNotificationsNone />
        </span>
        <span className="icons-box cursor-pointer border border-info b-3 me-2">
          <img alt="avatar " src="/images/avatar.png" height={23} width={20} />
        </span>
        <span className="">
          <Dropdown isOpen={dropdownToggle} toggle={() => setDropdownToggle(!dropdownToggle)}>
            <DropdownToggle className="bg-transparent border-0 p-0">
              <RiArrowDownSLine size={25} style={{color: "#00D2A8"}} onClick={() => setDropdownToggle(!dropdownToggle)} data-toggle="dropdown" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => confirmDialogue({message: "Logout user", asyncFunction: logoutUser})}>
                <IoMdLogOut size="27" color="red" />
                <span className="fw-bold ms-2">LOG OUT</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
      </div>
    </div>
  );
};

export default TopNav;
