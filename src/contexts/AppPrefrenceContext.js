import React, {createContext, useState} from "react";

export const AppPrefrenceContext = createContext();

const AppPrefrenceContextProvider = ({children}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    console.log("toggle ran")
    setExpanded(!expanded);
  };

  return <AppPrefrenceContext.Provider value={{expanded, setExpanded,toggle}}>{children}</AppPrefrenceContext.Provider>;
};

export default AppPrefrenceContextProvider;
