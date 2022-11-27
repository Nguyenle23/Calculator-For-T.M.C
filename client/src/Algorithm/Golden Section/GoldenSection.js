import React, { useEffect, useState } from "react";
import "./GoldenSection.css";
import variables from "./Variables";
import axios from "axios";

export default function GoldenSection() {
  const [inputData, setInputData] = useState(null);
  const [datas, setDatas] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      const request = await axios.post("http://localhost:4000/test", inputData);
      setDatas(request.data.data);
    }
    getTest();
  };

  const { f_x1, f_x2, x_l, x_u, x_opt, x_1, x_2, e_a, f_xl, f_xu } = variables;
  return (
    <div className="golden-container">
      <form className="algorithm">
        <h1 className="main-title">GOLDEN SECTION</h1>
        <br />
        <div className="function">
          <i className="text-inside">f(x)</i>
          <input
            placeholder="type your function: x^5 - 5*x^4 + x^3- 6*x^2+7*x+10"
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
          <input placeholder="" type="text" className="algorithm-variable" name="xl" onChange={handleChange} />
          <i className="text-inside">x<sub>u</sub></i>
          <input placeholder="" type="text" className="algorithm-variable" name="xu" onChange={handleChange} />
        </div>

        <div className="error">
          <i className="text-inside">e<sub>s</sub></i>
          <input placeholder="" type="text" className="algorithm-error" name="es" onChange={handleChange} />
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
        <button className="algorithm-submit" onClick={handleSubmit}>SUBMIT</button>
      </form>

      <div className="algorithm-solution">
        <h1>SOLUTION</h1>
        <div className="step-container">
          <div className="step step-one">
            <h3>1. Calculate</h3>
            <ul className="substep step-one-calculate">
              <li>
                d = R × ({x_u} - {x_l}) = [(&#8730;5 - 1) / 2] × (5 - 1) =
                2,4721
              </li>
              <li>
                {x_1} = {x_l} + d = 1 + 2,4721 = 3.47214
              </li>
              <li>
                {x_2} = {x_u} - d = 5−2,4721 = 2.52786
              </li>
            </ul>
          </div>

          <div className="step step-two">
            <h3>2. Check</h3>
            <ul className="substep step-two-check">
              <li>
                {f_x1} = −218.23094, which is &lt; {f_x2} = −95.43779 →{x_l} ={" "}
                {x_2} and {x_opt} = {x_2} = 2.52786
              </li>
              {/* <li>
                if {f_x1} &lt; {f_x2}: {x_l} = {x_2} and {x_opt} = {x_2}
              </li> */}
            </ul>
          </div>

          <div className="step step-three">
            <h3>3. Error</h3>
            <ul className="substep step-three-error">
              <li>
                {e_a} = (1 - R) × (interval / {x_opt}) × 100 = (1 - [(&#8730;5 -
                1) / 2] × (5 - 1)) × [(5 - 1) / {x_opt}] × 100% = 60.440%
              </li>
            </ul>
          </div>

          <div className="step step-four">
            <h3>4. Table result</h3>
            <table className="substep step-four-table">
              <tr>
                <th>Iteration</th>
                <th>{x_l}</th>
                <th>{x_2}</th>
                <th>{f_x2}</th>
                <th>{x_1}</th>
                <th>{f_x1}</th>
                <th>{x_u}</th>
                <th>d</th>
                <th>{e_a}</th>
              </tr>
              {datas.length !== 0 ? datas.map((data) => (
                <tr>
                  <td>{data.iterator}</td>
                  <td>{data.xl}</td>
                  <td>{data.x2}</td>
                  <td>{data.f2}</td>
                  <td>{data.x1}</td>
                  <td>{data.f1}</td>
                  <td>{data.xu}</td>
                  <td>{data.d}</td>
                  <td>{data.ea}</td>
                </tr>
              ))
                :
                <h3>Please enter your equation</h3>
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}