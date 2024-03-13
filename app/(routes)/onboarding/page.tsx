import {Button} from "@/components/ui/button";

const page = () => {

    return <div className={` w-full h-full flex items-center justify-center flex-col gap-8`}>

        <h1 className={`text-4xl`}>Who are you?</h1>
        <div className={`flex items-center justify-center gap-8`}>
            <Button>
                User
            </Button>
            <Button>
                Client
            </Button>
            <Button>
                Admin
            </Button>
        </div>
        {/*<h1>Add skills, projects & experience to improve your profile.</h1>*/}

        {/*<div className={`flex items-center justify-center gap-8`}>*/}
        {/*    <Button>*/}
        {/*        <Link href={"/dashboard"}>Skip</Link>*/}
        {/*    </Button>*/}
        {/*    <Button>*/}
        {/*        <Link href={"/onboarding/experience"}>Experience</Link>*/}
        {/*    </Button>*/}
        {/*</div>*/}
    </div>
}
export default page;
