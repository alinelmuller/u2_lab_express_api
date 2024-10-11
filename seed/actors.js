const db = require('../db')
const {  Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        { name: 'Tom Hanks', age: 65, alive: true },
        { name: 'Meryl Streep', age: 72, alive: true },
        { name: 'Leonardo DiCaprio', age: 46, alive: true },
        { name: 'Denzel Washington', age: 67, alive: true },
        { name: 'Scarlett Johansson', age: 36, alive: true }
      ]
      await Actor.insertMany(actors)
      console.log('Actors Saved:')
}

const run = async () => {
    await main()
    db.close()
}
  
run()

