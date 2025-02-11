import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // ✅ Use full path
import Home from "./pages/Home.jsx";
import Genres from "./pages/Genres";
import AddGenre from "./pages/AddGenre";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />  {/* ✅ Ensure this path is correct */}
        <Route path="/add-genre" element={<AddGenre />} />
      </Routes>
    </Router>
  );
}

export default App;
