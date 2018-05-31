import React from 'react';
import ReactDom from 'react-dom';
import { Button, Header, Icon, Modal, Input, Form } from 'semantic-ui-react'

class Signup extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
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

  render(){
    return (
      <Modal open={this.state.isOpen} 
      trigger={<Button onClick={this.open.bind(this)}>Signup</Button>} basic size='tiny'>
        <Header icon='archive' content='Create An Account' />
        <Modal.Content>
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input placeholder='First name'/>
              <Form.Input placeholder='Last name'/>
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input placeholder='Password'/>
              <Form.Input placeholder='Confirm Password'/>
            </Form.Group>
            <Form.Checkbox className='agreement' label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
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
