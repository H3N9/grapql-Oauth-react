import mongoose from 'mongoose'
import {composeWithMongoose} from 'graphql-compose-mongoose'
import bcrypt from 'mongoose-bcrypt'
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {type:String, require: true},
    username: {type: String, require: true},
    password: {type:String, require: true, bcrypt: true}
})

UserSchema.plugin(bcrypt)


export const UserModel = mongoose.model("User", UserSchema)
export const UserTC = composeWithMongoose(UserModel).removeField("password")

export default UserModel