import React from "react";
import styles from "./User.module.css";

const User = (props) => {
    const imgSrc = require(`../images/avatar${props.user.role}.svg`);

    return (
        <div className={styles.user}>
            <img src={imgSrc} alt="" className={styles.avatar} />
            <div className={styles.name}>{props.user.name}</div>
            <div
                className={`${styles.status} ${
                    styles[`status_${props.user.status}`]
                }`}
            ></div>
        </div>
    );
};

export default User;
