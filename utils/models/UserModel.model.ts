import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true},
    name: {type: String, required: true},
    role:{type: String, default: 'admin'},
    image: {type: String,},
    bio: [{type: mongoose.Schema.Types.ObjectId, ref: "Bio"}],
    onboarded: {type: Boolean, default: false}

})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User
