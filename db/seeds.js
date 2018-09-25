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
    writer: "Dashiell Hammett",
    title: "Red Harvest", 
    synopsis: "Detective-story master Dashiell Hammett gives us yet another unforgettable read in Red Harvest: When the last honest citizen of Poisonville was murdered, the Continental Op stayed on to punish the guilty--even if that meant taking on an entire town. Red Harvest is more than a superb crime novel: it is a classic exploration of corruption and violence in the American grain."
})

const thirdNovel = new Novel({
    writer: "Dashiell Hammett",
    title: "The Maltese Falcon", 
    synopsis: "The Maltese Falcon is a 1930 detective novel by Dashiell Hammett, originally serialized in the magazine Black Mask beginning with the September 1929 issue. The story has been adapted several times for the cinema. The main character, Sam Spade, appears in this novel and in three lesser-known short stories and is widely cited as the crystallizing figure in the development of the hard-boiled private detective genre. Raymond Chandler's character Philip Marlowe, for instance, was strongly influenced by Hammett's Spade. Spade was a departure from Hammett's nameless detective, The Continental Op. Spade combined several features of previous detectives, notably his cold detachment, keen eye for detail, unflinching, sometimes ruthless, determination to achieve his own form of justice, and a complete lack of sentimentality."
})

const fourthNovel = new Novel({
    writer: "Akimitsu Takagi",
    title: "The Tattoo Murder Case", 
    synopsis: "Kinue Nomura survived World War II only to be murdered in Tokyo, her severed limbs discovered in a room locked from the inside. Gone is the part of her that bore one of the most beautiful full-body tattoos ever rendered. Kenzo Matsushita, a young doctor who was first to discover the crime scene, feels compelled to assist his detective brother, who is in charge of the case. But Kenzo has a secret: he was Kinue’s lover, and soon his involvement in the investigation becomes as twisted and complex as the writhing snakes that once adorned Kinue’s torso.",
})

const fifthNovel = new Novel({
    writer: "James M. Cain",
    title: "The Postman Always Rings Twice", 
    synopsis: "An amoral young tramp.  A beautiful, sullen woman with an inconvenient husband.  A problem that has only one grisly solution--a solution that only creates other problems that no one can ever solve. First published in 1934 and banned in Boston for its explosive mixture of violence and eroticism, The Postman Always Rings Twice is a classic of the roman noir. It established James M. Cain as a major novelist with an unsparing vision of America's bleak underside, and was acknowledged by Albert Camus as the model for The Stranger."
})

const sixthNovel = new Novel({
    writer: "Walter Mosley",
    title: "Devil in a Blue Dress", 
    synopsis: "Set in the late 1940s, in the African-American community of Watts, Los Angeles, Devil in a Blue Dress follows Easy Rawlins, a black war veteran just fired from his job at a defense plant. Easy is drinking in a friend's bar, wondering how he'll meet his mortgage, when a white man in a linen suit walks in, offering good money if Easy will simply locate Miss Daphne Monet, a blonde beauty known to frequent black jazz clubs."
})

const seventhNovel = new Novel({
    writer: "Dashiell Hammett",
    title: "The Dain Curse", 
    synopsis: "Dashiell Hammett virtually invented the hardboiled crime novel, and his creation the Continental Op is a short, squat, and utterly unsentimental tank of a private detective. Miss Gabrielle Dain Leggett is young, wealthy, and a devotee of morphine and religious cults. She has an unfortunate effect on the people around her: they have a habit of dying violently. Is Gabrielle the victim of a family curse? Or is the truth about her weirder and infinitely more dangerous? The Dain Curse is one of the Continental Op's most bizarre cases, and a tautly crafted masterpiece of suspense."
})

const eighthNovel = new Novel({
    writer: "James Ellroy",
    title: "The Black Dahlia", 
    synopsis: "The Black Dahlia is a roman noir on an epic scale: a classic period piece that provides a startling conclusion to America's most infamous unsolved murder mystery--the murder of the beautiful young woman known as The Black Dahlia."
})



///////////////////////////////////////////////////////////////


