import React from 'react';
import ReactDom from 'react-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="ui menu">
        <div className="item">
          <div className="ui action left icon input">
            <i class="search icon"></i>
            <input type="type" placeholder="Search"/>
            <button className="ui button">Submit</button>
          </div>
        </div>
        <div className="right menu">
          <div className="item ui"><a class="ui button">Log in</a></div>
          <div className="item ui"><a class="ui button">Sign Up</a></div>
          <div className="item">
            <i class="bars icon"></i>
          </div>        
        </div>
      </div>
    )
  }
}

export default NavBar;