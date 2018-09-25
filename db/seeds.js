require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Author, Novel } = Schema

///////////////////////////////////////////////////////////////


const firstNovel = new Novel({
    writer: "Raymond Chandler",
    title: "The Big Sleep",
    synopsis: "A dying millionaire hires private eye Philip Marlowe to handle the blackmailer of one of his two troublesome daughters, and Marlowe finds himself involved with more than extortion. Kidnapping, pornography, seduction, and murder are just a few of the complications he gets caught up in."
})

const secondNovel = new Novel({
    writer: "Dashiell Hammet",
    title: "Red Harvest", 
    synopsis: "Detective-story master Dashiell Hammett gives us yet another unforgettable read in Red Harvest: When the last honest citizen of Poisonville was murdered, the Continental Op stayed on to punish the guilty--even if that meant taking on an entire town. Red Harvest is more than a superb crime novel: it is a classic exploration of corruption and violence in the American grain."
})

const thirdNovel = new Novel({
    writer: "Dashiell Hammet",
    title: "The Maltese Falcon", 
    synopsis: "The Maltese Falcon is a 1930 detective novel by Dashiell Hammett, originally serialized in the magazine Black Mask beginning with the September 1929 issue. The story has been adapted several times for the cinema. The main character, Sam Spade, appears in this novel and in three lesser-known short stories and is widely cited as the crystallizing figure in the development of the hard-boiled private detective genre. Raymond Chandler's character Philip Marlowe, for instance, was strongly influenced by Hammett's Spade. Spade was a departure from Hammett's nameless detective, The Continental Op. Spade combined several features of previous detectives, notably his cold detachment, keen eye for detail, unflinching, sometimes ruthless, determination to achieve his own form of justice, and a complete lack of sentimentality."
})

const fourthNovel = new Novel({
    writer: "Akimitsu Takagi",
    title: "The Tattoo Murder Case", 
    synopsis: "Kinue Nomura survived World War II only to be murdered in Tokyo, her severed limbs discovered in a room locked from the inside. Gone is the part of her that bore one of the most beautiful full-body tattoos ever rendered. Kenzo Matsushita, a young doctor who was first to discover the crime scene, feels compelled to assist his detective brother, who is in charge of the case. But Kenzo has a secret: he was Kinue’s lover, and soon his involvement in the investigation becomes as twisted and complex as the writhing snakes that once adorned Kinue’s torso.",
})



///////////////////////////////////////////////////////////////


const firstAuthor = new Author({
    name: "Raymond Chandler",
    about: "Raymond Thornton Chandler (July 23, 1888 – March 26, 1959) was an American-British novelist and screenwriter. In 1932, at the age of forty-four, Chandler became a detective fiction writer after losing his job as an oil company executive during the Great Depression. His first short story, BLACKMAILERS DONT SHOOT, was published in 1933 in Black Mask, a popular pulp magazine. His first novel, The Big Sleep, was published in 1939. In addition to his short stories, Chandler published seven novels during his lifetime (an eighth, in progress at the time of his death, was completed by Robert B. Parker). All but Playback have been made into motion pictures, some more than once. In the year before his death, he was elected president of the Mystery Writers of America",
    novels: [firstNovel] 
})

const secondAuthor = new Author({
    name: "Dashiell Hammet",
    about: "Samuel Dashiell Hammett (May 27, 1894 – January 10, 1961) was an American author of hard-boiled detective novels and short stories. He was also a screenwriter and political activist. Among the enduring characters he created are Sam Spade (The Maltese Falcon), Nick and Nora Charles (The Thin Man), and the Continental Op (Red Harvest and The Dain Curse).",
    novels: [secondNovel, thirdNovel] 
})

const thirdAuthor = new Author({
    name: "Akimitsu Takagi",
    about: "Akimitsu Takagi (高木 彬光 Takagi Akimitsu, 25 September 1920–9 September 1995), was the pen-name of a popular Japanese crime fiction writer active during the Shōwa period of Japan. His real name was Takagi Seiichi.",
    novels: [fourthNovel] 
})



///////////////////////////////////////////////////////////////


const firstUser = new User({
    username: "Johnny Gumshoe",
    age: 27,
    location: "Atlanta, GA",
    authors: "Michael Collins, Raymond Chandler",
    network: "twitter.com/Gumshoe"
})

const secondUser = new User({
    username: "Sofie Panch",
    age: 35, 
    location: "Atlanta, GA",
    authors: "Sheridan LeFanu, Agatha Christie",
    network: "twitter.com/SofiePanch"
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
        return Author.insertMany([firstAuthor, secondAuthor, thirdAuthor])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

    
