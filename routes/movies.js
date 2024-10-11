const { Router } = require('express')
const { Movie } = require('../models')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('actors')
    res.json(movies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('actors')
    if (!movie) throw new Error('Movie not found')
    res.json(movie)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router