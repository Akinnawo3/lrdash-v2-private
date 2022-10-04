import axios from "axios";
import {NotificationManager} from "react-notifications";
import {baseURL, imageBaseURL, imageURL} from "../constants/apiUrls";

export const uploadImageService = async (body) => {
  try {
    const res = await axios.post(`${imageBaseURL + imageURL}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
      return null;
    } else {
      return res.data.path;
      //   NotificationManager.success("");
      // closeRoomModal();
      //   closeWifiModal();
    }
  } catch (err) {
    // NotificationManager.error("Network error please try again or check your internet connection");
  }
};
