import axios from "axios";
import { useContext } from "react";
import { api } from "../constants/urls";
import { LoadingContext } from "../contexts/LoadingContext";
import { TripsContext } from "../contexts/tripsContext";
import { toastifyPromises } from "../helpers/toastifyHelper";

export const useTripsApiServices = () => {
  const { setGetLoading } = useContext(LoadingContext);
  const { setDriversPerformance, setDriversPerformanceCount } =
    useContext(TripsContext);
  //get compliance for today
  const getCompliance = async ({
    watch = false,
    driverId = "",
    startDate = "",
    endDate = "",
    page = 1,
    q = "",
    component = "",
  }) => {
    setGetLoading(true);
    const asyncFunction = axios.get(
      `${api.trip}/reports/services/?page=${page}&item_per_page=20&start_date=${startDate}&end_date=${endDate}&watch=${watch}&driverId=${driverId}&q=${q}&component=${component}`
    );
    const res = await toastifyPromises.get({ asyncFunction });
    if (res && res.data.status !== "error") {
      component === "count"
        ? setDriversPerformanceCount()
        : setDriversPerformance(res.data.data);
    }
    setGetLoading(false);
  };


  

  return { getCompliance };
};
