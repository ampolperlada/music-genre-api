//🔹 What is router in Express.js?
//In Express.js, router is like a mini-server inside your main server.
//It allows you to group related API endpoints together and keep your code organized.

//Instead of writing all API routes in index.js, you can separate them into files using express.Router().

const express = require("express");
const router = express.Router();

// Sample GET route
router.get("/", (req, res) => {
  res.send("Genres API is working!");
});

module.exports = router;
