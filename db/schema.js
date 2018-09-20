const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
    quote: String,
    name: String
})

const AuthorSchema = new Schema({
    name: String,
    about: String,
    novels: String,
    quotes: []
})

const UserSchema = new Schema({
    username: String,
    author: String
})

const QuoteModel = mongoose.model('Quote', QuoteSchema)
const AuthorModel = mongoose.model('Author', AuthorSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    Quote: QuoteModel,
    Author: AuthorModel,
    User: UserModel
}