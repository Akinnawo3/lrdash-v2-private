import React, {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
export let api;

const useUrlComp = () => {
  const {auth} = useContext(AuthContext);
  const liveApi = {
    oem: "https://oem-service-microservices.api.lagosride.com",
    fileUpload: "https://fileupload-service-microservices.api.lagosride.com",
    messaging: "https://message-service-microservices.api.lagosride.com",
  };
  const testApi = {
    oem: "https://staging-server.lagosride.com/oem-service",
    fileUpload: "https://staging-server.lagosride.com/fileupload-service",
    messaging: "https://staging-server.lagosride.com/message-service",
  };
  api = auth?.data_mode === "live" ? liveApi : testApi;
  return null;
};

export default useUrlComp;
