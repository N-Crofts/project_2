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


//new, render new form
router.get('/new', (req, res) => {
    const authorId = req.params.authorId
    res.render('novels/new', {
        authorId: authorId
    })
})
  
//create
  router.post('/', (req, res) => {
    const authorId = req.params.authorId
    const newNovel = req.body
    Author.findById(authorId)
        .then((author) => {
            author.novels.push(newNovel)
            return author.save()
        })
        .then(() => {
            res.redirect(`/authors/${authorId}/novels`)
        })
  })


//show, show one
router.get('/:novelId', (req, res) => {
    const authorId = req.params.authorId
    const novelId = req.params.novelId

    Author.findById(authorId)
        .then((author) => {
            const novel = author.novels.id(novelId)
            res.render('novels/show', {
                novel: novel,
                authorId: authorId,
                author: author

            })
        })
})



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