const firstAuthor = new Author({
    name: "Raymond Chandler",
    about: "Raymond Thornton Chandler (July 23, 1888 – March 26, 1959) was an American-British novelist and screenwriter. In 1932, at the age of forty-four, Chandler became a detective fiction writer after losing his job as an oil company executive during the Great Depression. His first short story, BLACKMAILERS DONT SHOOT, was published in 1933 in Black Mask, a popular pulp magazine. His first novel, The Big Sleep, was published in 1939. In addition to his short stories, Chandler published seven novels during his lifetime (an eighth, in progress at the time of his death, was completed by Robert B. Parker). All but Playback have been made into motion pictures, some more than once. In the year before his death, he was elected president of the Mystery Writers of America",
    novels: [firstNovel] 
})

const secondAuthor = new Author({
    name: "Dashiell Hammett",
    about: "Samuel Dashiell Hammett (May 27, 1894 – January 10, 1961) was an American author of hard-boiled detective novels and short stories. He was also a screenwriter and political activist. Among the enduring characters he created are Sam Spade (The Maltese Falcon), Nick and Nora Charles (The Thin Man), and the Continental Op (Red Harvest and The Dain Curse).",
    novels: [secondNovel, thirdNovel, seventhNovel] 
})

const thirdAuthor = new Author({
    name: "Akimitsu Takagi",
    about: "Akimitsu Takagi (高木 彬光 Takagi Akimitsu, 25 September 1920–9 September 1995), was the pen-name of a popular Japanese crime fiction writer active during the Shōwa period of Japan. His real name was Takagi Seiichi.",
    novels: [fourthNovel] 
})

const fourthAuthor = new Author({
    name: "James M. Cain",
    about: "James Mallahan Cain (July 1, 1892 – October 27, 1977) was an American author and journalist. Cain vehemently opposed labeling, but he is usually associated with the hardboiled school of American crime fiction and is seen as one of the creators of the roman noir. Several of his crime novels inspired successful movies.",
    novels: [fifthNovel] 
})

const fifthAuthor = new Author({
    name: "Walter Mosley",
    about: "Walter Ellis Mosley (born January 12, 1952) is an American novelist, most widely recognized for his crime fiction. He has written a series of best-selling historical mysteries featuring the hard-boiled detective Easy Rawlins, a black private investigator and World War II veteran living in the Watts neighborhood of Los Angeles, California; they are perhaps his most popular works.",
    novels: [sixthNovel] 
})

const sixthAuthor = new Author({
    name: "James Ellroy",
    about: "Lee Earle 'James' Ellroy (born March 4, 1948) is an American crime fiction writer and essayist. In 1981, Ellroy published his first novel, Brown's Requiem, a detective story drawing on his experiences as a caddie.[16] He then published Clandestine and Silent Terror (which was later published under the title Killer on the Road). Ellroy followed these three novels with the Lloyd Hopkins Trilogy. The novels are centered on Hopkins, a brilliant but disturbed LAPD robbery-homicide detective, and are set mainly in the 1980s.",
    novels: [eighthNovel] 
})


///////////////////////////////////////////////////////////////


const firstUser = new User({
    username: "Ellen Drew",
    age: 27,
    location: "Chicago",
    authors: "Michael Collins, Raymond Chandler",
    network: "twitter.com/Gumshoe"
})

const secondUser = new User({
    username: "John Harmon",
    age: 35, 
    location: "Atlanta, GA",
    authors: "Sheridan LeFanu, Agatha Christie",
    network: "twitter.com/J_Harmon"
})

const thirdUser = new User({
    username: "Don Evans",
    age: 42, 
    location: "New York, NY",
    authors: "James Ellroy",
    network: "linkedin.com/in/don-evans"
})

const fourthUser = new User({
    username: "Debbie Alton ",
    age: 24, 
    location: "Los Angeles, CA",
    authors: "James Ellroy, Dashiell Hammett",
    network: "instagram.com/fuzzyCats"
})

///////////////////////////////////////////////////////////////


User.deleteMany()
    .then(() => {
        return User.insertMany([firstUser, secondUser, thirdUser, fourthUser])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

Author.deleteMany()
    .then(() => {
        return Author.insertMany([firstAuthor, secondAuthor, thirdAuthor, fourthAuthor, fifthAuthor, sixthAuthor])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

    
