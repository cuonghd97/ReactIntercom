import React, { Component } from 'react'
import { Form } from 'bootstrap-4-react'

export default class FirstName extends Component {

  constructor(props) {
    super(props);
    this.state={
      firstname: ""
    }
  }


  isChange = (e)=>{
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate() {
    this.props.getData(this.state.firstname)
  }

  render () {
    return (
      <Form.Group>
        <Form.Input name="firstname" type="text" placeholder="Họ (*)" onChange={(e)=>this.isChange(e)} defaultValue={this.props.data}/>
      </Form.Group>
    )
  }
}
