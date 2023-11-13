import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage("Pick a slot!", {
            widget: "calender"
        })
        updateState(message)
    }

    const initialAction1 = () => {
        const message = createChatBotMessage("Pick a time slot!", {
            widget: "time"
        })
        updateState(message)
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Enter your Name")
        updateState(message, "age")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("Enter your Age")
        updateState(message, "final")
    }

    const finalResult = () => {
        const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {
            widget: "second"
        })
        updateState(message)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        initialAction1,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;