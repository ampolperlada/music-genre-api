import React from "react";
import Home from "./Home.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; // ✅ Correct import for React Router v6

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
