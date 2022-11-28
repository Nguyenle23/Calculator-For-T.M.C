import React from "react";
import variables from "../Variables";
import "./GoldenSection.css";

function ResultGS({ datas }) {
  const { f_x1, f_x2, x_l, x_u, x_opt, x_1, x_2, e_a } = variables;
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
                d = R × ({x_u} - {x_l})
              </p>
              = [(&#8730;5 - 1) / 2] × ({datas[0].xu} - {datas[0].xl}) =
              {datas[0].d}
            </li>
            <li>
              <p className="equation">
                {x_1} = {x_l} + d
              </p>
              = {datas[0].xl} + {datas[0].d} ={datas[0].x1}
            </li>
            <li>
              <p className="equation">
                {x_2} = {x_u} - d
              </p>
              = {datas[0].xu}−{datas[0].d} = {datas[0].x2}
            </li>
          </ul>
        </div>

        <div className="step step-two">
          <h3>2. Check</h3>
          <ul className="substep step-two-check">
            <li>
              {f_x1} = {datas[0].f1}, which is &lt; {f_x2} ={datas[0].f2} →{x_l}
              = {x_2} and {x_opt} = {x_2} = {datas[0].x2}
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
              <p className="equation">
                {e_a} = (1 - R) × (interval / {x_opt}) × 100
              </p>
              = (1 - [(&#8730;5 - 1) / 2] × ({datas[0].xu} - {datas[0].xl})) ×
              [({datas[0].xu} -{datas[0].xl}) / {datas[0].xopt}] × 100% =
              {datas[0].ea}%
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
            {datas.length !== 0 ? (
              datas.map((data) => (
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
            ) : (
              <h3>Please enter your equation</h3>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ResultGS;
