import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

const ThankyouPage = (props) =>{ 
    const name = props.location.state.data[4].message
    const age = props.location.state.data[6].message
    console.log(props)
        return (
            <div className='container'>
                <p className='heading'>Your name {name} aged {age} has been added to student system. You may now exit.</p>
            </div>
        )
        
}

export default ThankyouPage