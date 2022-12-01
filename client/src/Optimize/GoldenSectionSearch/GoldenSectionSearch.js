import React, { useEffect, useState } from "react";
import styles from "../../Optimize/twoVariables.module.css";
import Navlink from "../../component/Navlink/Navlink";
import SolutionGSS from "./SolutionGSS";
import { useLocation } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function GoldenSectionSearch() {
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
          .post("http://localhost:4000/optimize/goldenSectionSearch", inputData)
          .then((res) => {
            setData(res.data.data);
            setStatus(true);
            setMessage(res.data.message);
          });
      } catch (error) {
        if (error.response.status === 400) {
          setMessage(error.response.data);
        } else if (error.response.status === 500) {
          setMessage(error.response.data.message);
        }
      }
    };
    getTest();
  };

  console.log(status);

  return (
    <div className={cx("optimize-container")}>
      <Navlink
        link={{
          parent: location.state.parent,
          children: location.state.children,
        }}
      />
      <form className={cx("algorithm")}>
        <h1 className={cx("main-title")}>GOLDEN SECTION SEARCH</h1>
        <br />
        <div className={cx("function")}>
          <i className={cx("input-symbol")}>f(x)</i>
          <input
            placeholder="enter your function..."
            title=" correct format: x^5 - 5*x^4 + x^3- 6*x^2+7*x+10 "
            type="text"
            className={cx("algorithm-function")}
            name="equation"
            onChange={handleChange}
            required
          />
        </div>

        <div className={cx("variables")}>
          <i className={cx("input-symbol")}>
            x<sub>l</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className={cx("algorithm-variable")}
            name="xl"
            onChange={handleChange}
          />
          <i className={cx("input-symbol")}>
            x<sub>u</sub>
          </i>
          <input
            placeholder=""
            type="text"
            className={cx("algorithm-variable")}
            name="xu"
            onChange={handleChange}
          />
        </div>

        <div className={cx("error")}>
          <i className={cx("input-symbol")}>
            e<sub>s</sub>%
          </i>
          <input
            placeholder=""
            type="text"
            className={cx("algorithm-error")}
            name="es"
            onChange={handleChange}
          />
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
      {data.length === 0 ? <></> : <SolutionGSS data={data} />}
    </div>
  );
}
