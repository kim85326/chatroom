import React from "react";
import styles from "./Header.module.css";
import logoSrc from "../images/logo.svg";
import searchSrc from "../images/search.svg";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            {/* eslint-disable-next-line */}
            <a className={styles.logo} href="#">
                <img src={logoSrc} alt="" />
            </a>
            <div className={styles.search}>
                <img className={styles.search_icon} src={searchSrc} alt="" />
                <input className={styles.search_input} type="text" />
            </div>
        </div>
    );
};

export default Header;
