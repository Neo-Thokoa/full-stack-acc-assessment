import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import HomeScreen from "./Pages/Home/Homescreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
