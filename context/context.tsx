"use client";
import {createContext, useContext, useState} from "react";

const GlobalUserContext = createContext({});

export const GlobalUserContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <GlobalUserContext.Provider
            value={{darkMode, setDarkMode}}
>
    {children}
    </GlobalUserContext.Provider>
);
};

export const useGlobalUserContext = () => useContext(GlobalUserContext);
