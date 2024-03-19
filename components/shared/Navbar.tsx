"use client"

import React, {useEffect} from "react";
import {useTheme} from "next-themes";
import Link from "next/link";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons"
import {Button} from "@/components/ui/button";

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    // setTheme("light")
    // console.log(theme)

    useEffect(() => {

    }, [theme]);
    return <main
        className={`w-full max-w-[2500px] flex justify-between rounded-xl p-4 shadow-lg  items-center`}>

        <Link href={"/"}>
            <h1 className={`text-xl font-semibold`}>Placement Portal</h1>
        </Link>
        <div>
            {theme === "light" ? <Button className={`rounded-xl flex w-full px-4 py-2 items-center gap-2`} onClick={() => setTheme("dark")} variant="outline" size="icon">
                <MoonIcon className={`h-[1.2rem] w-[1.2rem]`}/>
                <span>Dark</span>

            </Button> : <Button className={`rounded-lg w-full px-4 py-2  flex items-center gap-2`} onClick={() => setTheme("light")}
                                variant="outline" size="icon">
                <SunIcon className={`h-[1.2rem] w-[1.2rem]`}/>
                <span>Light</span>
            </Button>}
        </div>
    </main>
}

export default Navbar;
