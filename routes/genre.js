//🔹 What is router in Express.js?
//In Express.js, router is like a mini-server inside your main server.
//It allows you to group related API endpoints together and keep your code organized.

//Instead of writing all API routes in index.js, you can separate them into files using express.Router().

const express = require("express");
const router = express.Router();
const Genre = require("../models/genre");

// GET all genres
router.get("/", async (req, res) => {
  const genres = await Genre.getAll();
  res.json(genres);
});

// GET a genre by ID
router.get("/:id", async (req, res) => {
  const genre = await Genre.getById(req.params.id);
  if (!genre) return res.status(404).json({ message: "Genre not found" });
  res.json(genre);
});

// POST - Add a new genre
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const newGenre = await Genre.create(name);
  res.status(201).json(newGenre);
});

// PUT - Update a genre
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const updatedGenre = await Genre.update(req.params.id, name);
  if (!updatedGenre) return res.status(404).json({ message: "Genre not found" });
  res.json(updatedGenre);
});

// DELETE - Remove a genre
router.delete("/:id", async (req, res) => {
  const deletedGenre = await Genre.delete(req.params.id);
  if (!deletedGenre) return res.status(404).json({ message: "Genre not found" });
  res.json(deletedGenre);
});

module.exports = router;
