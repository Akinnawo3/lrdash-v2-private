import React, {createContext, useState} from "react";

export const TripsContext = createContext();

const TripsContextProvider = ({children}) => {
  const [trips, setTrips] = useState([]);

  return <TripsContext.Provider value={{trips, setTrips}}>{children}</TripsContext.Provider>;
};

export default TripsContextProvider;
