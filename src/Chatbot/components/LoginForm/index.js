import React from 'react'
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class Login extends Component{
    homepage = () => {
        const {history} = this.props
        history.replace("/home")
    }
    render(){
        return (
            <div className='container'>
                <h1 className='heading'>Enter Into Student Info System</h1>

                <button className='button1'onClick={this.homepage} >Enroll Now!</button>
                
            </div>
        )
    }
}

export default Login