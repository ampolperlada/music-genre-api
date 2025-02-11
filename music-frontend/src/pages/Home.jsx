import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";  // ✅ Import styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Music Genre API</h1>
      <p>Browse and manage different music genres.</p>
      <Link to="/genres" className="explore-button">Explore Genres</Link>
    </div>
  );
};

export default Home;