import React from "react";
import styles from "./ChatMessage.module.css";

const ChatMessage = (props) => {
    const imgSrc = require(`../images/avatar${props.message.from.role}.svg`);

    return (
        <div className={styles.wrapper}>
            <img src={imgSrc} alt="" className={styles.avatar} />
            <div className={styles.message}>
                <div className={styles.message_info}>
                    <div
                        className={`${styles.from_name} ${
                            styles[`role_${props.message.from.role}`]
                        }`}
                    >
                        {props.message.from.name}
                    </div>
                    <div className={styles.time}>{props.message.time}</div>
                </div>
                <div className={styles.content}>{props.message.content}</div>
            </div>
        </div>
    );
};

export default ChatMessage;
