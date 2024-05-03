"use client"

import {Button} from "@/components/ui/button"
import React from "react";
import {useUser} from "@clerk/nextjs";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"
import {format} from "date-fns"

import {z} from "zod"
import {useForm} from "react-hook-form"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {CalendarIcon, ChevronsUpDown, CircleX} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {toast} from "sonner";
import {technicalSkillsLists} from "@/utils/skills";
import {zodResolver} from "@hookform/resolvers/zod";
import {cn} from "@/lib/utils";
import {Calendar} from "@/components/ui/calendar";
import {updateExperienceDetails} from "@/utils/actions/user.actions";
import { useRouter} from "next/navigation";


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

    const [role1, setRole1] = React.useState("")
    const [role2, setRole2] = React.useState("")
    const [role3, setRole3] = React.useState("")

    const [company1, setCompany1] = React.useState("")
    const [company2, setCompany2] = React.useState("")
    const [company3, setCompany3] = React.useState("")

    const [from1, setFrom1] = React.useState<Date>()
    const [from2, setFrom2] = React.useState<Date>()
    const [from3, setFrom3] = React.useState<Date>()

    const [to1, setTo1] = React.useState<Date>()
    const [to2, setTo2] = React.useState<Date>()
    const [to3, setTo3] = React.useState<Date>()

    const [description1, setDescription1] = React.useState("")
    const [description2, setDescription2] = React.useState("")
    const [description3, setDescription3] = React.useState("")


    const [experience1, setExperience1] = React.useState<{
        role: string, company: string, skills: Array<string>, description: string, from: string, to: string
    }>({role: "", company: "", skills: [], description: "", from: "", to: ""})

    const [experience2, setExperience2] = React.useState<{
        role: string, company: string, skills: Array<string>, description: string, from: string, to: string
    }>({role: "", company: "", skills: [], description: "", from: "", to: ""})
    const [experience3, setExperience3] = React.useState<{
        role: string, company: string, skills: Array<string>, description: string, from: string, to: string
    }>({role: "", company: "", skills: [], description: "", from: "", to: ""})


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

    const updateExperience1 = () => {
        // @ts-ignore
        setExperience1({role: role1, skills: skills1, description: description1, company: company1, from: from1, to: to1
        })
        toast('Expirence 1 saved successfully')

    }

    const updateExperience2 = () => {
        // @ts-ignore
        setExperience2({role: role2, skills: skills2, description: description2, company: company2, from: from2, to: to2
        })
        toast('Expirence 2 saved successfully')

    }
    const updateExperience3 = () => {
        // @ts-ignore
        setExperience3({role: role3, skills: skills3, description: description3, company: company3, from: from3, to: to3
        })
        toast('Expirence 3 saved successfully')

    }
    console.log(experience1, experience2, experience3)

    const FormSchema = z.object({
        from: z.date({
            required_error: "A date of birth is required.",
        }), to: z.date({
            required_error: "A date of birth is required.",
        }),
    })

    const form1 = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit1(data: z.infer<typeof FormSchema>) {
        setFrom1(data.from)
        setTo1(data.to)
    }

    const form2 = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit2(data: z.infer<typeof FormSchema>) {
        setFrom2(data.from)
        setTo2(data.to)
    }

    const form3 = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit3(data: z.infer<typeof FormSchema>) {
        setFrom3(data.from)
        setTo3(data.to)
    }


    const submitExperience = async () => {
        // @ts-ignore
        await updateExperienceDetails({userId: user.user?.id, experience1: experience1, experience2: experience2, experience3: experience3,
        }).then(() => toast("Experience added successfully"))
        router.push("/user/dashboard")
    }

    return <main
        className={`flex flex-col gap-16 w-full md:w-3/468403+0
         5555
         .p-4 lg:p-12 rounded-3xl shadow-lg justify-center items-center`}>

        <h1 className={`text-4xl font-semibold`}>Experience</h1>
        <div className="min-w-full flex flex-col gap-8">
            <div className={`min-w-full flex flex-col lg:flex-row gap-8`}>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Experience 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form1.handleSubmit(onSubmit1)}>
                            <div className="grid w-full items-center gap-6">
                                <div
                                    className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Input id="role" placeholder="Your role in the Job/Internship"
                                               onChange={(ev) => setRole1(ev.target.value)}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" placeholder="Name of the company"
                                               onChange={(ev) => setCompany1(ev.target.value)}
                                        />
                                    </div>

                                </div>
                                <div
                                    className={`min-w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>

                                    <div
                                        className={`w-full flex flex-col lg:flex-row justify-center lg:items-end items-start gap-6`}>
                                        <Form {...form1}>
                                            <form onSubmit={form1.handleSubmit(onSubmit1)} className="w-full space-y-8">
                                                <FormField
                                                    control={form1.control}
                                                    name="from"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>From</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />
                                            </form>

                                        </Form>
                                        <Form {...form1}>
                                            <form
                                                className="w-full space-y-8 ">
                                                <FormField
                                                    control={form1.control}
                                                    name="to"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>To</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />

                                            </form>
                                        </Form>
                                        <Button type={"submit"}>
                                            Save Dates
                                        </Button>
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
                                                    <CommandInput className={`w-full`}
                                                                  placeholder="Search skill..."/>
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

                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription1(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateExperience1()
                                    // ()
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
                        <CardTitle>Experience 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form2.handleSubmit(onSubmit2)}>
                            <div className="grid w-full items-center gap-6">
                                <div
                                    className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Input id="role" placeholder="Your role in the Job/Internship"
                                               onChange={(ev) => setRole2(ev.target.value)}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" placeholder="Name of the company"
                                               onChange={(ev) => setCompany2(ev.target.value)}
                                        />
                                    </div>

                                </div>
                                <div
                                    className={`min-w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>

                                    <div
                                        className={`w-full flex flex-col lg:flex-row justify-center lg:items-end items-start gap-6`}>
                                        <Form {...form2}>
                                            <form onSubmit={form2.handleSubmit(onSubmit2)} className="w-full space-y-8">
                                                <FormField
                                                    control={form2.control}
                                                    name="from"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>From</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />
                                            </form>

                                        </Form>
                                        <Form {...form2}>
                                            <form onSubmit={form2.handleSubmit(onSubmit2)}
                                                  className="w-full space-y-8 ">
                                                <FormField
                                                    control={form2.control}
                                                    name="to"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>To</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />

                                            </form>
                                        </Form>
                                        <Button type={"submit"}>
                                            Save Dates
                                        </Button>
                                    </div>

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
                                                <CommandInput className={`w-full`}
                                                              placeholder="Search skill..."/>
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
                                                                    // setOpen1(false)

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

                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription2(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateExperience2()
                                    // ()
                                }}>
                                    Add project
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Experience 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form3.handleSubmit(onSubmit3)}>
                            <div className="grid w-full items-center gap-6">
                                <div
                                    className={`w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Input id="role" placeholder="Your role in the Job/Internship"
                                               onChange={(ev) => setRole3(ev.target.value)}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" placeholder="Name of the company"
                                               onChange={(ev) => setCompany3(ev.target.value)}
                                        />
                                    </div>

                                </div>
                                <div
                                    className={`min-w-full flex flex-col md:flex-row gap-6 justify-between items-center`}>

                                    <div
                                        className={`w-full flex flex-col lg:flex-row justify-center lg:items-end items-start gap-6`}>
                                        <Form {...form3}>
                                            <form onSubmit={form3.handleSubmit(onSubmit3)} className="w-full space-y-8">
                                                <FormField
                                                    control={form3.control}
                                                    name="from"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>From</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />
                                            </form>

                                        </Form>
                                        <Form {...form3}>
                                            <form onSubmit={form3.handleSubmit(onSubmit3)}
                                                  className="w-full space-y-8 ">
                                                <FormField
                                                    control={form3.control}
                                                    name="to"
                                                    render={({field}) => (<FormItem className="flex flex-col">
                                                        <FormLabel>To</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                                    >
                                                                        {field.value ? (format(field.value, "PPP")) : (
                                                                            <span>Pick a date</span>)}
                                                                        <CalendarIcon
                                                                            className="ml-auto h-4 w-4 opacity-50"/>
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage/>
                                                    </FormItem>)}
                                                />

                                            </form>
                                        </Form>
                                        <Button type={"submit"}>
                                            Save Dates
                                        </Button>
                                    </div>

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
                                                <CommandInput className={`w-full`}
                                                              placeholder="Search skill..."/>
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
                                                                    // setOpen1(false)

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

                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" className={`max-h-[150px]`}
                                              placeholder="About your project"
                                              onChange={(ev) => setDescription3(ev.target.value)}
                                    />
                                </div>
                                <Button className={`w-fit px-6 md:px-8 lg:px-12 py-2`} onClick={(ev) => {
                                    ev.preventDefault()
                                    updateExperience3()
                                    // ()
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
            <Button className={`px-6 md:px-8 lg:px-12 py-2`} onClick={submitExperience}>
                Next
            </Button>
        </div>
    </main>

}

export default Page
