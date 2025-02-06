import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/results" element={<Results />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
