import React from "react";

const Layout=({children}:{children:React.ReactNode})=>{
    return (<div className={`gap-16  w-full h-full max-w-[2500px] flex justify-center items-center flex-col`}>
        {children}
    </div>);
}
export default Layout;
