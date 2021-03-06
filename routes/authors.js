var express = require('express');
var router = express.Router();
const { Author } = require('../db/schema')

/////////////////// I N D E X ,   S H O W   A L L  /////////////////////

router.get('/', (req, res) => {
  Author.find()
    .then((authors) => {
      res.render('authors/index', { authors })
    })
})

/////////////  N E W ,   R E N D E R   N E W   F O R M  ////////////////

router.get('/new', (req, res) => {
  res.render('authors/new')
})

//////////////////////////  C R E A T E  ///////////////////////////////

router.post('/', (req, res) => {
  const newAuthor = req.body
  Author.create(newAuthor)
    .then(() => {
      res.redirect('/authors')
    })
})

///////////////////  S H O W ,   S H O W   O N E  //////////////////////

router.get('/:id', (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      res.render('authors/show', { author })
    })
})

module.exports = router;