import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search, apiKey) {
    let url = "https://www.googleapis.com/books/v1/volumes?q="+ search + "&printType=Books&key=" + apiKey; 
    return axios.get(url);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
