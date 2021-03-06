const express = require("express");

var mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// establish MongoDB var based on deployed or local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true } );

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

// socket io code 
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (client) => { 
  /* Emit events to the client */ 
  console.log('a user connected');
  client.on('disconnect', () => {
    console.log('user disconnected');
  });
  // identify the msg triggered by the savedBook event
});

server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
