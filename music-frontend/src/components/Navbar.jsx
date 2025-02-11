import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import "./Navbar.css";  // ✅ Import styles if they exist

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Music Genre API</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/add-genre">Add Genre</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
