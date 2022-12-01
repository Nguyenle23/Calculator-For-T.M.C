import React from "react";
import variables from "../Variables";
import "../../css/Optimize/twoVariables.css";

export default function SolutionGSS({ data }) {
  const { f_x1, f_x2, x_l, x_u, x_opt, x_1, x_2, e_a } = variables;
  return (
    <div className="algorithm-solution">
      <h1>SOLUTION</h1>
      <h3>Full calculation for the first iteration</h3>
      <div className="step-container">
        <div className="step step-one">
          <h3>1. Calculate</h3>
          {/* <ul className="substep step-one-calculate">
            <li>
              <p className="equation">
                d = R × ({x_u} - {x_l})
              </p>
              = [(&#8730;5 - 1) / 2] × ({data[1].xu} - {data[1].xl}) =
              {data[1].d}
            </li>
            <li>
              <p className="equation">
                {x_1} = {x_l} + d
              </p>
              = {data[1].xl} + {data[1].d} ={data[1].x1}
            </li>
            <li>
              <p className="equation">
                {x_2} = {x_u} - d
              </p>
              = {data[1].xu}−{data[1].d} = {data[1].x2}
            </li>
          </ul> */}
        </div>

        <div className="step step-two">
          <h3>2. Check</h3>
          {/* <ul className="substep step-two-check">
            <li>
              {f_x1} = {data[1].f1}, which is &lt; {f_x2} ={data[1].f2} →{x_l}
              = {x_2} and {x_opt} = {x_2} = {data[1].x2}
            </li>
            <li>
            if {f_x1} &lt; {f_x2}: {x_l} = {x_2} and {x_opt} = {x_2}
          </li>
          </ul> */}
        </div>

        <div className="step step-three">
          <h3>3. Error</h3>
          {/* <ul className="substep step-three-error">
            <li>
              <p className="equation">
                {e_a}% = (1 - R) × (interval / {x_opt}) × 100
              </p>
              = (1 - [(&#8730;5 - 1) / 2] × ({data[1].xu} - {data[1].xl})) ×
              [({data[1].xu} -{data[1].xl}) / {data[1].xopt}] × 100% =
              {data[1].ea}%
            </li>
          </ul> */}
        </div>

        <div className="step step-four">
          <h3>4. Table result</h3>
          <table className="substep step-four-table">
            <tr>
              <th>Iteration</th>
              <th>x0</th>
              <th>fx0</th>
              <th>x1</th>
              <th>fx1</th>
              <th>x2</th>
              <th>fx2</th>
              <th>x3</th>
              <th>fx3</th>
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
