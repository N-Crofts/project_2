var express = require('express');
var router = express.Router();
const { Author } = require('../db/schema')

//index, show all
router.get('/', (req, res) => {
  Author.find()
    .then((authors) => {
      res.render('authors/index', { authors })
    })
})

//new, render new form
router.get('/new', (req, res) => {
  res.render('authors/new')
})

//create
router.post('/', (req, res) => {
  const newAuthor = req.body
  Author.create(newAuthor)
    .then(() => {
      res.redirect('/authors')
    })
})

//edit, render edit form
router.get('/:id/edit', (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      res.render('authors/edit', { author })
    })
})

//update
router.put('/:id', (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body)
    .then((author) => {
      res.redirect(`/authors/${author._id}`)
    })
})

//show, show one
router.get('/:id', (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      res.render('authors/show', { author })
    })
})

//delete
router.delete('/:id', (req, res) => {
  Author.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/authors')
    })
})


module.exports = router;







// var express = require('express')
// var router = express.Router({ mergeParams: true })
// const { User, Author } = require('../db/schema')


// //index, show all
// router.get('/', (req, res) => {
//     Author.find()
//       .then((authors) => {
//         res.render('authors/index', { authors })
//       })
//   })

// // new, render new form


// // show, show one
// router.get('/:id', (req, res) => {
//     User.findById(req.params.userId)
//     .then((user) => {
//         res.render('authors/show', {
//             userId: req.params.id,
//             author: user.authors.id(req.params.id)
//         })
//     })
// })

// // edit, render edit form


// // create
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

// // update


// module.exports = router