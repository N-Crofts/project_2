var express = require('express');
var router = express.Router();
const { User } = require('../db/schema')

/////////////////// I N D E X ,   S H O W   A L L  /////////////////////

router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })
})

/////////////  N E W ,   R E N D E R   N E W   F O R M  ////////////////

router.get('/new', (req, res) => {
  res.render('users/new')
})

//////////////////////////  C R E A T E  ///////////////////////////////

router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })
})

///////////  E D I T ,   R E N D E R   E D I T   F O R M  //////////////

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/edit', { user })
    })
})

//////////////////////////  U P D A T E  ///////////////////////////////

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })
})

///////////////////  S H O W ,   S H O W   O N E  //////////////////////

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', { user })
    })
})

//////////////////////////  D E L E T E  ///////////////////////////////

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})

module.exports = router;