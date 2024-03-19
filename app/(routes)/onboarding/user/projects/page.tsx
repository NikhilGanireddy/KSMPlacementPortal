"use client"

import {Button} from "@/components/ui/button"
import React from "react";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {ChevronsUpDown, CircleX} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import { updateProjectsDetails} from "@/utils/actions/user.actions";
import {toast} from "sonner";
// import {useGlobalUserContext} from "@/context/context";
import {technicalSkillsLists} from "@/utils/skills";


const Page = () => {
    const router = useRouter()
    const user = useUser()



    const skillsList1: Array<string> = []
    const skillsList2: Array<string> = []
    const skillsList3: Array<string> = []

    const [open1, setOpen1] = React.useState(false)
    const [value1, setValue1] = React.useState("")
    const [skills1, setSkills1] = React.useState(skillsList1)

    const [open2, setOpen2] = React.useState(false)
    const [value2, setValue2] = React.useState("")
    const [skills2, setSkills2] = React.useState(skillsList2)

    const [open3, setOpen3] = React.useState(false)
    const [value3, setValue3] = React.useState("")
    const [skills3, setSkills3] = React.useState(skillsList3)

    const [name1, setName1] = React.useState("")
    const [name2, setName2] = React.useState("")
    const [name3, setName3] = React.useState("")

    const [url1, setUrl1] = React.useState("")
    const [url2, setUrl2] = React.useState("")
    const [url3, setUrl3] = React.useState("")

    const [description1, setDescription1] = React.useState("")
    const [description2, setDescription2] = React.useState("")
    const [description3, setDescription3] = React.useState("")


    const [project1, setProject1] = React.useState<{
        name: string, skills: Array<string>, description: string, url: string
    }>({name: "", skills: [], description: "", url: ""})

    const [project2, setProject2] = React.useState<{
        name: string, skills: Array<string>, description: string, url: string
    }>({name: "", skills: [], description: "", url: ""})

    const [project3, setProject3] = React.useState<{
        name: string, skills: Array<string>, description: string, url: string
    }>({name: "", skills: [], description: "", url: ""})

    // @ts-ignore
    const setSkillHandler1 = (currentSkill) => {
        if (!skills1.includes(currentSkill)) {
            setSkills1((prevSkills) => [...prevSkills, currentSkill])
        }
    }

    const deleteSkill1 = (skill: string) => {
        const indexNum = skills1.indexOf(skill)
        if (indexNum > -1) {
            skills1.splice(indexNum, 1)
        }
    }

    // @ts-ignore
    const setSkillHandler2 = (currentSkill) => {
        if (!skills2.includes(currentSkill)) {
            setSkills2((prevSkills) => [...prevSkills, currentSkill])
        }
    }

    const deleteSkill2 = (skill: string) => {
        const indexNum = skills2.indexOf(skill)
        if (indexNum > -1) {
            skills2.splice(indexNum, 1)
        }
    }

    // @ts-ignore
    const setSkillHandler3 = (currentSkill) => {
        if (!skills3.includes(currentSkill)) {
            setSkills3((prevSkills) => [...prevSkills, currentSkill])
        }
    }

    const deleteSkill3 = (skill: string) => {
        const indexNum = skills3.indexOf(skill)
        if (indexNum > -1) {
            skills3.splice(indexNum, 1)
        }
    }

    const updateProject1 = () => {
        setProject1({name: name1, skills: skills1, description: description1, url: url1})
        toast('Major project saved successfully')
    }

    const updateProject2 = () => {
        setProject2({name: name2, skills: skills2, description: description2, url: url2})
        toast('Minor project saved successfully')

    }
    const updateProject3 = () => {
        setProject3({name: name3, skills: skills3, description: description3, url: url3})
        toast('Minor project saved successfully')

    }

    const submitProjects = async () => {
        // @ts-ignore
        await updateProjectsDetails({userId: user.user?.id, project1: project1, project2: project2, project3: project3
        }).then(() => toast("Projects added successfully"))
        router.push("/onboarding/user/experience")
    }

    return <main
        className={`flex flex-col gap-16 w-full md:w-3/4  p-4 lg:p-12 rounded-3xl shadow-lg justify-center items-center`}>
        <h1 className={`text-4xl font-semibold`}>Projects</h1>
        <div className="min-w-full flex flex-col gap-8">
            <div className={`min-w-full flex flex-col lg:flex-row gap-8`}>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Major Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name of your project"
                                               onChange={(ev) => setName1(ev.target.value)}
                                        />
                                        {/*{inputList[count].props}*/}
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="skills">Skills</Label>
                                        <Popover open={open1} onOpenChange={setOpen1}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open1}
                                                    className="w-full justify-between"
                                                >
                                                    {/*{value ? frameworks.find((framework) => framework.value === value)?.label : "Select skill..."}*/}
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
                                                                        setValue1(currentValue === value1 ? "" : currentValue)
                                                                        setSkillHandler1(currentValue)
                                                                        // setOpen1(false)

                                                                    }}
                                                                >
                                                                    {/*<Check*/}
                                                                    {/*    className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")}*/}
                                                                    {/*/>*/}
                                                                    {framework.label}
                                                                </CommandItem>
                                                            })}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                </div>
                                <div className={`min-w-full flex items-center gap-4 flex-wrap`}>

                                    {skills1.map((skill, index) => <Badge variant={"outline"}
                                                                          className={`relative px-4 py-2 capitalize`}
                                                                          key={index}>
                <span className={`absolute -top-1 -right-1 cursor-pointer`}
                      onClick={() => deleteSkill1(skill)}>
                    <CircleX className={`h-4 w-4`}/>

                </span>
                                        {skill}
                                    </Badge>)}

                                </div>
                                <div className="w-full flex flex-col space-y-2">
                                    <Label htmlFor="url">Exisiting url</Label>
                                    <Input id="url" placeholder="Exsisting url of your project"
                                           onChange={(ev) => setUrl1(ev.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription1(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateProject1()
                                }}>
                                    Add project
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className={`min-w-full flex flex-col lg:flex-row gap-8`}>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Mini Project </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name of your project"
                                               onChange={(ev) => setName2(ev.target.value)}
                                        />
                                        {/*{inputList[count].props}*/}
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="skills">Skills</Label>
                                        <Popover open={open2} onOpenChange={setOpen2}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open2}
                                                    className="w-full justify-between"
                                                >
                                                    {/*{value ? frameworks.find((framework) => framework.value === value)?.label : "Select skill..."}*/}
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
                                                                        setValue2(currentValue === value2 ? "" : currentValue)
                                                                        setSkillHandler2(currentValue)
                                                                        // setOpen2(false)

                                                                    }}
                                                                >
                                                                    {/*<Check*/}
                                                                    {/*    className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")}*/}
                                                                    {/*/>*/}
                                                                    {framework.label}
                                                                </CommandItem>
                                                            })}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                </div>
                                <div className={`min-w-full flex items-center gap-4 flex-wrap`}>

                                    {skills2.map((skill, index) => <Badge variant={"outline"}
                                                                          className={`relative px-4 py-2 capitalize`}
                                                                          key={index}>
                <span className={`absolute -top-1 -right-1 cursor-pointer`}
                      onClick={() => deleteSkill2(skill)}>
                    <CircleX className={`h-4 w-4`}/>

                </span>
                                        {skill}
                                    </Badge>)}

                                </div>
                                <div className="w-full flex flex-col space-y-2">
                                    <Label htmlFor="url">Exisiting url</Label>
                                    <Input id="url" placeholder="Exsisting url of your project"
                                           onChange={(ev) => setUrl2(ev.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription2(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateProject2()
                                }}>
                                    Add project
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Mini Project </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-6">
                                <div className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Name of your project"
                                               onChange={(ev) => setName3(ev.target.value)}
                                        />
                                        {/*{inputList[count].props}*/}
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="skills">Skills</Label>
                                        <Popover open={open3} onOpenChange={setOpen3}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open3}
                                                    className="w-full justify-between"
                                                >
                                                    {/*{value ? frameworks.find((framework) => framework.value === value)?.label : "Select skill..."}*/}
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
                                                                        setValue3(currentValue === value3 ? "" : currentValue)
                                                                        setSkillHandler3(currentValue)
                                                                        // setOpen3(false)

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
                                    </div>

                                </div>
                                <div className={`min-w-full flex items-center gap-4 flex-wrap`}>

                                    {skills3.map((skill, index) => <Badge variant={"outline"}
                                                                          className={`relative px-4 py-2 capitalize`}
                                                                          key={index}>
                <span className={`absolute -top-1 -right-1 cursor-pointer`}
                      onClick={() => deleteSkill3(skill)}>
                    <CircleX className={`h-4 w-4`}/>

                </span>
                                        {skill}
                                    </Badge>)}

                                </div>
                                <div className="w-full flex flex-col space-y-2">
                                    <Label htmlFor="url">Exisiting url</Label>
                                    <Input id="url" placeholder="Exsisting url of your project"
                                           onChange={(ev) => setUrl3(ev.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription3(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateProject3()
                                }}>
                                    Add project
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>


        </div>

        <div className={`w-full flex justify-between items-center gap-6 `}>
            <Button variant={"outline"} className={`px-6 md:px-8 lg:px-12 py-2`}>
                <Link href={"/user/dashboard"}>Skip</Link>
            </Button>
            <Button className={`px-6 md:px-8 lg:px-12 py-2`} type="submit" onClick={submitProjects}>
                Next
            </Button>
        </div>
    </main>

}
export default Page;
