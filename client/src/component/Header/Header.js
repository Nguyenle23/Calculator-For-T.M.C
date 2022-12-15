import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-brand")}>
        <a href="/">TMC</a>
      </div>
      <div className={cx("header-search")}>Search here...</div>
    </div>
  );
}