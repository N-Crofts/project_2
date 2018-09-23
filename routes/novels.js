var express = require('express')
var router = express.Router({ mergeParams: true })
const { Author, Novel } = require('../db/schema')

// const Schema = require("../db/schema.js")
// const AuthorModel = Schema.NovelModel


//index, show all
router.get('/', (req, res) => {
    const authorId = req.params.authorId
    Author.findById(authorId)
        .then((author) => {
            res.render('novels/index', {
                author: author
            })
        })
})


// router.get('/', (req, res) => {
//     Author.findById(req.params.authorId)
//         .then((author) => {
//             res.render('novels/index', {
//                 authorId: req.params.authorId,
//                 novels: author.novels
//             })
//         })
// })

//new, render new form


//show, show one




// router.get('/:id', (req, res) => {
//     Author.findById(req.params.authorId)
//         .then((author) => {
//             res.render('novel/show', {
//                 authorId: req.params.authorId,
//                 novel: author.novels.id(req.params.id)
//             })
//         })
// })


//edit, render edit form


//create


//update


module.exports = router