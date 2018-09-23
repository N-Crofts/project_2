const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NovelSchema = new Schema({
    witer: String,
    title: String,
    synopsis: String
})

const AuthorSchema = new Schema({
    name: String,
    about: String,
    novels: [NovelSchema],
})

const UserSchema = new Schema({
    username: String,
    age: Number,
    location: String,
    authors: String,
    network: String
})

const NovelModel = mongoose.model('Novel', NovelSchema)
const AuthorModel = mongoose.model('Author', AuthorSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    Novel: NovelModel,
    Author: AuthorModel,
    User: UserModel
}