const db = require('../db')
const {  Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
        const movies = await Movie.find();
    if (movies.length < 3) {
          throw new Error('Not enough movies in the database. Please seed at least 5 movies.');
    }
    const reviews = [
        { movie: movies[0]._id, score: 85, comment: 'A timeless classic' },
        { movie: movies[0]._id, score: 90, comment: 'Amazing performance by Tom Hanks' },
        { movie: movies[1]._id, score: 80, comment: 'Meryl Streep is flawless as always' },
        { movie: movies[1]._id, score: 75, comment: 'A stylish and fun film' },
        { movie: movies[2]._id, score: 95, comment: 'Mind-blowing!' },
        { movie: movies[2]._id, score: 88, comment: 'Incredible cinematography' },
        { movie: movies[3]._id, score: 70, comment: 'Intense from start to finish' },
        { movie: movies[3]._id, score: 72, comment: 'Denzel at his best' },
        { movie: movies[4]._id, score: 85, comment: 'A solid Marvel film' },
        { movie: movies[4]._id, score: 87, comment: 'Scarlett Johansson is brilliant' }
    ]
    await Review.insertMany(reviews)
    console.log('Review Saved:')
    } catch (error) {
        console.error(error);
    }
}

const run = async () => {
    await main()
    db.close()
}
  
run()