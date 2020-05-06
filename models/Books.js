// require necessary package
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new BookSchema object
var BookSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true
  }
  
});

// Creates an Book model from the schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = ;
