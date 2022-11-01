import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar name="I just passed a prop" />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
