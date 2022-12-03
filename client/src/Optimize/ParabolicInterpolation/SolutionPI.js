import React from "react";
import variables from "../Variables";
import styles from "../../Optimize/twoVariables.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SolutionPI({ data }) {
  console.log(data);
  const { f_x0, f_x1, f_x2, f_x3, x_0, x_1, x_2, x_3, x2_1, x2_2, x2_0 } =
    variables;
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
                {f_x0} = {data[0].fx}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                {f_x1} = {data[0].f1}
              </p>
            </li>
            <li>
              <p className={cx("equation")}>
                {f_x2} = {data[0].f2}
              </p>
            </li>
            <li>
              <div className={cx("frac-equation")}>
                <span className={cx("constant")}>{x_3} =</span>
                <div className={cx("fragment")}>
                  <div className={cx("numerator")}>
                    {f_x0}({x2_1} - {x2_2}) + {f_x1}({x2_2} - {x2_0}) + {f_x2}(
                    {x2_0}-{x2_1})
                  </div>
                  <div className={cx("denominator")}>
                    2{f_x0}({x_1} - {x_2}) + 2f({x_1})({x_2} - {x_0}) + 2f(
                    {x_2})({x_0}- {x_1})
                  </div>
                </div>
                <div className={cx("result")}>= {data[0].f3}</div>
              </div>
              <br />
            </li>
            <li>
              <p className={cx("equation")}>
                {f_x3} = {data[0].f3}
              </p>
            </li>
          </ul>
        </div>

        <div className={cx("step-two")}>
          <h3>2. Check</h3>
          <ul className={cx("step-two-check")}>
            <li>
              {f_x1} = {data[0].f1} &lt; {f_x2} = {data[0].f2} → Update: {x_0}={" "}
              {x_1}, {x_1} = {x_2}, {x_2} = {x_3}
            </li>
            <li>
              Hence: {x_0} = {data[0].x0}, {x_1} = {data[0].x1}, {x_2} ={" "}
              {data[0].x2}
            </li>
          </ul>
        </div>

        <div className={cx("step-three")}>
          <h3>| Notice: This method is limit at 20 iterations</h3>
        </div>

        <div className={cx("step-four")}>
          <h3>3. Table result</h3>
          <table className={cx("step-four-table")}>
            <tr className={cx("step-four-row")}>
              <th className={cx("step-four-table-title")}>Iteration</th>
              <th className={cx("step-four-table-title")}>{x_0}</th>
              <th className={cx("step-four-table-title")}>{f_x0}</th>
              <th className={cx("step-four-table-title")}>{x_1}</th>
              <th className={cx("step-four-table-title")}>{f_x1}</th>
              <th className={cx("step-four-table-title")}>{x_2}</th>
              <th className={cx("step-four-table-title")}>{f_x2}</th>
              <th className={cx("step-four-table-title")}>{x_3}</th>
              <th className={cx("step-four-table-title")}>{f_x3}</th>
            </tr>
            {data.map((data) => (
              <tr className={cx("step-four-row")}>
                <td className={cx("step-four-table-data")}>{data.iterator}</td>
                <td className={cx("step-four-table-data")}>{data.x0}</td>
                <td className={cx("step-four-table-data")}>{data.fx}</td>
                <td className={cx("step-four-table-data")}>{data.x1}</td>
                <td className={cx("step-four-table-data")}>{data.f1}</td>
                <td className={cx("step-four-table-data")}>{data.x2}</td>
                <td className={cx("step-four-table-data")}>{data.f2}</td>
                <td className={cx("step-four-table-data")}>{data.x3}</td>
                <td className={cx("step-four-table-data")}>{data.f3}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
