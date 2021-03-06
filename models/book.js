// require necessary package
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new BookSchema object
var BookSchema = new Schema({

  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String    
  },
  authors: [String],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
  
});

// Creates an Book model from the schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
