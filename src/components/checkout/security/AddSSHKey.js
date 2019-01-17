import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'

export default class AddSSHKey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key_name: "",
      public_key: ""
    }
  }

  isChange = (event)=>{
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  render () {
    return (
      <Form id="registerKeypairForm" name="registerKeypairForm">
        <h4>Thêm mới SSH Key</h4>
        <label>Nhập tên</label>
        <Form.Input className="styled-input" name="key_name" type="text" onChange={(event)=>this.isChange(event)} />
        <label>PUBLIC SSH KEY</label>
        <textarea className="styled-input" name="public_key" defaultValue={""} onChange={(event)=>this.isChange(event)} />
        <div className="text-right">
          <Button primary onClick={(data)=>this.props.getNewSSHKey(this.state)}>Thêm SSH Key</Button>
        </div>
      </Form>
    )
  }
}
