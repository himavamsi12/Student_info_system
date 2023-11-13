import React from 'react'

export default function CalenderBtn(props) {
    const initialAction = () => {
        props.actions.initialAction1();
    }

    return (
        <div>
        <div className='con'>
            <button className='cal' onClick={() => initialAction()}>4 MAY THU</button>
            <button className='cal' onClick={() => initialAction()}>5 MAY FRI</button>
            <button className='cal' onClick={() => initialAction()}>6 MAY SAT</button>
        </div >
        </div>
    )
}