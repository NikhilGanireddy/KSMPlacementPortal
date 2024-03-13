import React from "react";

const Layout=({children}:{children:React.ReactNode})=>{
    return (<div className={`w-full h-screen flex justify-center items-center flex-col`}>
            {children}</div>);
}
export default Layout;
