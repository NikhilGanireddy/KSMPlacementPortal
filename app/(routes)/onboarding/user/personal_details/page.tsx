"use client"

import * as z from 'zod';
import Link from "next/link";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {userPersonalDetailsValidation} from "@/lib/validations/user/personal_detailsForm";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {findUser, updatePersonalDetails} from "@/utils/actions/user.actions";
import {useUser} from "@clerk/nextjs";
import {useGlobalUserContext} from "@/context/context";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

// interface PersonalDetailsProps {
//     userId: string,
//     userName: string,
//     phone: number,
//     firstName: string,
//     lastName: string,
//     hallTicketNo: string,
//     year: string,
//     branch: string,
// }

const Page = () => {
    const router = useRouter()
    const user = useUser()
    // @ts-ignore
    const {User, setUser} = useGlobalUserContext()

    const form = useForm({
        resolver: zodResolver(userPersonalDetailsValidation), defaultValues: {
            userName: "" || User?.userName,
            phone: "" || User?.phone,
            firstName: "" || User?.firstName,
            lastName: "" || User?.lastName,
            hallTicketNo: "" || User?.hallTicketNo,
            year: "" || User?.year,
            branch: "" || User?.branch,
        }
    })


    function onSubmit(values: z.infer<typeof userPersonalDetailsValidation>) {

        // @ts-ignore
        updatePersonalDetails({userId: user.user?.id,
            phone: values.phone,
            userName: values.userName,
            year: values.year,
            lastName: values.lastName,
            firstName: values.firstName,
            branch: values.branch,
            hallTicketNo: values.hallTicketNo
        }).then(() => {
            // console.log(result)
            // @ts-ignore
            findUser({userId: user.user?.id}).then((res) => {
                if (res !== null) {
                    if (res.userName !== User.userName && res.role !== User.role) {
                        setUser({
                            name: res.name,
                            role: res.role,
                            hallTicketNo: res.hallTicketNo,
                            year: res.year,
                            branch: res.branch,
                            phone: res.phone,
                            firstName: res.firstName,
                            lastName: res.lastName,
                        })
                        toast(`${res.firstName}'s details have been saved.`)
                    }
                }
                console.log(User.name, User.hallTicketNo)
            })
        })
        router.push("/onboarding/user/skills")
    }


    return <main
        className={`flex flex-col gap-16 w-full md:w-3/4 p-12 rounded-3xl shadow-lg justify-center items-center`}>
        <h1 className={`text-4xl font-semibold`}>Personal Details</h1>
        <div className="min-w-full">
            <Form {...form}>
                <form className={` min-w-full flex flex-col w-full gap-6 `} onSubmit={form.handleSubmit(onSubmit)}>
                    <div className={` flex flex-col lg:flex-row justify-between items-center min-w-full gap-6 `}>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>First Name</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                    </div>
                    <div className={` flex flex-col lg:flex-row justify-between items-center min-w-full gap-6 `}>
                        <FormField
                            control={form.control}
                            name="userName"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>User Name</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="nikhilgdp" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>Phone</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="8333020599" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                    </div>
                    <div className={` flex flex-col lg:flex-row justify-between items-center min-w-full gap-6 `}>
                        <FormField
                            control={form.control}
                            name="hallTicketNo"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>Hall Ticket No</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="20017T0901" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                        <FormField
                            control={form.control}
                            name="branch"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>Branch</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="CSE" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                        <FormField
                            control={form.control}
                            name="year"
                            render={({field}) => (<FormItem className={`w-full`}>
                                <FormLabel>Year</FormLabel>
                                <FormControl className={`w-full`}>
                                    <Input className={`w-full`} placeholder="4" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>)}
                        />
                    </div>
                    <div className={`flex justify-between items-center gap-6 `}>
                        <Button variant={"outline"} className={`px-6 md:px-8 lg:px-12 py-2`}>
                            <Link href={"/user/dashboard"}>Skip</Link>
                        </Button>
                        <Button className={`px-6 md:px-8 lg:px-12 py-2`} type="submit">
                            {/*<Link href={"/onboarding/user/skills"}>*/}
                            Next
                            {/*</Link>*/}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>

    </main>
}

export default Page;
