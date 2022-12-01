import React from "react";
import "./css/Global/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./Page/Home/Home";
import GoldenSectionSearch from "./Optimize/GoldenSectionSearch/GoldenSectionSearch";
import NewtonMethod from "./Optimize/NewtonMethod/NewtonMethod";
import ParabolicInterpolation from "./Optimize/ParabolicInterpolation/ParabolicInterpolation";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/goldenSectionSearch"
            element={<GoldenSectionSearch />}
          ></Route>

          <Route path="/newtonMethod" element={<NewtonMethod />}></Route>

          <Route path="/parabolicInterpolation" element={<ParabolicInterpolation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
