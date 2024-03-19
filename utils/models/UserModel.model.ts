import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: {type: String, },
    userName: {type: String, },
    firstName: {type: String,},
    lastName: {type: String, },
    phone: {type: String, },
    hallTicketNo: {type: String, },
    year: {type: String, },
    branch: {type: String, },
    role:{type: String, },
    onboarded: {type: Boolean, default: false},
    softSkills:{type:Array},
    techSkills:{type:Array},
    project1:{type:Object},
    project2:{type:Object},
    project3:{type:Object},
    experience1:{type:Object},
    experience2:{type:Object},
    experience3:{type:Object},

})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User
