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
          <div className="ui action left icon input"></div>
        </div>
      </div>
    )
  }
}

export default NavBar;