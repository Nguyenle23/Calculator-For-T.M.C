import React, { useEffect, useState } from "react";
import "./GoldenSection.css";
import ResultGS from "./ResultGS";
import axios from "axios";

export default function GoldenSection() {
  const [inputData, setInputData] = useState(null);
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: (window.innerHeight * 75) / 100,
      behavior: "smooth",
    });
  }, [status]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      const request = await axios.post("http://localhost:4000/test", inputData);
      // console.log(inputData);
      setDatas(request.data.data);
      setStatus(true);
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
            <input placeholder="" type="radio" value="minimum" name="type" />
            Minimum
          </label>
          <label className="algorithm-type">
            <input placeholder="" type="radio" value="maximum" name="type" />
            Maximum
          </label>
        </div>
        <button className="algorithm-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>

      {status ? <ResultGS datas={datas} /> : <></>}
    </div>
  );
}
