import React from 'react';
import ReactDom from 'react-dom';
import { Button, Header, Icon, Modal, Input, Form} from 'semantic-ui-react'
import $ from 'jquery';

class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      account: {
        username: '',
        password: ''
      },
      isOpen: false
    }
  }

  open(){
    this.setState({
      isOpen:true
    })
  }

  close(){
    this.setState({
      isOpen:false
    })
  }

  handleChange(key, event){
    const account = this.state.account;
    account[key] = event.target.value;
    this.setState({account: account});
  }

  submit(){
    this.props.login(this.state.account);
    this.close();
  }

  render(){
    return (
      <Modal className="login-modal" open={this.state.isOpen} 
      trigger={<Button onClick={this.open.bind(this)}>Log In</Button>} basic size='tiny'>
        <Header icon='user' content='Login' />
        <Modal.Content>
          <Form>
            <Form.Group unstackable widths={1}>
              <Form.Input onChange={this.handleChange.bind(this, 'username')} 
              value={this.state.account.username} placeholder='Username' required/>            
            </Form.Group>
            <Form.Group widths={1}>
              <Form.Input type='password' onChange={this.handleChange.bind(this, 'password')}
              value={this.state.account.password} placeholder='Password' required/>
            </Form.Group>
              <Button type="button" onClick={this.close.bind(this)} basic color='red' inverted>
                <Icon name='remove'/>Cancel
              </Button>
              <Button type="button" onClick={this.submit.bind(this)} color='blue' inverted type='submit'>Log In</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
export default Login
