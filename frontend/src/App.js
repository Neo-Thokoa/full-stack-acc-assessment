/**
 * The `App` component is a functional component that renders the main structure of the application.
 * It includes the `Router` component from the `react-router-dom` library, the `Navbar` component, and the `Routes` component.
 * The component defines two routes: one for the home screen and one for a 404 page.
 *
 * @returns {JSX.Element} The rendered component.
 */
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
