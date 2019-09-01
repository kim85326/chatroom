import React from "react";
import styles from "./ChatControl.module.css";
import emojiSrc from "../images/emoji.svg";
import photoSrc from "../images/photo.svg";
import fileSrc from "../images/file.svg";

const ChatControl = (props) => {
    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.input} />
            <button className={styles.media_button}>
                <img src={emojiSrc} alt="" />
            </button>
            <button className={styles.media_button}>
                <img src={photoSrc} alt="" />
            </button>
            <button className={styles.media_button}>
                <img src={fileSrc} alt="" />
            </button>
        </div>
    );
};

export default ChatControl;
