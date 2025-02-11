import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Genre.css";  // ✅ Import styles

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/genres")
      .then(response => setGenres(response.data))
      .catch(error => console.error("Error fetching genres:", error));
  }, []);

  return (
    <div className="genres-container">
      <h2>Genres</h2>
      <ul className="genres-list">
        {genres.map((genre) => (
          <li key={genre.id} className="genre-item">{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
