import {useContext, useState} from "react";
import axios from "axios";
// import {AuthActionSuccess, LogoutAction} from "../actions/AuthActions";
import {NotificationManager} from "react-notifications";
import {api} from "../constants/urls";
import {LoadingContext} from "../contexts/LoadingContext.js";
import {AuthContext} from "../contexts/AuthContext.js";
import {useLocation, useNavigate} from "react-router";
import {toastifyPromises} from "../helpers/toastifyHelper";

export const useAuthApiServices = () => {
  // api
  const navigate = useNavigate();
  const {postLoading, setPostLoading} = useContext(LoadingContext);
  const {loginUserAction, logoutUserAction} = useContext(AuthContext);

  const loginUser = async (body) => {
    setPostLoading(true);
    const asyncFunction = axios.post(`https://users-service-microservices.api.lagosride.com/v1.1/auth/login`, body);
    const res = await toastifyPromises.post({asyncFunction, pendingMsg: "Login in", SuccessMsg: "Login Successful"});
    if (res && res.data.status !== "error") {
      await loginUserAction(res.data.data);
      window.location.replace("/");
    }
    setPostLoading(false);
  };

  const logoutUser = () => {
    logoutUserAction();
    navigate("/signin");
  };
  return {
    loginUser,
    logoutUser,
  };
};
