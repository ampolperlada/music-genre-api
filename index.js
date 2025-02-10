require("dotenv").config();
console.log("DB User:", process.env.DB_USER);
console.log("DB Password:", process.env.DB_PASS);



const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const genreRoutes = require("./routes/genre");
app.use("/api/genres", genreRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
