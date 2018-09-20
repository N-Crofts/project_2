var express = require('express')
var router = express.Router({ mergeParams: true })
const { User } = require('../db/schema')

//index, show all
router.get('/', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.send(user.author)
    })
})

//new, render new form


//show, show one
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.send(user.author.id(req.params.id))
    })
})

//edit, render edit form


//create


//update


module.exports = router