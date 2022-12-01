import React from "react";
import variables from "../Variables";
import "../../css/Optimize/twoVariables.css";

export default function SolutionGSS({ data }) {
  const { f_x0, f_x1, f_x2, f_x3, x_0, x_1, x_2, x_3 } = variables;
  return (
    <div className="algorithm-solution">
      <h1>SOLUTION</h1>
      <h3>Full calculation for the first iteration</h3>
      <div className="step-container">
        <div className="step step-one">
          <h3>1. Calculate</h3>
          <ul className="substep step-one-calculate">
            <li>
              <p className="equation">
                f(x0) = {data[0].f0}
              </p>
            </li>
            <li>
              <p className="equation">
                f(x1) = {data[0].f1}
              </p>
            </li>
            <li>
              <p className="equation">
                f(x2) = {data[0].f2}
              </p>
            </li>
            <li>
              <p className="equation">
                x3 =
              </p>
              f(x0)(x²1 - x²2) + f(x1)(x²2 - x²0) + f(x2)(x²0 - x²1)
              <p>--------------------------------------------------</p>
              2f(x0)(x1 - x2) + 2f(x1)(x2 - x0) + 2f(x2)(x0 - x1)
              <p>= {data[0].f3}</p>
            </li>
            <li>
              <p className="equation">
                f(x3) = {data[0].f3}
              </p>
            </li>
          </ul>
        </div>

        <div className="step step-two">
          <h3>2. Check</h3>
          <ul className="substep step-two-check">
            <li>
              {f_x1} = {data[0].f1} &lt; {f_x2} = {data[0].f2} → Update: {x_0}
              = {x_1}, {x_1} = {x_2}, {x_2} = {x_3}
            </li>
            <li>
              Hence: {x_0} = {data[0].x0}, {x_1} = {data[0].x1}, {x_2} = {data[0].x2}
            </li>
          </ul>
        </div>

        <div className="step step-three">
          <h3>| Notice: This method is limit at 20 iterations</h3>
        </div>

        <div className="step step-four">
          <h3>4. Table result</h3>
          <table className="substep step-four-table">
            <tr>
              <th>Iteration</th>
              <th>{x_0}</th>
              <th>{f_x0}</th>
              <th>{x_1}</th>
              <th>{f_x1}</th>
              <th>{x_2}</th>
              <th>{f_x2}</th>
              <th>{x_3}</th>
              <th>{f_x3}</th>
            </tr>
            {data.map((data) => (
              <tr>
                <td>{data.iterator}</td>
                <td>{data.x0}</td>
                <td>{data.f0}</td>
                <td>{data.x1}</td>
                <td>{data.f1}</td>
                <td>{data.x2}</td>
                <td>{data.f2}</td>
                <td>{data.x3}</td>
                <td>{data.f3}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
