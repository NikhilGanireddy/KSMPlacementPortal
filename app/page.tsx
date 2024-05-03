"use client"

import * as React from "react"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useUser} from "@clerk/nextjs";
import {createUser, findUser} from "@/utils/actions/user.actions";
import {useGlobalUserContext} from "@/context/context";
import {toast} from "sonner";

const Page = () => {

    // const {setTheme} = useTheme()
    const user = useUser()
    // @ts-ignore
    const {User, setUser} = useGlobalUserContext()

    if (user.isSignedIn) {
        const creatingUser = async () => {
            // @ts-ignore
            await createUser(user.user?.id)
        }
        creatingUser().then(() => toast("User Updated"))

        // @ts-ignore
        findUser({userId: user.user?.id}).then((result) => {
            if (result !== null) {
                if (result.userName !== User.userName && result.role !== User.role) {
                    // setUser({userName: result.userName, role: result.role,})
                    setUser({
                        name: result.userName,
                        role: result.role,
                        phone: result.phone,
                        year: result.year,
                        branch: result.branch,
                        firstName: result.firstName,
                        lastName: result.lastName,
                        userName: result.userName,
                        hallTicketNo: result.hallTicketNo,
                        onBoarded: result.onBoarded,
                        id: result.id,
                        techSkills: result.techSkills,
                        softSkills: result.softSkills,
                    })
                }
            }
        })
    }

    return <main className={`w-full flex h-full flex-col justify-center items-center gap-8`}>
        <h1 className={`text-4xl`}>KSM - Placement Portal</h1>
        <div className={`flex items-center justify-center gap-8`}>
            {user.isSignedIn ? <Button className={``}>
                {User.onBoarded ? <Link href={`/${User.role}/dashboard`}>
                    Dashboard
                </Link> : <Link href={`/onboarding`}>
                    Onboarding
                </Link>}
            </Button> : <Button>
                <Link href={"/sign-in"}>
                    Login
                </Link>
            </Button>}

        </div>

    </main>
}

export default Page



