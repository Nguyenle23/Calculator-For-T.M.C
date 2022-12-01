import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navList = [
    {
      navName: "Golden Section Search",
      navPath: "goldenSectionSearch",
    },
    {
      navName: "Bisection Method",
      navPath: "bisection",
    },
    {
      navName: "Parabolic Interpolation Method",
      navPath: "parabolicInterpolation",
    },
  ];
  const navigator = useNavigate();
  return (
    <div className="page home-container">
      {navList.map((nav, index) => (
        <ul className="home-nav-list">
          <li onClick={() => navigator(`/${nav.navPath}`)} className="home-nav">
            {nav.navName}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Home;
