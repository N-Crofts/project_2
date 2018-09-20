require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Author, Quote } = Schema

let firstQuote = new Quote({
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Raymond Chandler"
})

let firstAuthor = new Author({
    name: "Raymond Chandler",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    novels: "Lorem Ipsum, Dolor Sit Amet, Consectur, and Adipiscing Elit",
    quotes: [firstQuote.quote] 
})

let firstUser = new User({
    username: "Nicholas Crofts",
    author: "Raymond Chandler"
})



User.deleteMany()
    .then(() => {
        return User.insertMany([firstUser])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })