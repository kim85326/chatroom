import React from "react";
import styles from "./Chatroom.module.css";
import Header from "../components/Header";
import ChatroomInfo from "../components/ChatroomInfo";
import ChatList from "../components/ChatList";
import ChatControl from "../components/ChatControl";

// role
// 1 => 毛毛蟲
// 2 => 螞蟻
// 3 => 怪獸
// 4 => 外星人
// 5 => 螃蟹

// status
// 0 => online
// 1 => idle
// 2 => do not disturb

class Chatroom extends React.Component {
    state = {
        name: "Aurora Hunters",
        currentUser: {
            id: 10,
            role: 5,
            name: "Meyer",
            status: 0,
        },
        users: [
            {
                id: 1,
                role: 3,
                name: "Jack",
                status: 0,
            },
            {
                id: 2,
                role: 4,
                name: "Chef",
                status: 1,
            },
            {
                id: 3,
                role: 4,
                name: "Foodie",
                status: 0,
            },
            {
                id: 4,
                role: 5,
                name: "Simmons",
                status: 1,
            },
            {
                id: 5,
                role: 1,
                name: "Linda",
                status: 0,
            },
            {
                id: 6,
                role: 1,
                name: "Barnett",
                status: 0,
            },
            {
                id: 7,
                role: 3,
                name: "J.T",
                status: 0,
            },
            {
                id: 8,
                role: 5,
                name: "Abby",
                status: 2,
            },
            {
                id: 9,
                role: 2,
                name: "Hulk",
                status: 0,
            },
        ],
        messages: [
            {
                id: 1,
                from: {
                    id: 3,
                    role: 4,
                    name: "Foodie",
                },
                time: "06:26 PM",
                content:
                    "Abby , Is it back to having a nightfall in Iceland already? I thought it was still in that 24 day light range? How cool!",
            },
            {
                id: 2,
                from: {
                    id: 4,
                    role: 5,
                    name: "Simmons",
                },
                time: "06:27 PM",
                content:
                    "I’ve got aurora! Just about visible to the eye. Mobile phone shot of the back of my camera.",
            },
            {
                id: 3,
                from: {
                    id: 7,
                    role: 3,
                    name: "J.T",
                },
                time: "06:29 PM",
                content: "Breathtaking 😃",
            },
            {
                id: 4,
                from: {
                    id: 5,
                    role: 1,
                    name: "Linda",
                    status: 0,
                },
                time: "06:30 PM",
                content: "😍😍😍😍😍 Amazing!",
            },
            {
                id: 5,
                from: {
                    id: 7,
                    role: 3,
                    name: "J.T",
                },
                time: "06:30 PM",
                content:
                    "Could you please tell me where was this picture taken ?",
            },
            {
                id: 6,
                from: {
                    id: 9,
                    role: 2,
                    name: "Hulk",
                },
                time: "06:30 PM",
                content: "Hey everyone",
            },
        ],
    };

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.sidebar}>
                    <ChatroomInfo
                        roomName={this.state.name}
                        currentUser={this.state.currentUser}
                        users={this.state.users}
                    />
                </div>
                <div className={styles.main}>
                    <div className={styles.chat_list}>
                        <ChatList messages={this.state.messages} />
                    </div>
                    <div className={styles.chat_control}>
                        <ChatControl />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chatroom;
