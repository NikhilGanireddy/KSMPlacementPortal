"use client"

import React from "react";

const Layout = ({children}: { children: React.ReactNode }) => {

    return (
        <div className={`w-full min-h-full h-full max-w-[2500px] flex gap-y-8 justify-center items-center flex-col`}>
            {children}
        </div>);
}
export default Layout;

