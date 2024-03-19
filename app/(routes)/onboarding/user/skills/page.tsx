"use client"

import {Button} from "@/components/ui/button"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import React, { useState} from "react";
import {ChevronsUpDown, CircleX} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {findUser, updateSkillsDetails} from "@/utils/actions/user.actions";
import {useGlobalUserContext} from "@/context/context";
import {toast} from "sonner";
import {softSkillsLists, technicalSkillsLists} from "@/utils/skills";



const Page = () => {
    const router = useRouter()
    const user = useUser()
    // @ts-ignore
    const {User, setUser} = useGlobalUserContext()

    const skillsList: Array<string> = []
    const softSkillsList: Array<string> = []

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [skills, setSkills] = useState(skillsList)

    const [openSoft, setOpenSoft] = useState(false)
    const [valueSoft, setValueSoft] = useState("")
    const [softSkills, setSoftSkills] = useState(softSkillsList)

    // @ts-ignore
    const setSkillHandler = (currentSkill) => {
        if (!skills.includes(currentSkill)) {
            setSkills((prevSkills) => [...prevSkills, currentSkill])
        }
    }

    const deleteSkill = (skill: string) => {
        const indexNum = skills.indexOf(skill)
        if (indexNum > -1) {
            skills.splice(indexNum, 1)
        }
    }
    // @ts-ignore
    const setSoftSkillHandler = (currentSkill) => {
        if (!softSkills.includes(currentSkill)) {
            setSoftSkills((prevSkills) => [...prevSkills, currentSkill])
        }
    }

    const deleteSoftSkill = (skill: string) => {
        const indexNum = softSkills.indexOf(skill)
        if (indexNum > -1) {
            softSkills.splice(indexNum, 1)
        }
    }

    const submitSkills = async () => {
        // @ts-ignore
        await updateSkillsDetails({userId: user.user?.id, softSkills: softSkills, techSkills: skills
        }).then(() => toast("Skills added successfully"))

        // @ts-ignore
        await findUser({userId: user.user?.id}).then((result) => {
            if (result !== null) {
                if (result.userName !== User.userName && result.id !== User.id) {
                    setUser({
                        softSkills: result.softSills, techSkills: result.techSkills,
                    })
                }
            }
        })
        router.push("/onboarding/user/projects")
    }

    return <main
        className={`flex flex-col gap-16 w-full md:w-3/4 p-4 lg:p-12 rounded-3xl shadow-lg justify-center items-center`}>
        <h1 className={`text-4xl font-semibold`}>Skills</h1>
        <div className="min-w-full flex flex-col gap-8">
            <h1 className={`text-2xl`}>Technical Skills</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        Select skill...
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command className="w-full">
                        <CommandInput className={`w-full`} placeholder="Search skill..."/>
                        <CommandList className={`w-full`}>
                            <CommandEmpty>No skill found.</CommandEmpty>
                            <CommandGroup className={`w-full`}>
                                {technicalSkillsLists.map((framework) => {
                                    return <CommandItem
                                        className={`w-full`}
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setSkillHandler(currentValue)
                                        }}
                                    >
                                        {framework.label}
                                    </CommandItem>
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <div className={`min-w-full flex items-center gap-4 flex-wrap`}>
                {skills.map((skill, index) => <Badge variant={"outline"} className={`relative px-4 py-2 capitalize`}
                                                     key={index}>
                <span className={`absolute -top-1 -right-1 cursor-pointer`}
                      onClick={() => deleteSkill(skill)}>
                    <CircleX className={`h-4 w-4`}/>
                </span>
                    {skill}
                </Badge>)}
            </div>
        </div>
        <div className="min-w-full flex flex-col gap-8">
            <h1 className={`text-2xl`}>Soft Skills</h1>
            <Popover open={openSoft} onOpenChange={setOpenSoft}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openSoft}
                        className="w-full justify-between"
                    >
                        Select skill...
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command className="w-full">
                        <CommandInput className={`w-full`} placeholder="Search skill..."/>
                        <CommandList className={`w-full`}>
                            <CommandEmpty>No skill found.</CommandEmpty>
                            <CommandGroup className={`w-full`}>
                                {softSkillsLists.map((framework) => {
                                    return <CommandItem
                                        className={`w-full`}
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValueSoft(currentValue === valueSoft ? "" : currentValue)
                                            setSoftSkillHandler(currentValue)
                                        }}
                                    >
                                        {framework.label}
                                    </CommandItem>
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <div className={`min-w-full flex items-center gap-4 flex-wrap`}>
                {softSkills.map((skill, index) => <Badge variant={"outline"} className={`relative px-4 py-2 capitalize`}
                                                         key={index}>
                <span className={`absolute -top-1 -right-1 cursor-pointer`}
                      onClick={() => deleteSoftSkill(skill)}>
                    <CircleX className={`h-4 w-4`}/>

                </span>
                    {skill}
                </Badge>)}

            </div>

        </div>
        <div className={`w-full flex justify-between items-center gap-6 `}>
            <Button variant={"outline"} className={`px-6 md:px-8 lg:px-12 py-2`}>
                <Link href={"/user/dashboard"}>Skip</Link>
            </Button>
            <Button className={`px-6 md:px-8 lg:px-12 py-2`} type="submit" onClick={submitSkills}>
                Next
            </Button>
        </div>

    </main>

}
export default Page;
