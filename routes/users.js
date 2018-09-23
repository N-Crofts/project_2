var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

//index, show all
router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })
})

//new, render new form
router.get('/new', (req, res) => {
  res.render('users/new')
})

//create
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })
})

//edit, render edit form
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      // const authors = user.authors
      // res.render('users/edit', { user, authors })
      res.render('users/edit', { user })
    })
})

//update
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })
})

//show, show one
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      // const authors = user.authors
      // res.render('users/show', { user, authors })
      res.render('users/show', { user })
    })
})

//delete
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})


module.exports = router;