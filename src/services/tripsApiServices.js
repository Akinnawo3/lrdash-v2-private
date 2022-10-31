import axios from "axios";
import {useContext} from "react";
import {api} from "../constants/urls";
import {LoadingContext} from "../contexts/LoadingContext";
import {TripsContext} from "../contexts/tripsContext";
import {toastifyPromises} from "../helpers/toastifyHelper";

export const useTripsApiServices = () => {
  const {setGetLoading} = useContext(LoadingContext);
  const {todayPerformance, setTodayPerformance} = useContext(TripsContext);

  //get compliance for today
  const getTodayCompliance = async () => {
    setGetLoading(true);
    const asyncFunction = axios.get(`${api.trip}/reports/services`);
    const res = await toastifyPromises.get({asyncFunction});
    if (res && res.data.status !== "error") {
      await setTodayPerformance(res.data.data);
    }
    setGetLoading(false);
  };

  return {getTodayCompliance};
};
