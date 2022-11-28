import React, { useEffect, useState } from "react";
import "./GoldenSection.css";
import ResultGS from "./ResultGS";
import axios, { AxiosError } from "axios";

export default function GoldenSection() {
  const [inputData, setInputData] = useState(null);
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState({ open: false, error: false });

  const scrollSession = useEffect(() => {
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
        const request = await axios.post(
          "http://localhost:4000/test",
          inputData
        );
        setDatas(request.data.data);
        setStatus({ open: true, error: false });
      } catch {
        setStatus({ open: false, error: true });
      }
    };
    getTest();
  };

  return (
    <div className="golden-container">
      <form className="algorithm">
        <h1 className="main-title">GOLDEN SECTION</h1>
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
            e<sub>s</sub>
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
        {status.error ? (
          <h3 className="error-call">Wrong syntax, please try again!</h3>
        ) : (
          ""
        )}
      </form>

      {status.open ? <ResultGS datas={datas} /> : <></>}
    </div>
  );
}
