import React from "react";
import Sidebar from "@/components/shared/Sidebar";

const Layout=({children}:{children:React.ReactNode})=>{
    return (<div className={`relative max-w-[2500px] flex gap-8 w-full justify-center h-full box-border`}>
        <Sidebar/>
        <div className={`flex flex-col min-h-full h-full items-center gap-8 flex-1 w-full`}>
            {children}
        </div>
    </div>);
}
export default Layout;
