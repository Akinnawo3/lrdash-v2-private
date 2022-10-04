import {useLocation, useNavigate} from "react-router-dom";
export const usePaginationHelper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paginate = ({pageNumber, setCurrentPage}) => {
    navigate(`${location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return {
    paginate,
  };
};
