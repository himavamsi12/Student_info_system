import React from 'react'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'


class StartSlow extends Component {
  constructor(props) {
    super(props)
    this.state = {
        time:5
    }
    this.data = props.state.messages
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)

  }
  tick = () => {
    this.setState((prevState) => ({
        time:prevState.time - 1
    }))
  }
  render() {
    const { time } = this.state
    
    const message = this.data
    if (time == 0){
       this.componentWillUnmount()
       return <Redirect to={{pathname:"/thankyou", state:{data:message}}}/>
    }
    return (
        <div className="">
            <p className='paragraph'><span>{time} ..</span></p>
        </div>
    )
  }
}

export default StartSlow
