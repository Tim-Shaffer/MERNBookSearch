// Require the models
var db = require("../models");

// require necessary packages
var axios = require("axios");
var cheerio = require("cheerio");

// export the constructor to make available in other files
module.exports = function(app) {

  function buildBooks(dbBook) {
    var BookArray = [];
    
    for (i=0; i < dbBook.length; i++) {
      BookArray.push({
        "_id": dbBook[i]._id, 
        "headline": dbBook[i].headline, 
        "link": dbBook[i].link,
        "byLine": dbBook[i].byLine,
        "summary": dbBook[i].summary,
        "isSaved": dbBook[i].isSaved
      })
    };

    // return an object to hold the handlebars array just built
    return {
      Books: BookArray
    };
          
  };

  // default route - get all saved Books
  app.get("/", function(req, res) {


  });

  // Route for getting all Books from the Google Book API
  app.get("/search", function(req, res) {


  });

  // GET route for scraping the www.inquirer.com/ website
  app.get("/", function(req, res) {

    // grab the body of the html with axios
    axios.get("http://www.inquirer.com/").then(function(response) {

    });

  });

  // Route for getting all the saved Books from the db
  app.get("/saved", function(req, res) {
    // Grab every document in the Books collection
    db.Book.find({isSaved: true})
      .then(function(dbBook) {
        // If we were able to successfully find Books
        // create an object to hold the handlebars array just built
        var hbsObject = buildBooks(dbBook);
        
        // send the object to the saved handlebar for display
        res.render("saved", hbsObject);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  // Route for saving a Book
  app.put("/saved/:id", function(req, res) {
    
      db.Book.updateOne({ _id: req.params.id }, {$set: {"isSaved": true}})
      
      .then(function(dbBook) {
        // If we were able to successfully update an Book, send it back to the client
        res.json(dbBook);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

};
  