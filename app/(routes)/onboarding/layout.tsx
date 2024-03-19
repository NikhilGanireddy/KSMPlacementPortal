"use client"

import React from "react";
import Navbar from "@/components/shared/Navbar";

const Layout = ({children}: { children: React.ReactNode }) => {

    return (<div className={`w-full min-h-screen max-w-[2500px] flex gap-y-16 items-center flex-col`}>
        <Navbar/>
        {children}
    </div>);
}
export default Layout;

