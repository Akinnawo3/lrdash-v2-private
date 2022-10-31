import React, {createContext, useState} from "react";

export const LoadingContext = createContext();
const LoadingContextProvider = ({children}) => {
  const [getLoading, setGetLoading] = useState(false); //the loader whe there is a get request
  const [postLoading, setPostLoading] = useState(false); //the loader whe there is a post request
  return <LoadingContext.Provider value={{getLoading, setGetLoading, postLoading, setPostLoading}}>{children}</LoadingContext.Provider>;
};

export default LoadingContextProvider;
