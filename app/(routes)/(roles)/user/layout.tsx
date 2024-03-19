import React from "react";
import Navbar from "@/components/shared/Navbar";

const Layout=({children}:{children:React.ReactNode})=>{
    return (<div className={` min-h-screen max-w-[2500px] flex flex-col gap-16 w-full justify-center items-center`}>
        <Navbar/>
        {children}</div>);
}
export default Layout;
