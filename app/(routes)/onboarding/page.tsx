"use client"

import {Button} from "@/components/ui/button";
import {updateUserRole} from "@/utils/actions/user.actions";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const Page = () => {

    const user = useUser()
    // console.log(user.user?.id)
    const router = useRouter();
    if (user.isSignedIn) {

        const updateUser = async () => {
            await updateUserRole({userId: user.user?.id, role: 'user'})
            await router.push("/onboarding/user/personal_details");
        }
        const updateClient = async () => {
            await updateUserRole({userId: user.user?.id, role: 'client'})
            await router.push("/onboarding/client/personal_details");
        }
        const updateAdmin = async () => {
            await updateUserRole({userId: user.user?.id, role: 'admin'})
            await router.push("/onboarding/admin/dashboard");
        }

        return <div className={` w-full h-full flex items-center justify-center flex-col gap-8`}>

            <h1 className={`text-4xl`}>Who are you?</h1>
            <div className={`flex items-center justify-center gap-8`}>
                <Button onClick={(ev) => {
                    updateUser()
                }}>
                    User
                </Button>
                <Button onClick={(ev) => {
                    updateClient().then(() => console.log("Client updated"))
                }}>
                    Client
                </Button>
                <Button onClick={(ev) => {
                    updateAdmin().then(() => console.log("Admin added"))
                }}>
                    Admin
                </Button>
            </div>

        </div>
    }

}


export default Page;


{/*<h1>Add skills, projects & experience to improve your profile.</h1>*/
}

{/*<div className={`flex items-center justify-center gap-8`}>*/
}
{/*    <Button>*/
}
{/*        <Link href={"/dashboard"}>Skip</Link>*/
}
{/*    </Button>*/
}
{/*    <Button>*/
}
{/*        <Link href={"/onboarding/experience"}>Experience</Link>*/
}
{/*    </Button>*/
}
{/*</div>*/
}
