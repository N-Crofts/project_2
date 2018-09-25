var express = require('express')
var router = express.Router({ mergeParams: true })
const { Author, Novel } = require('../db/schema')

/////////////////// I N D E X ,   S H O W   A L L  /////////////////////

router.get('/', (req, res) => {
    const authorId = req.params.authorId
    Author.findById(authorId)
        .then((author) => {
            res.render('novels/index', {
                author: author
            })
        })
})

/////////////  N E W ,   R E N D E R   N E W   F O R M  ////////////////

router.get('/new', (req, res) => {
    const authorId = req.params.authorId
    res.render('novels/new', {
        authorId: authorId
    })
})
  
//////////////////////////  C R E A T E  ///////////////////////////////

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

// // EDIT
// router.get('../:novelId/edit', (req, res) => {
//     const authorId = req.params.authorId
//     const novelId = req.params.novelId

//     Author.findById(authorId)
//         .then((author) => {
//             const novel = author.novels.id(novelId)
//             res.render('novel/edit', {
//                 novel: novel,
//                 authorId: authorId
//             })
//         })
// })

// // UPDATE

// router.put('/:novelId', (req, res) => {
//     const authorId = req.params.authorId
//     const novelId = req.params.novelId
//     const updatedNovel = req.body

//     Author.findByIdAndUpdate(authorId)
//         .then((author) => {
//             const novel = author.novels.id(novelId)

//             novel.title = updatedNovel.title
//             novel.synopsis = updatedNovel.synopsis

//          return author.save()
//         })
    
//         .then(() => {
//             res.redirect(`/authors/${authorId}/novels/${novelId}`)
//     })
// })



///////////////////  S H O W ,   S H O W   O N E  //////////////////////

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

// DELETE

// router.get('/:novelId/delete', (req, res) => {
//     const AuthorId = req.params.AuthorId
//     const novelId = req.params.novelId

//     Author.findById(authorId)
//      .then((author) => {
//          const novel = author.novels.id(novelId).remove()
//          return author.save()
//      })
//      .then(() => {
//          res.redirect(`/authors/${authorId}/novels`)
//      })
// })

module.exports = router