require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Author, Novel } = Schema

///////////////////////////////////////////////////////////////


const firstNovel = new Novel({
    writer: "Raymond Chandler",
    title: "The Big Sleep",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

})

const secondNovel = new Novel({
    writer: "Dashiell Hammet",
    title: "Red Harvest",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

})



///////////////////////////////////////////////////////////////


const firstAuthor = new Author({
    name: "Raymond Chandler",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    novels: [firstNovel] 
})

const secondAuthor = new Author({
    name: "Dashiell Hammet",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    novels: [secondNovel] 
})



///////////////////////////////////////////////////////////////


const firstUser = new User({
    username: "Johnny Gumshoe",
    age: 27,
    location: "Atlanta, GA",
    authors: "Michael Collins, Raymond Chandler",
    network: "twitter"
})

const secondUser = new User({
    username: "Nic Cage",
    age: 54, 
    location: "Los Angelas",
    authors: "Sheridan LeFanu, Agatha Christie",
    network: "instagram"
})

///////////////////////////////////////////////////////////////


User.deleteMany()
    .then(() => {
        return User.insertMany([firstUser, secondUser])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

Author.deleteMany()
    .then(() => {
        return Author.insertMany([firstAuthor, secondAuthor])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

    
