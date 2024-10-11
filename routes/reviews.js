const { Router } = require('express')
const { Review } = require('../models')

const router = Router()


router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('movie')
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});


router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('movie')
    if (!review) throw new Error('Review not found')
    res.json(review)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router