# The GA Mongoose Express Movie Database

This project creates a backend server using Express and Mongoose to manage a database of movies, actors, and reviews. The server will allow users to perform CRUD operations through defined endpoints. Movies have associated actors and reviews, and the relationships between these collections are maintained using foreign key references in MongoDB.

## Getting Started

1. **Clone the repository**
2. **Install dependencies**: Run `npm init -y`, `npm install express mongoose cors nodemon dotenv`
3. **Start the server**: Run `npm start`
4. **Access routes**: Visit `http://localhost:3001` and test the endpoints.

## API Endpoints

### 1. Movies

- **Get all movies**:  
  Retrieves a list of all movies in the database.  
  **Example**: `GET http://localhost:3001/movies`

- **Get a specific movie**:  
  Retrieves details of a specific movie by its ID.  
  **Example**: `GET http://localhost:3001/movies/:id`

### 2. Actors

- **Get all actors**:  
  Retrieves a list of all actors in the database.  
  **Example**: `GET http://localhost:3001/actors`

- **Get a specific actor**:  
  Retrieves details of a specific actor by their ID.  
  **Example**: `GET http://localhost:3001/actors/:id`

### 3. Reviews

- **Get all reviews**:  
  Retrieves a list of all reviews in the database.  
  **Example**: `GET http://localhost:3001/reviews`

- **Get a specific review**:  
  Retrieves details of a specific review by its ID.  
  **Example**: `GET http://localhost:3001/reviews/:id`

## Objectives

- **Movie Collection**: Movies will have properties such as Title, Runtime, Rating, Year Released, and Description. Actors will be referenced in the movie schema via foreign keys.

- **Actor Collection**: Actors will have properties such as Name, Age, Alive status, and Biography.

- **Review Collection**: Reviews will be connected to specific movies and include a Score, Comment, and Date.

- **Data Population**: At least 5 movies and 10 actors will be seeded in the database. Each movie will have at least 2 reviews connected to it.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling routes and server logic.
- **Mongoose**: ODM for MongoDB to manage schemas and collections.
- **MongoDB**: Database to store movie, actor, and review data.