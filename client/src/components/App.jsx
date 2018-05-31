import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './NavBar.jsx';
import {signup, login} from '../services/userService.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginAs: null
    }
  }

  createAccount(username){
    signup(username, (response)=>{
      console.log(`this is from server ${response}`)
      this.setState({
        loginAs: fetchUser.username
      })
    })
  }

  render() {
    return (
      <div>
      <NavBar create={this.createAccount.bind(this)}/>
      <div>Hello React</div>
      </div>
    )
  }
}

export default App;