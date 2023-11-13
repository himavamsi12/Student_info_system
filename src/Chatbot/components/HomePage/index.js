import React from 'react'
import {Component} from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../../config'
import ActionProvider from '../../ActionProvider'
import MessageParser from '../../MessageParser'



const HomePage = () => {

    return (
        <div>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
        </div>
    )
}

export default HomePage