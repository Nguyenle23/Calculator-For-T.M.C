import React from "react";
import variables from "../Variables";
import styles from "../../Optimize/twoVariables.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SolutionNM({ data }) {
  const { f_x0, f_x1, f_x2, f_x3, x_0, x_1, x_2, x_3 } = variables;
  return (
    <div className={cx("algorithm-solution")}>
      <h1 className={cx("h1")}>SOLUTION</h1>
      <h3>Full calculation for the first iteration</h3>
      <div className={cx("step-container")}>
        <div className={cx("step-one")}>
          <h3>1. Calculate</h3>
          {/* <ul className={cx("step-one-calculate")}>
            <li>
              <p className={cx("equation")}>
                f(x0) = {data[0].f0}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                f(x1) = {data[0].f1}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                f(x2) = {data[0].f2}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                x3 =
              </p>
              f(x0)(x²1 - x²2) + f(x1)(x²2 - x²0) + f(x2)(x²0 - x²1)
              <p>--------------------------------------------------</p>
              2f(x0)(x1 - x2) + 2f(x1)(x2 - x0) + 2f(x2)(x0 - x1)
              <p>= {data[0].f3}</p>
            </li>
            <li>
              <p className={cx("equation")}>
                f(x3) = {data[0].f3}
              </p>
            </li>
          </ul> */}
        </div>

        <div className={cx("step-two")}>
          <h3>2. Check</h3>
          {/* <ul className={cx("step-two-check")}>
            <li>
              {f_x1} = {data[0].f1} &lt; {f_x2} = {data[0].f2} → Update: {x_0}
              = {x_1}, {x_1} = {x_2}, {x_2} = {x_3}
            </li>
            <li>
              Hence: {x_0} = {data[0].x0}, {x_1} = {data[0].x1}, {x_2} = {data[0].x2}
            </li>
          </ul> */}
        </div>

        <div className={cx("step-three")}>
          <h3>| Notice: This method is limit at 20 iterations</h3>
        </div>

        <div className={cx("step-four")}>
          <h3>4. Table result</h3>
          <table className={cx("step-four-table")}>
            <tr className={cx("step-four-row")}>
              <th className={cx("step-four-table-title")}>Iteration</th>
              <th className={cx("step-four-table-title")}>x</th>
              <th className={cx("step-four-table-title")}>f_x</th>
              <th className={cx("step-four-table-title")}>f'(x)</th>
              <th className={cx("step-four-table-title")}>f''(x)</th>
              <th className={cx("step-four-table-title")}>Ea%</th>
            </tr>
            {data.map((data) => (
              <tr className={cx("step-four-row")}>
                <td className={cx("step-four-table-data")}>{data.iterator}</td>
                <td className={cx("step-four-table-data")}>{data.x0}</td>
                <td className={cx("step-four-table-data")}>{data.f0}</td>
                <td className={cx("step-four-table-data")}>{data.fist_f0}</td>
                <td className={cx("step-four-table-data")}>{data.second_f0}</td>
                <td className={cx("step-four-table-data")}>{data.ea}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
