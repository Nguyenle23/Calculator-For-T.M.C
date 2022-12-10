import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { algorithmData } from "../../Data/algorithmData";
import styles from "./Home.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home() {
  const navigator = useNavigate();
  const [open, setOpen] = useState({ status: false, id: -1 });

  return (
    <div className={cx("home-container")}>
      <h2 className={cx("home-title")}>
        Online Theoretical Models in Computing Tools
      </h2>
      <table className={cx("table-section")}>
        {algorithmData.map((section, index) => (
          <>
            <tr
              key={index}
              onClick={() => {
                setOpen({ status: !open.status, id: index });
              }}
              className={cx("table-section-row-container")}
            >
              <th className={cx("table-section-row")}>
                <ul>
                  <li>{section.sectName}</li>
                </ul>
              </th>
            </tr>
            {index === open.id &&
              section.navList.map((nav, index) => (
                <tr className={cx("table-section-subrow-container")}>
                  <th className={cx("table-section-subrow")}>
                    <ul className={cx("nav-list")}>
                      <li
                        onClick={() =>
                          navigator(`/${nav.navPath}`, {
                            state: {
                              parent: section.sectName,
                              children: nav.navName,
                            },
                          })
                        }
                        className={cx("home-nav")}
                      >
                        {nav.navName}
                      </li>
                    </ul>
                  </th>
                </tr>
              ))}
          </>
        ))}
      </table>
    </div>
  );
}