"use client"

import * as React from "react"
import {useEffect, useState} from "react"
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {UserButton, useUser} from "@clerk/nextjs";
import {findUserRole} from "@/utils/actions/user.actions";


const Page = () => {

    const {setTheme} = useTheme()
    const user = useUser()
    const [UserRole, setUserRole] = useState<{ role: string }>({role: "user"})

    const findRole = async () => {
        // @ts-ignore
        findUserRole({userId: user.user?.id}).then((userRole) => {
            (UserRole.role !== userRole) && setUserRole({role: userRole})
        })
    }

    findRole()

    return <main className={`w-full h-full flex flex-col justify-center items-center gap-8`}>
        <h1 className={`text-4xl`}>KSM - Placement Portal</h1>
        <div>
            {user.isSignedIn ? <Button>
                <Link href={`/${UserRole.role}/dashboard`}>
                    Dashboard
                </Link>
            </Button> : <Button>
                <Link href={"/sign-in"}>
                    Login
                </Link>
            </Button>}
        </div>
        {user.isSignedIn && <div className={`flex justify-center items-center gap-8`}><h1>This is
            the {user.isLoaded ? "Nikhil" : "user"}</h1>
            <UserButton afterSignOutUrl={"/sign-in"}/></div>}
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
