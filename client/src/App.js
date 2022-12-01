import React from "react";
import "./css/Global/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
<<<<<<< Updated upstream
=======
import Home from "./Page/Home/Home";
>>>>>>> Stashed changes
import GoldenSectionSearch from "./Optimize/GoldenSectionSearch/GoldenSectionSearch";
import Bisection from "./Optimize/Bisection/Bisection";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/golden-section"
            element={<GoldenSectionSearch />}
          ></Route>
          <Route path="/bisection" element={<Bisection />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
