"use server"

import User from "../models/UserModel.model"
import {connectToDatabase} from "@/utils/mongodb";

interface createUserParams {
    userId: string,
}

interface updateUserRoleParams {
    userId: string,
    role: string,
}

interface findUserRoleParams {
    userId: string
}

interface updatePersonalDetailsParams {
    userId: string,
    userName: string,
    phone: string,
    firstName: string,
    lastName: string,
    hallTicketNo: string,
    year: string,
    branch: string,
}

interface updateExperienceParams {
    userId: string,
    experience1: Object,
    experience2: Object,
    experience3: Object,

}

interface updateSkillsParams {
    userId: string,
    softSkills: Array<string>,
    techSkills: Array<string>,
}

interface updateProjectsParams {
    userId: string,
    project1: Object,
    project2: Object,
    project3: Object,

}


export async function createUser({userId}: createUserParams) {
    await connectToDatabase();
    const isThere = await User.findOne({id: userId})
    if (!isThere) {
        await User.create({id: userId})
    }
}

export async function updateUserRole({userId, role}: updateUserRoleParams): Promise<void> {
    await connectToDatabase();
    await User.findOneAndUpdate({id: userId}, {role: role}, {upsert: true,})
}

export async function findUser({userId}: findUserRoleParams) {
    await connectToDatabase();
    const user = await User.findOne({id: userId})
    // console.log(JSON.stringify(user))
    return JSON.parse(JSON.stringify(user))
}

export async function updatePersonalDetails({
                                                userId,
                                                userName,
                                                firstName,
                                                lastName,
                                                branch,
                                                hallTicketNo,
                                                year,
                                                phone,
                                            }: updatePersonalDetailsParams): Promise<void> {
    await connectToDatabase();
    await User.findOneAndUpdate({id: userId}, {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        branch: branch,
        hallTicketNo: hallTicketNo,
        year: year,
        phone: phone,
    }, {upsert: true,})
}

export async function updateSkillsDetails({
                                              userId, softSkills, techSkills
                                          }: updateSkillsParams): Promise<void> {
    await connectToDatabase();
    await User.findOneAndUpdate({id: userId}, {
        softSkills: softSkills, techSkills: techSkills,
    }, {upsert: true,})
}

export async function updateProjectsDetails({
                                                userId, project1, project2, project3
                                            }: updateProjectsParams): Promise<void> {
    await connectToDatabase();
    await User.findOneAndUpdate({id: userId}, {
        project1: project1, project2: project2, project3: project3,
    }, {upsert: true,})
}

export async function updateExperienceDetails({
                                                  userId, experience1, experience2, experience3
                                              }: updateExperienceParams): Promise<void> {
    await connectToDatabase();
    await User.findOneAndUpdate({id: userId}, {
        experience1: experience1, experience2: experience2, experience3: experience3, onBoarded: true
    }, {upsert: true,})
}
