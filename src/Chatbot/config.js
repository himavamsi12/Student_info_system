import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import StartBtn from './components/StartBtn';
import StartSlow from './components/StartSlow';
import DipslayImage from './components/DipslayImage';
import CalenderBtn from './components/CalenderBtn'
import TimeBtn from './components/TimeBtn'
import React from 'react'


const config = {
    botName: "Student info system",
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
        widget: "startBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    },
    state: {
        checker: null,
        userData: {
            name: "",
            age: 0,
        },
        time:5,
    },
    widgets: [
        {
            widgetName: "calender",
            widgetFunc: (props) => <CalenderBtn {...props} />,
        },
        {
            widgetName: "time",
            widgetFunc: (props) => <TimeBtn {...props} />,
        },
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "second",
            widgetFunc: (props) => <StartSlow {...props}/>
                
        },
    ]
    
};

export default config;