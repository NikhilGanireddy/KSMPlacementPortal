"use server"
import User from "../models/UserModel.model"
import {connectToDatabase} from "@/utils/mongodb";

interface updateUserRoleParams {
    userId: string,
    role: string,
}

interface findUserRoleParams {
    userId: string
}

export async function updateUserRole({userId, role}: updateUserRoleParams): Promise<void> {

    await connectToDatabase();

    await User.findOneAndUpdate({id: userId}, {role: role}, {upsert: true,})
}


export async function findUserRole({userId}: findUserRoleParams) {
    await connectToDatabase();
    const user = await User.findOne({id: userId})
    // console.log(user?.role)
    return user?.role
}
