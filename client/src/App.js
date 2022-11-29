import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import GoldenSectionSearch from "./Optimize/GoldenSectionSearch/GoldenSectionSearch";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <GoldenSectionSearch />
    </div>
  );
}
