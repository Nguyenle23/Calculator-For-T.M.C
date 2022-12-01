import React from "react";
import "./css/Global/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./Page/Home/Home";
import GoldenSectionSearch from "./Optimize/GoldenSectionSearch/GoldenSectionSearch";
import Bisection from "./Optimize/Bisection/Bisection";
import ParabolicInterpolation from "./Optimize/ParabolicInterpolation/ParabolicInterpolation";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/* golden section search */}
          <Route
            path="/goldenSectionSearch"
            element={<GoldenSectionSearch />}
          ></Route>

          {/* bisection method */}
          <Route path="/bisection" element={<Bisection />}></Route>

          {/* parabolic interpolation method */}
          <Route path="/parabolicInterpolation" element={<ParabolicInterpolation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
