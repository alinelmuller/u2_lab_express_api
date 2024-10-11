const { Schema } = require('mongoose')

const ActorSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      min: 0
    },
    alive: {
      type: Boolean,
      default: true 
    },
    photo: {
      type: String, 
      default: 'default-actor.jpg'
    },
    biography: {
      type: String, 
      default: ''
    }
  });
  
  module.exports = ActorSchema