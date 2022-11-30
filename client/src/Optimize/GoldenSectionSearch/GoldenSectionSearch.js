import React, { useEffect, useState } from "react";
import "./GoldenSectionSearch.css";
import SolutionGSS from "./SolutionGSS";
import axios from "axios";

export default function GoldenSectionSearch() {
  const [inputData, setInputData] = useState(null);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      try {
        await axios.post("http://localhost:4000/optimize/goldenSectionSearch", inputData)
          .then((res) => {
            setData(res.data.data);
            setStatus(true);
            setMessage(res.data.message);
          })
      } catch (error) {
        if (error.response.status === 400) {
          setMessage(error.response.data);
        } else if (error.response.status === 500) {
          setMessage(error.response.data.message);
        }
      }
    };
    getTest();
  };

  console.log(status);

  return (
    <div className="golden-container">
      <form className="algorithm">
        <h1 className="main-title">GOLDEN SECTION SEARCH</h1>
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

        <div className="types">
          <label className="algorithm-type">
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="minimum"
              name="type"
              onChange={handleChange}
            />
            Minimum
          </label>
          <label className="algorithm-type">
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="maximum"
              name="type"
              onChange={handleChange}
            />
            Maximum
          </label>
        </div>
        <button className="btn algorithm-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
        {message && (
          <div className="error-call">
            <p>{message}</p>
          </div>
        )}
      </form>
      {data.length === 0 ? <></> : <SolutionGSS data={data} />}
    </div>
  );
}
