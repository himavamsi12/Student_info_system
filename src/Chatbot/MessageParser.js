import React from 'react';
import ThankyouPage from './components/ThankyouPage/ThankyouPage'

const MessageParser = ({ children, actions }) => {
    console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        
        if (checker === "age") {
            actions.afterAgeMessage();
            children.props.state.userData.name = message;
        }
        if (checker === "final" && Number(message)) {
            actions.finalResult();
            children.props.state.userData.age = message
        }
        
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
