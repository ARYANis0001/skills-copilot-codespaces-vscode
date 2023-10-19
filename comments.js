// Create web server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Create database
const db = require("./queries");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Set up a URL route
app.get("/", (req, res) => res.send("Hello world!"));

app.get("/comments", db.getComments);
app.get("/comments/:id", db.getCommentById);
app.post("/comments", db.createComment);
app.put("/comments/:id", db.updateComment);
app.delete("/comments/:id", db.deleteComment);

// Start server
app.listen(port, () => console.log(`App running on port ${port}.`));