import SideBar from "../SideBar";
import "../../assets/scss/pages.scss";
import TopNav from "../TopNav";
import {Container} from "reactstrap";
import {useContext} from "react";
import {AppPrefrenceContext} from "../../contexts/AppPrefrenceContext";

const StandardLayout = ({children}) => {
  const {setExpanded} = useContext(AppPrefrenceContext);

  return (
    <div className="s-layout">
      <SideBar />
      <Container fluid className="page-body">
        <TopNav />
        <div onClick={() => setExpanded(false)}>{children}</div>
      </Container>
    </div>
  );
};

export default StandardLayout;
