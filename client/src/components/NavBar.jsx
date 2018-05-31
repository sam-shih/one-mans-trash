import React from 'react';
import ReactDom from 'react-dom';
import Signup from './Signup.jsx';
import {Button} from 'semantic-ui-react';
// import Login from './Login.jsx';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ui menu">
        <div className="item">
          <div className="ui action left icon input">
            <i className="search icon"></i>
            <input type="type" placeholder="Search"/>
            <button className="ui button">Submit</button>
          </div>
        </div>
        <div className="right menu">
          <div className="item ui">
            <Button.Group>
              <Button>Log in</Button>
              <Button.Or/>
              <Signup/> 
            </Button.Group>
          </div>
          <div className="item">
            <i className="bars icon"></i>
          </div>        
        </div>
      </div>
    )
  }
}

export default NavBar;