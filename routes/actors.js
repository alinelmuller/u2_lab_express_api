const { Router } = require('express')
const { Actor } = require('../models')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find()
    res.json(actors)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id)
    if (!actor) throw new Error('Actor not found')
    res.json(actor)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router