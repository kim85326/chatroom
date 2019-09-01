import React from "react";
import styles from "./ChatroomInfo.module.css";
import logoutSrc from "../images/logout.svg";
import User from "../components/User";

const ChatroomInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.room_info}>
                <div className={styles.room_name}>{props.roomName}</div>
                {/* eslint-disable-next-line */}
                <a className={styles.logout} href="#">
                    <img src={logoutSrc} alt="" />
                </a>
            </div>
            <div>
                <User user={props.currentUser} />
                <div className={styles.hr}></div>
                {props.users.map((user) => {
                    return <User user={user} key={user.id} />;
                })}
            </div>
        </div>
    );
};

export default ChatroomInfo;
