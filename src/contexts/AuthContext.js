import React, { createContext, useReducer, useEffect, useState } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [auth, dispatch] = useReducer(AuthReducer, [], () => {
    const data = localStorage.getItem("authUser")
    return data ? JSON.parse(data) : null;
  })

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
