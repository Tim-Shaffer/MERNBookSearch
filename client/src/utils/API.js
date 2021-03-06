import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search, apiKey) {
    let url = "https://www.googleapis.com/books/v1/volumes?q="+ search + "&printType=Books&key=" + apiKey; 
    return axios.get(url);
  },
  // Gets all saved books
  savedBooks: function() {
    return axios.get("/api");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api", 
    { 
      "id": bookData.id, 
      "title": bookData.title,
      "description": bookData.description,
      "image": bookData.image,
      "link": bookData.link,
      "authors": bookData.authors
    });
  },
   // Deletes the book with the given id
   deleteBook: function(id) {
    return axios.delete("/api/" + id);
  },
};
