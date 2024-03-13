"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useUser} from "@clerk/nextjs";

const Page = () => {
    const {setTheme} = useTheme()

    const user = useUser()

    return <main className={`w-full h-full flex flex-col justify-center items-center gap-8`}>
        <h1 className={`text-4xl`}>KSM - Placement Portal</h1>
        <div>
            {user.isSignedIn ? <Button>
                <Link href={"/dashboard"}>
                    Dashboard
                </Link>
            </Button> : <Button>
                <Link href={"/sign-in"}>
                    Login
                </Link>
            </Button>}
        </div>
        {user.isSignedIn && <h1>This is the {user.isLoaded ? "Nikhil" : "user"}</h1>}
    </main>
}

export default Page


// <DropdownMenu>
// <DropdownMenuTrigger asChild>
// <Button variant="outline" size="icon">
//     <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//     <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     <span className="sr-only">Toggle theme</span>
// </Button>
// </DropdownMenuTrigger>
// <DropdownMenuContent align="end">
//   <DropdownMenuItem onClick={() => setTheme("light")}>
//     Light
//   </DropdownMenuItem>
//   <DropdownMenuItem onClick={() => setTheme("dark")}>
//     Dark
//   </DropdownMenuItem>
//   <DropdownMenuItem onClick={() => setTheme("system")}>
//     System
//   </DropdownMenuItem>
// </DropdownMenuContent>
// </DropdownMenu>
