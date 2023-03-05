const router = require('express').Router()
const Book = require('../models/books')

router.get('/', async (req, res) => {
    try{
        const books = await Book.find()
        res.json(books)
         } catch (error) {
            console.log(error)
            res.status(400).json({'message': 'error getting resources'})
         }

})

router.post('/', async (req, res) => {
   try{
       const books= await new Book(req.body).save()
        res.json(books)
         } catch (error) {
           console.log(error)
           res.status(400).json({'message': 'error creating resource'})
     }
})

// router.get("/:id", async (req, res) => {
//    const { id } = req.params;
//    const books = await Book.findById(id)
//    res.render('show',{
//      books
//    })
//  })

// router.delete('/:id',async (req, res) => {
//    const { id } = req.params
//    const deletedBread = await Bread.findByIdAndDelete(id)
//    res.status(303).redirect('/breads')
//  })

module.exports = router