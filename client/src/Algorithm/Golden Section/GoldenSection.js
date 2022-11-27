import React from "react";
import "./GoldenSection.css";
import variables from "./Variables";

// ============== fake data ================ //

const fakeData = [
  {
    ite: 1,
    xl: 1,
    f_xl: 8,
    x2: 2.52786,
    f_x2: -95.43779,
    x1: 3.47214,
    f_x1: -218.23094,
    xu: 5,
    f_xu: 20,
    d: 2.47214,
    e_a: 60.4409,
  },
  {
    ite: 2,
    xl: 2.52786,
    f_xl: -95.43779,
    x2: 3.47214,
    f_x2: -218.23094,
    x1: 4.05573,
    f_x1: -249.08021,
    xu: 5,
    f_xu: 20,
    d: 1.52786,
    e_a: 27.1957,
  },
  {
    ite: 3,
    xl: 3.47214,
    f_xl: -218.23094,
    x2: 4.05573,
    f_x2: -249.08021,
    x1: 4.41641,
    f_x1: -211.98952,
    xu: 5,
    f_xu: 20,
    d: 0.94427,
    e_a: 13.2142,
  },
  {
    ite: 4,
    xl: 3.47214,
    f_xl: -218.23094,
    x2: 3.83282,
    f_x2: -246.89741,
    x1: 4.05573,
    f_x1: -249.08021,
    xu: 4.41641,
    f_xu: -211.98952,
    d: 0.58359,
    e_a: 9.4103,
  },
  {
    ite: 5,
    xl: 3.83282,
    f_xl: -246.89741,
    x2: 4.05573,
    f_x2: -249.08021,
    x1: 4.1935,
    f_x1: -241.8223,
    xu: 4.41641,
    f_xu: -211.98952,
    d: 0.36068,
    e_a: 5.3157,
  },

  {
    ite: 6,
    xl: 3.83282,
    f_xl: -246.89741,
    x2: 3.97058,
    f_x2: -250.06432,
    x1: 4.05573,
    f_x1: -249.08021,
    xu: 4.1935,
    f_xu: -241.8223,
    d: 0.22291,
    e_a: 3.3969,
  },

  {
    ite: 7,
    xl: 3.83282,
    f_xl: -246.89741,
    x2: 3.91796,
    f_x2: -249.50107,
    x1: 3.97058,
    f_x1: -250.06432,
    xu: 4.05573,
    f_xu: -249.08021,
    d: 0.13777,
    e_a: 2.1732,
  },

  {
    ite: 8,
    xl: 3.91796,
    f_xl: -249.50107,
    x2: 3.97058,
    f_x2: -250.06432,
    x1: 4.00311,
    f_x1: -249.97666,
    xu: 4.05573,
    f_xu: -249.08021,
    d: 0.08514,
    e_a: 1.3145,
  },
  {
    ite: 9,
    xl: "...",
    f_xl: "...",
    x2: "...",
    f_x2: "...",
    x1: "...",
    f_x1: "...",
    xu: "...",
    f_xu: "...",
    d: "...",
    e_a: "...",
  },

  {
    ite: 10,
    xl: "...",
    f_xl: "...",
    x2: "...",
    f_x2: "...",
    x1: "...",
    f_x1: "...",
    xu: "...",
    f_xu: "...",
    d: "...",
    e_a: "...",
  },
  {
    ite: 11,
    xl: "...",
    f_xl: "...",
    x2: "...",
    f_x2: "...",
    x1: "...",
    f_x1: "...",
    xu: "...",
    f_xu: "...",
    d: "...",
    e_a: "...",
  },
  {
    ite: 12,
    xl: "...",
    f_xl: "...",
    x2: "...",
    f_x2: "...",
    x1: "...",
    f_x1: "...",
    xu: "...",
    f_xu: "...",
    d: "...",
    e_a: "...",
  },
  {
    ite: 13,
    xl: "...",
    f_xl: "...",
    x2: "...",
    f_x2: "...",
    x1: "...",
    f_x1: "...",
    xu: "...",
    f_xu: "...",
    d: "...",
    e_a: "...",
  },
  {
    ite: 14,
    xl: 3.97533,
    f_xl: -250.07287,
    x2: 3.97826,
    f_x2: -250.07455,
    x1: 3.98007,
    f_x1: -250.07421,
    xu: 3.98301,
    f_xu: -250.07141,
    d: 0.00474,
    e_a: 0.0737,
  },
];

// ========================================= //

function GoldenSection() {
  const { f_x1, f_x2, x_l, x_u, x_opt, x_1, x_2, e_a, f_xl, f_xu } = variables;
  return (
    <div className="golden-container">
      <form className="algorithm">
        <h1 className="main-title">GOLDEN SECTION</h1>
        <br />
        <div className="function">
          <i className="text-inside">f(x)</i>
          <input
            placeholder="type your function..."
            type="text"
            className="algorithm-function"
          />
        </div>

        <div className="variables">
          <i className="text-inside">
            x<sub>u</sub>
          </i>
          <input placeholder="" type="text" className="algorithm-variable" />
          <i className="text-inside">{x_l}</i>
          <input placeholder="" type="text" className="algorithm-variable" />
        </div>

        <div className="error">
          <i className="text-inside">e</i>
          <input placeholder="" type="text" className="algorithm-error" />
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
        <button className="algorithm-submit">SUBMIT</button>
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
                <th>Ite</th>
                <th>{x_l}</th>
                <th>{f_xl}</th>
                <th>{x_2}</th>
                <th>{f_x2}</th>
                <th>{x_1}</th>
                <th>{f_x1}</th>
                <th>{x_u}</th>
                <th>{f_xu}</th>
                <th>d</th>
                <th>{e_a}</th>
              </tr>
              {fakeData.map((data) => (
                <tr>
                  <td>{data.ite}</td>
                  <td>{data.xl}</td>
                  <td>{data.f_xl}</td>
                  <td>{data.x2}</td>
                  <td>{data.f_x2}</td>
                  <td>{data.x1}</td>
                  <td>{data.f_x1}</td>
                  <td>{data.xu}</td>
                  <td>{data.f_xu}</td>
                  <td>{data.d}</td>
                  <td>{data.e_a}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldenSection;
