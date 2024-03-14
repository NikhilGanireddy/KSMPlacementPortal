import Link from "next/link";
import {Button} from "@/components/ui/button";

const Page = ()=>{
    return <main className={`flex flex-col gap-8 justify-center items-center`}>
        <h1 className={`text-4xl`}>User Projects</h1>
        <Button>
            <Link href={"/onboarding/user/experience"}>Experience</Link>
        </Button>
    </main>
}

export default Page;
