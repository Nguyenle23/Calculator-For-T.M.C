import React from "react";
import variables from "../Variables";
import styles from "../../Optimize/twoVariables.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SolutionGSS({ data }) {
  const { f_x1, f_x2, x_l, x_u, x_opt, x_1, x_2, e_a } = variables;
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
                d = R × ({x_u} - {x_l})
              </p>
              = [(&#8730;5 - 1) / 2] × ({data[1].xu} - {data[1].xl}) =
              {data[1].d}
            </li>
            <li>
              <p className={cx("equation")}>
                {x_1} = {x_l} + d
              </p>
              = {data[1].xl} + {data[1].d} ={data[1].x1}
            </li>
            <li>
              <p className={cx("equation")}>
                {x_2} = {x_u} - d
              </p>
              = {data[1].xu}−{data[1].d} = {data[1].x2}
            </li>
          </ul>
        </div>

        <div className={cx("step-two")}>
          <h3>2. Check</h3>
          <ul className={cx("step-two-check")}>
            <li>
              {f_x1} = {data[1].f1}, which is &lt; {f_x2} ={data[1].f2} →{x_l}={" "}
              {x_2} and {x_opt} = {x_2} = {data[1].x2}
            </li>
            <li>
              if {f_x1} &lt; {f_x2}: {x_l} = {x_2} and {x_opt} = {x_2}
            </li>
          </ul>
        </div>

        <div className={cx("step-three")}>
          <h3>3. Error</h3>
          <ul className={cx("step-three-error")}>
            <li>
              <p className="equation">
                {e_a}% = (1 - R) × (interval / {x_opt}) × 100
              </p>
              = (1 - [(&#8730;5 - 1) / 2] × ({data[1].xu} - {data[1].xl})) × [(
              {data[1].xu} -{data[1].xl}) / {data[1].xopt}] × 100% ={data[1].ea}
              %
            </li>
          </ul>
        </div>

        <div className={cx("step-four")}>
          <h3>4. Table result</h3>
          <table className={cx("step-four-table")}>
            <tr className={cx("step-four-row")}>
              <th className={cx("step-four-table-title")}>Iteration</th>
              <th className={cx("step-four-table-title")}>{x_l}</th>
              <th className={cx("step-four-table-title")}>{x_2}</th>
              <th className={cx("step-four-table-title")}>{f_x2}</th>
              <th className={cx("step-four-table-title")}>{x_1}</th>
              <th className={cx("step-four-table-title")}>{f_x1}</th>
              <th className={cx("step-four-table-title")}>{x_u}</th>
              <th className={cx("step-four-table-title")}>d</th>
              <th className={cx("step-four-table-title")}>{e_a}%</th>
            </tr>
            {data.map((data) => (
              <tr className={cx("step-four-row")}>
                <td className={cx("step-four-table-data")}>{data.iterator}</td>
                <td className={cx("step-four-table-data")}>{data.xl}</td>
                <td className={cx("step-four-table-data")}>{data.x2}</td>
                <td className={cx("step-four-table-data")}>{data.f2}</td>
                <td className={cx("step-four-table-data")}>{data.x1}</td>
                <td className={cx("step-four-table-data")}>{data.f1}</td>
                <td className={cx("step-four-table-data")}>{data.xu}</td>
                <td className={cx("step-four-table-data")}>{data.d}</td>
                <td className={cx("step-four-table-data")}>{data.ea}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
