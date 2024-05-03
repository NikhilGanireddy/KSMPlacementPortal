"use client"
import {useUser} from "@clerk/nextjs";

const Page = () => {

    const user = useUser()

    return <main className={`flex flex-col w-full border h-full overflow-y-scroll shadow-2xl overflow-x-hidden rounded-3xl p-4`}>
User Dashboard
    </main>
}

export default Page
