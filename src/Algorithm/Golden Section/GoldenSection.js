import React from "react";
import "./GoldenSection.css";

function GoldenSection() {
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
          <i className="text-inside">
            x<sub>l</sub>
          </i>
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
                d = R × (x<sub>u</sub> - x<sub>l</sub>)
              </li>
              <li>
                x<sub>1</sub> = x<sub>l</sub> + d
              </li>
              <li>
                x<sub>2</sub> = x<sub>u</sub> - d
              </li>
            </ul>
          </div>

          <div className="step step-two">
            <h3>2. Check</h3>
            <ul className="substep step-two-check">
              <li>
                if f(x<sub>1</sub>) &gt; f(x<sub>2</sub>): x<sub>l</sub> = x
                <sub>2</sub> and x<sub>opt</sub> = x<sub>2</sub>
              </li>
              <li>
                if f(x<sub>1</sub>) &lt; f(x<sub>2</sub>): x<sub>l</sub> = x
                <sub>2</sub> and x<sub>opt</sub> = x<sub>2</sub>
              </li>
            </ul>
          </div>

          <div className="step step-three">
            <h3>3. Error</h3>
            <ul className="substep step-three-error">
              <li>
                e<sub>a</sub> = (1 - R) × (interval / x<sub>opt</sub>) × 100
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldenSection;
