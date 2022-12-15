import React, { useEffect, useState } from "react";
import styles from "../../ODE/twoVariables.module.css";
import Navlink from "../../component/Navlink/Navlink";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SolutionHM from "./SolutionHM";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function HeunMethod() {
  const [inputData, setInputData] = useState(null);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [formula, setFormula] = useState([]);
  const [checkCondition, setCheckCondition] = useState(false);
  const [checkVari, setCheckVari] = useState("");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    const objInput = { ...inputData, [e.target.name]: value };
    setCheckCondition(true);
    setCheckVari(objInput.conditionalVariable);
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      try {
        await axios
          .post("http://localhost:5000/ODE/heunMethod", inputData)           //For Flask server
          .then((res) => {
            setFormula([
              res.data.formula,
              res.data.firtDeri,
              res.data.secondDeri,
            ]);
            setData(res.data.data);
            setStatus(true);
            setMessage(res.data.message);
          });
      } catch (error) {
        if (error.response.status === 400) {
          setMessage(error.response.data);
        } else if (error.response.status === 500) {
          setStatus(false);
          setMessage(error.response.data.message);
        }
      }
    };
    getTest();
  };

  return (
    <div className={cx("optimize-container")}>
      <Navlink
        link={{
          parent: location.state.parent,
          children: location.state.children,
        }}
      />
      <form className={cx("algorithm")}>
        <h1 className={cx("main-title")}>EULER'S METHOD</h1>
        <br />
        <div className={cx("types")}>
          <label className={cx("algorithm-type")}>
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="1"
              name="conditionalVariable"
              onChange={handleChange}
            />
            1 variable
          </label>
          <label className={cx("algorithm-type")}>
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="2"
              name="conditionalVariable"
              onChange={handleChange}
            />
            2 variables
          </label>
        </div>

        {checkCondition === true && checkVari === "2" ? (
          <>
            <div className={cx("function")}>
              <i className={cx("input-symbol")}>f(x)</i>
              <input
                placeholder="enter your function..."
                title=" correct format: x^5 - 5*x^4 + x^3- 6*x^2+7*x+10 "
                type="text"
                className={cx("algorithm-function")}
                name="equationInput"
                onChange={handleChange}
                required
              />
            </div>

            <div className={cx("variables")}>
              <i className={cx("input-symbol")}>
                x<sub>0</sub>
              </i>
              <input
                placeholder=""
                type="text"
                className={cx("algorithm-variable")}
                name="xi"
                onChange={handleChange}
              />
              <i className={cx("input-symbol")}>
                x<sub>final</sub>
              </i>
              <input
                placeholder=""
                type="text"
                className={cx("algorithm-variable")}
                name="xf"
                onChange={handleChange}
              />
              <i className={cx("input-symbol")}>
                h
              </i>
              <input
                placeholder=""
                type="text"
                className={cx("algorithm-variable")}
                name="h"
                onChange={handleChange}
              />
            </div>

            <div className={cx("error")}>
              <i className={cx("input-symbol")}>
                y<sub>0</sub>
              </i>
              <input
                placeholder=""
                type="text"
                className={cx("algorithm-error")}
                name="y"
                onChange={handleChange}
              />
            </div>

            <button className={cx("algorithm-submit")} onClick={handleSubmit}>
              SUBMIT
            </button>
            <br />
            <br />
            {message && (
              <div className={cx("error-call")}>
                <p>{message}</p>
              </div>
            )}

            {status === true ? <SolutionHM data={data} formula={formula} /> : null}
          </>
        ) : null}
      </form>
    </div>
  );
}
