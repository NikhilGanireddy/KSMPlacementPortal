import React from "react";
import Sidebar from "@/components/shared/Sidebar";

const Layout=({children}:{children:React.ReactNode})=>{
    return (<div className={` min-h-screen max-w-[2500px]  gap-y-16  flex flex-col gap-16 w-full md:w-3/4 p-4 lg:p-12 rounded-3xl shadow-lg justify-center items-center`}>
        <Navbar/>
        {children}</div>);
}
export default Layout;
