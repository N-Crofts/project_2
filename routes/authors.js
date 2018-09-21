var express = require('express')
var router = express.Router({ mergeParams: true })
const { Author } = require('../db/schema')


//index, show all
router.get('/', (req, res) => {
    Author.find()
      .then((authors) => {
        res.render('authors/index', { authors })
      })
  })

//new, render new form


//show, show one
// router.get('/:id', (req, res) => {
//     User.findById(req.params.userId)
//     .then((user) => {
//         res.render('authors/show', {
//             userId: req.params.id,
//             author: user.authors.id(req.params.id)
//         })
//     })
// })

//edit, render edit form


//create
// router.post('/', (req,res) => {
//     const newAuthor = new Author(req.body)
//     User.findById(req.params.userId)
//         .then((user) => {
//             user.authors.push(newAuthor)
//             return user.save()
//         })
//         .then((user) => {
//             res.redirect(`/users/${req.params.userId}/authors`)
//         })
// })

//update


module.exports = router