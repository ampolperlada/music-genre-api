import React, { useState } from "react";
import axios from "axios";
import "./AddGenre.css";  // ✅ Import styles

const AddGenre = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/genres", { name })
      .then(() => {
        setName("");
        alert("Genre added successfully!");
      })
      .catch(error => console.error("Error adding genre:", error));
  };

  return (
    <div className="add-genre-container">
      <h2>Add New Genre</h2>
      <form onSubmit={handleSubmit} className="add-genre-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter genre name"
        />
        <button type="submit">Add Genre</button>
      </form>
    </div>
  );
};

export default AddGenre;
