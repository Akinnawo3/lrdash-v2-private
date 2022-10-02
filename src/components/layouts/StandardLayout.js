import SideBar from "../SideBar";
import "../../assets/scss/pages.scss";
import TopNav from "../TopNav";
import {Container} from "reactstrap";
import {useContext} from "react";
import {AppPrefrenceContext} from "../../contexts/AppPrefrenceContext";

const StandardLayout = ({children, title}) => {
  const {expanded, setExpanded, toggle} = useContext(AppPrefrenceContext);

  return (
    <div className="s-layout">
      <SideBar />
      <div className="page-body w-100 position-relative">
        <TopNav title={title}/>
        <div className="container" >{children}</div>
        {expanded && <div className="position-absolute h-100 w-100 top-0 start-0 pages-overlay d-md-none" onClick={toggle}></div>}
      </div>
    </div>
  );
};

export default StandardLayout;
