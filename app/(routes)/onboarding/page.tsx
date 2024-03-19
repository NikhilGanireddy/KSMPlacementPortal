"use client"

import {Button} from "@/components/ui/button";
import { updateUserRole} from "@/utils/actions/user.actions";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
// import {useGlobalUserContext} from "@/context/context";
import {toast} from "sonner";

const Page = () => {

    const user = useUser()
    const router = useRouter();

    if (user.isSignedIn) {

        const updateUser = async () => {
            await updateUserRole({userId: user.user?.id, role: 'user'})
            toast('Account marked as a User')
            router.push("/onboarding/user/personal_details");
        }
        const updateClient = async () => {
            await updateUserRole({userId: user.user?.id, role: 'client'})
            toast('Account marked as a Client')
             router.push("/onboarding/client/personal_details");
        }
        const updateAdmin = async () => {
            await updateUserRole({userId: user.user?.id, role: 'admin'})
            toast('Account marked as an Admin')
             router.push("/onboarding/admin/dashboard");
        }

        return <div className={` w-full  flex items-center justify-center flex-col gap-8 flex-1  shadow-2xl rounded-3xl`}>

            <h1 className={`text-4xl`}>Who are you?</h1>
            <div className={`flex items-center justify-center gap-8`}>
                <Button onClick={() => {
                    updateUser()
                }}>
                    User
                </Button>
                <Button onClick={() => {
                    updateClient()
                }}>
                    Client
                </Button>
                <Button onClick={() => {
                    updateAdmin()
                }}>
                    Admin
                </Button>
            </div>
        </div>
    }
}

export default Page;
