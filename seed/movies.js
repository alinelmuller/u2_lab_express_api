const db = require('../db')
const {  Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
    const actors = await Actor.find(); 

    if (actors.length < 5) {
        throw new Error('Not enough actors in the database. Please seed at least 5 actors.');
    }

    const movies = [
        { actors: [actors[0]._id], title: 'Forrest Gump', runtime: 142, rating: 'PG-13', yearReleased: 1994, description: 'Life is like a box of chocolates...'},
        { actors: [actors[1]._id], title: 'The Devil Wears Prada', runtime: 109, rating: 'PG-13', yearReleased: 2006, description: 'A young woman lands a job with a ruthless fashion magazine editor...'},
        { actors: [actors[2]._id], title: 'Inception', runtime: 148, rating: 'PG-13', yearReleased: 2010, description: 'A thief who enters the dreams of others...'},
        { actors: [actors[3]._id], title: 'Training Day', runtime: 122, rating: 'R', yearReleased: 2001, description: 'A rookie cop goes on a day-long training session with a corrupt detective...'},
        { actors: [actors[4]._id], title: 'Black Widow', runtime: 134, rating: 'PG-13', yearReleased: 2021, description: 'A film about Natasha Romanoff...'}
    ]
      await Movie.insertMany(movies)
      console.log('Movie Saved:')
    } catch (error) {
        console.error(error);
    }
}


const run = async () => {
    await main()
    db.close()
}
  
run()