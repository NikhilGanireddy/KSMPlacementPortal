import * as z from "zod"


export const userPersonalDetailsValidation = z.object({
    userName: z.string().min(3).max(30),
    phone: z.string().min(10).max(10),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    hallTicketNo:  z.string().min(10).max(10),
    year:z.string().min(1).max(1),
    branch:z.string().min(3).max(3),
})

export const userSkillsDetailsValidation = z.object({
    userName: z.string().min(3).max(30),
    phone: z.string().min(10).max(10),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    hallTicketNo:  z.string().min(10).max(10),
    year:z.string().min(1).max(1),
    branch:z.string().min(3).max(3),
})
