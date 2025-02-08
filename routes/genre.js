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

// GET all genres
router.get("/", (req, res) => { //The slash / in router.get("/") just means "this is the main route inside this router."
  res.json(genres);
});


module.exports = router;
