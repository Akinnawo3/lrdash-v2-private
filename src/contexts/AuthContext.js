import React, {createContext, useState} from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [userData, setUserData] = useState({});
  const loginUserAction = (data) => {
    console.log(data)
    localStorage.setItem("access_token", data.token);
    setUserData(data);
  };
  const logoutUserAction = () => {
    localStorage.clear();
    setUserData({});
  };
  return <AuthContext.Provider value={{userData, loginUserAction, logoutUserAction}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
