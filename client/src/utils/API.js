import axios from "axios";

export default {
  // Gets all books
  getBooks: function(search, apiKey) {
    let url = "https://www.googleapis.com/books/v1/volumes?q="+ search + "&printType=Books&key=" + apiKey; 
    return axios.get(url);
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
  }
};
