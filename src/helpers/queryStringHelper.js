import {useSearchParams} from "react-router-dom";

export const useQueryStringHelper = () => {
  const [searchParams] = useSearchParams();
  const pageFromQuery = searchParams.get("page");

  const getPageNoFromQueryString = () => (pageFromQuery === null ? 1 : parseInt(pageFromQuery, 10));

  return {
    getPageNoFromQueryString,
  };
};
