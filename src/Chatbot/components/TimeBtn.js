import React from 'react'

export default function TimeBtn(props) {

    const initialAction = () => {
        props.actions.afterNameMessage();
    }

    return (
        <div>
        <p>MORNING</p>
        <div className='con'>
            <button className='cal1' onClick={() => initialAction()}>09.00 AM</button>
            <button className='cal1' onClick={() => initialAction()}>10.00 AM</button>
            <button className='cal1' onClick={() => initialAction()}>11.00 AM</button>
            <button className='cal1' onClick={() => initialAction()}>12.00 AM</button>
        </div >
        <p>NOON</p>
        <div className='con'>
            <button className='cal1' onClick={() => initialAction()}>02.00 PM</button>
            <button className='cal1' onClick={() => initialAction()}>03.00 PM</button>
            <button className='cal1' onClick={() => initialAction()}>04.00 PM</button>
            <button className='cal1' onClick={() => initialAction()}>05.00 PM</button>
        </div >
        </div>
    )
}