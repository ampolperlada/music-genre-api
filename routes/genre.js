//🔹 What is router in Express.js?
//In Express.js, router is like a mini-server inside your main server.
//It allows you to group related API endpoints together and keep your code organized.

//Instead of writing all API routes in index.js, you can separate them into files using express.Router().

const express = require("express");
const router = express.Router();

let genres = [
  { id: 1, name: "Rock" },
  { id: 2, name: "Jazz" },
  { id: 3, name: "Hip Hop" }
];

//Start with GET (Fetch All Genres)

// GET all genres
router.get("/", (req, res) => { //The slash / in router.get("/") just means "this is the main route inside this router."
  res.json(genres);
});


// GET a genre by ID
router.get("/:id", (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).json({ message: "Genre not found" });

  res.json(genre);
});

//POST (Create a New Genre)
// POST - Add a new genre
router.post("/", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).json({ message: "Name is required and should be at least 3 characters" });
  }

  const newGenre = {
    id: genres.length + 1, // Auto-increment ID
    name: req.body.name
  };

  genres.push(newGenre);
  res.status(201).json(newGenre);
});


module.exports = router;
