import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("header-brand")}>
        <span>Something . . .</span>
      </div>
      <div className={cx("header-search")}>Search here...</div>
    </div>
  );
}

export default Header;
