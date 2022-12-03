import React, { useEffect, useState } from "react";
import styles from "../../Optimize/twoVariables.module.css";
import Navlink from "../../component/Navlink/Navlink";
import SolutionPI from "./SolutionPI";
import { useLocation } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ParabolicInterpolation() {
  const [inputData, setInputData] = useState(null);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData({ ...inputData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getTest = async () => {
      try {
        await axios
          .post(
            "http://localhost:4000/optimize/parabolicInterpolation",
            inputData
          )
          .then((res) => {
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
        <h1 className={cx("main-title")}>PARABOLIC INTERPOLATION</h1>
        <br />
        <div className={cx("function")}>
          <i className={cx("input-symbol")}>f(x)</i>
          <input
            placeholder="enter your function..."
            title=" correct format: x^5 - 5*x^4 + x^3 - 6*x^2 + 7*x + 10"
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
            name="x0"
            onChange={handleChange}
          />
          <i className={cx("input-symbol")}>
            x<sub>1</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className={cx("algorithm-variable")}
            name="x1"
            onChange={handleChange}
          />
          <i className={cx("input-symbol")}>
            x<sub>2</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className={cx("algorithm-variable")}
            name="x2"
            onChange={handleChange}
          />
        </div>

        <div className={cx("variables")}>

        </div>

        <div className={cx("types")}>
          <label className={cx("algorithm-type")}>
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="minimum"
              name="type"
              onChange={handleChange}
            />
            Minimum
          </label>
          <label className={cx("algorithm-type")}>
            <input
              style={{ boxShadow: "none" }}
              type="radio"
              value="maximum"
              name="type"
              onChange={handleChange}
            />
            Maximum
          </label>
        </div>

        <button className={cx("algorithm-submit")} onClick={handleSubmit}>
          SUBMIT
        </button>
        {message && (
          <div className={cx("error-call")}>
            <p>{message}</p>
          </div>
        )}
      </form>
      {status === true ? <SolutionPI data={data} /> : null}
    </div>
  );
}
