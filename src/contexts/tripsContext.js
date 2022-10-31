import React, { createContext, useState } from "react";

export const TripsContext = createContext();

const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [driversPerormance, setDriversPerformance] = useState();
  const [driversPerormanceCount, setDriversPerformanceCount] = useState(0);

  return (
    <TripsContext.Provider
      value={{
        trips,
        setTrips,
        driversPerormance,
        setDriversPerformance,
        driversPerormanceCount,
        setDriversPerformanceCount,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

export default TripsContextProvider;
