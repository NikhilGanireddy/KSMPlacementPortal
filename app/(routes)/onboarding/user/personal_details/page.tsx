import {Button} from "@/components/ui/button";
import Link from "next/link";

const Page = ()=>{
    return <main className={`flex flex-col gap-8 justify-center items-center`}>
        <h1 className={`text-4xl`}>User Personal Details</h1>
        <Button>
            <Link href={"/onboarding/user/skills"}>Skills</Link>
        </Button>
    </main>
}

export default Page;
