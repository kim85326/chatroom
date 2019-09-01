import React from "react";
import styles from "./ChatList.module.css";
import ChatMessage from "./ChatMessage";

const ChatList = (props) => {
    return (
        <div className={styles.list}>
            {props.messages.map((message) => {
                return <ChatMessage key={message.id} message={message} />;
            })}
        </div>
    );
};

export default ChatList;
