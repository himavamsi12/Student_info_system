import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './App.css'
import {Component} from 'react'
import Login from './Chatbot/components/LoginForm';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './Chatbot/components/HomePage'
import ThankyouPage from './Chatbot/components/ThankyouPage/ThankyouPage'


class App extends Component {
  render (){
    
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path ="/home" component={HomePage}/>
      <Route exact path = "/thankyou" component={ThankyouPage}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    
  )
}
}

export default App;
