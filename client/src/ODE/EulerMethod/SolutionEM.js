import React from "react";
import variables from "../Variables";
import styles from "../../ODE/twoVariables.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SolutionEM({ data, formula }) {
  const { y_x_i, y_x_i1, f_x_y } = variables;
  return (
    <div className={cx("algorithm-solution")}>
      <h1 className={cx("h1")}>SOLUTION</h1>
      <h3>Full calculation for the first iteration</h3>
      <div className={cx("step-container")}>
        <div className={cx("step-one")}>
          <h3>1. Calculate</h3>
          <ul className={cx("step-one-calculate")}>
            <li>
              <div className={cx("frac-equation")}>
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>d<sub>y</sub></div>
                  <div className={cx("denominator")}>d<sub>x</sub></div>
                </div>
                <div className={cx("result")}>= {formula}</div>
                <div className={cx("result")}> -&gt; y(x) = </div>
              </div>
            </li>
            <li>
              <div className={cx("frac-equation")}>
                <span className={cx("constant")}>{y_x_i1} =</span>
                <div className={cx("object")}>{y_x_i} + </div>
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>f'(x)</div>
                  <div className={cx("denominator")}>f''(x)</div>
                </div>
                <div className={cx("object")}>* h =</div>
                <div className={cx("object")}>{y_x_i} +</div>
                <div className={cx("object")}>{f_x_y} * h</div>
              </div>
              <p className={cx("equation")}>
                -&gt; <span className={cx("constant")}>{y_x_i1} = </span>
                 {data[0].y_euler} + {data[0].slope} * {data[0].h} = {data[1].y_euler}
              </p>
            </li>
          </ul>
        </div>

        <div className={cx("step-two")}>
          <h3>2. Error Analysis for Euler's Method</h3>
          <ul className={cx("step-two-check")}>
            <li>
              <div className={cx("frac-equation")}>
                Ea =
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>
                    f'(x<sub>i</sub>, y<sub>i</sub>)
                  </div>
                  <div className={cx("denominator")}>2!</div>
                </div>
                h²
              </div>
            </li>
          </ul>
        </div>

        <div className={cx("step-four")}>
          <h3>3. Table result</h3>
          <table className={cx("step-four-table")}>
            <tr className={cx("step-four-row")}>
              <th className={cx("step-four-table-title")}>Iteration</th>
              <th className={cx("step-four-table-title")}>x</th>
              <th className={cx("step-four-table-title")}>y_euler</th>
              <th className={cx("step-four-table-title")}>f(xi, yi)</th>
            </tr>
            {data.map((data) => (
              <tr className={cx("step-four-row")}>
                <td className={cx("step-four-table-data")}>{data.iterator}</td>
                <td className={cx("step-four-table-data")}>{data.x}</td>
                <td className={cx("step-four-table-data")}>{data.y_euler}</td>
                <td className={cx("step-four-table-data")}>{data.slope}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div >
  );
}
