import React from "react";
import "./css/Global/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./Page/Home";
import GoldenSectionSearch from "./Optimize/GoldenSectionSearch/GoldenSectionSearch";
import Bisection from "./Optimize/Bisection/Bisection";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* golden section search */}
          <Route
            path="/golden-section"
            element={<GoldenSectionSearch />}
          ></Route>

          {/* bisection method */}
          <Route path="/bisection" element={<Bisection />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
