import React, { useEffect, useState } from "react";
import "../../css/Optimize/twoVariables.css";
import SolutionBS from "./SolutionBS";
import axios from "axios";

export default function Bisection() {
  const [inputData, setInputData] = useState(null);
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, [datas]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      try {
        await axios
          .post("http://localhost:4000/optimize/Bisection", inputData)
          .then((res) => {
            setDatas(res.data.data);
            setStatus(null);
          });
      } catch (error) {
        setStatus(error.response.data);
      }
    };
    getTest();
  };

  return (
    <div className="optimize-container">
      <form className="algorithm">
        <h1 className="main-title">BISECTION METHOD</h1>
        <br />
        <div className="function">
          <i className="text-inside">f(x)</i>
          <input
            placeholder="enter your function..."
            title=" correct format: x^5 - 5*x^4 + x^3- 6*x^2+7*x+10 "
            type="text"
            className="algorithm-function"
            name="equation"
            onChange={handleChange}
            required
          />
        </div>

        <div className="variables">
          <i className="text-inside">
            x<sub>l</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className="algorithm-variable"
            name="xl"
            onChange={handleChange}
          />
          <i className="text-inside">
            x<sub>u</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className="algorithm-variable"
            name="xu"
            onChange={handleChange}
          />
        </div>

        <div className="error">
          <i className="text-inside">
            e<sub>s</sub>%
          </i>
          <input
            placeholder=""
            type="text"
            className="algorithm-error"
            name="es"
            onChange={handleChange}
          />
        </div>

        <button className="btn algorithm-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        {status && (
          <div className="error-call">
            <p>{status}</p>
          </div>
        )}
      </form>
      {datas.length === 0 ? <></> : <SolutionBS datas={datas} />}
    </div>
  );
}
