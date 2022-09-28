import React, { createContext, useState } from 'react';

export const AppPrefrenceContext = createContext();

const AppPrefrenceContextProvider = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <AppPrefrenceContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </AppPrefrenceContext.Provider>
    );
}

export default AppPrefrenceContextProvider;
