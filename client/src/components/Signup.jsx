import React from 'react';
import ReactDom from 'react-dom';
import { Button, Header, Icon, Modal, Input, Form } from 'semantic-ui-react'
import $ from 'jquery';

class Signup extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      account: {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        confirmedPw: ''
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
    console.log(this.state.account)
  }

  render(){
    return (
      <Modal open={this.state.isOpen} 
      trigger={<Button onClick={this.open.bind(this)}>Signup</Button>} basic size='tiny'>
        <Header icon='archive' content='Create An Account' />
        <Modal.Content>
          <Form>
            <Form.Group unstackable widths={3}>
              <Form.Input onChange={this.handleChange.bind(this, 'username')} 
              value={this.state.account.username} placeholder='Username'/>            
              <Form.Input onChange={this.handleChange.bind(this, "firstname")} 
              value={this.state.account.firstname} placeholder='First name'/>
              <Form.Input id="lastName" placeholder='Last name'/>
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input id="pw" placeholder='Password'/>
              <Form.Input id="confirmPw" placeholder='Confirm Password'/>
            </Form.Group>
            <Form.Checkbox className='agreement' label='I agree to the Terms and Conditions' />
            <Button onClick={this.submit.bind(this)} type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close.bind(this)} basic color='red' inverted>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
export default Signup
