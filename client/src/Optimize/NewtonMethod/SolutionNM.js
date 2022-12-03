import React from "react";
import variables from "../Variables";
import styles from "../../Optimize/twoVariables.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SolutionNM({ data, formula }) {
  const { x_i, x_i1 } = variables;
  return (
    <div className={cx("algorithm-solution")}>
      <h1 className={cx("h1")}>SOLUTION</h1>
      <h3>Full calculation for the first iteration</h3>
      <div className={cx("step-container")}>
        <div className={cx("step-one")}>
          <h3>1. Calculate</h3>
          <ul className={cx("step-one-calculate")}>
            <li>
              <p className={cx("equation")}>
                f(x) = {formula[0]} -&gt; f({data[0].x0}) = {data[0].fx}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                f'(x) = {formula[1]} -&gt; f({data[0].x0}) = {data[0].f_1st}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                f''(x) = {formula[2]} -&gt; f({data[0].x0}) = {data[0].f_2nd}
              </p>
            </li>
            <li>
              <div className={cx("frac-equation")}>
                <span className={cx("constant")}>{x_i1} =</span>
                <div className={cx("object")}>{x_i} - </div>
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>f'(x)</div>
                  <div className={cx("denominator")}>f''(x)</div>
                </div>
                <div className={cx("result")}>= {data[1].x0}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className={cx("step-two")}>
          <h3>2. Check</h3>
          <ul className={cx("step-two-check")}>
            <li>Ea &lt; Es (Stop condition)</li>
            <li>
              <div className={cx("frac-equation")}>
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>
                    |{x_i1} - {x_i}|
                  </div>
                  <div className={cx("denominator")}>{x_i1}</div>
                </div>
                <div className={cx("result")}>&lt; Es</div>
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
              <th className={cx("step-four-table-title")}>f(x)</th>
              <th className={cx("step-four-table-title")}>f'(x)</th>
              <th className={cx("step-four-table-title")}>f''(x)</th>
              <th className={cx("step-four-table-title")}>Ea%</th>
            </tr>
            {data.map((data) => (
              <tr className={cx("step-four-row")}>
                <td className={cx("step-four-table-data")}>{data.iterator}</td>
                <td className={cx("step-four-table-data")}>{data.x0}</td>
                <td className={cx("step-four-table-data")}>{data.fx}</td>
                <td className={cx("step-four-table-data")}>{data.f_1st}</td>
                <td className={cx("step-four-table-data")}>{data.f_2nd}</td>
                <td className={cx("step-four-table-data")}>{data.ea}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
