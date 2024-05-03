"use client";
import React, {createContext, useContext, useState} from "react";

const GlobalUserContext = createContext({});

interface userProps {
    id: string,
    name: string,
    role: string,
    phone: string,
    year: string,
    branch: string,
    onBoarded:boolean,
    firstName: string,
    lastName: string,
    userName: string,
    hallTicketNo: string,
    techSkills: Array<string>
    softSkills: Array<string>
}

export const GlobalUserContextProvider = ({children}: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(true);
    const [User, setUser] = useState<userProps>({
        name: "",
        role: "",
        phone: "",
        year: "",
        branch: "",
        firstName: "",
        lastName: "",
        userName: "",
        hallTicketNo: "",
        onBoarded: false,
        id: "",
        techSkills: [""],
        softSkills: [""],
    });

    return (<GlobalUserContext.Provider
        value={{darkMode, setDarkMode, User, setUser}}
    >
        {children}
    </GlobalUserContext.Provider>);
};

export const useGlobalUserContext = () => useContext(GlobalUserContext);
