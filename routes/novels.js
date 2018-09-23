var express = require('express')
var router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

//index, show all
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const author = user.authors.id(req.params.authorId)
            const quotes = author.quotes
            res.render('gigs/index', {
                userId: req.params.userId,
                authorId: req.params.authorId,
                quotes
            })
        })
})

//new, render new form


//show, show one
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const author = user.authors.id(req.params.authorId)
            const quote = author.quotes.id(req.params.id)
            res.send(quote)
        })
})


//edit, render edit form


//create


//update


module.exports = router