import React, {createContext, useState} from "react";

export const TripsContext = createContext();

const TripsContextProvider = ({children}) => {
  const [trips, setTrips] = useState([]);
  const [todayPerformance, setTodayPerformance] = useState();

  return <TripsContext.Provider value={{trips, setTrips, todayPerformance, setTodayPerformance}}>{children}</TripsContext.Provider>;
};

export default TripsContextProvider;
