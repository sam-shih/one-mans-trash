import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div>Hello React</div>
      </div>
    )
  }
}

export default App;