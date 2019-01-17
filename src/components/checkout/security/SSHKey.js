import React, { Component } from 'react'
import { Col, Row, Button } from 'bootstrap-4-react'
import AddSSHKey from './AddSSHKey';

export default class SSHKey extends Component {

  changeButton = ()=>{
    if (this.props.isShowFormSSH === true) {
      return (
        <Button success onClick={()=>this.props.changeShowFormSSH()}>Hủy thêm SSHKey</Button>
      )
    } else {
      return (
        <Button success onClick={()=>this.props.changeShowFormSSH()}>Thêm SSHKey</Button>
      )
    }
  }

  showForm = ()=>{
    if (this.props.isShowFormSSH === true) {
      return (
        <AddSSHKey
        getNewSSHKey={(data)=>this.props.getNewSSHKey(data)}
        />
      )
    } else {
      return
    }
  }

  render () {
    return (
      <Col col="col-xs-12 lg-6">
        <h3>SSH Keys</h3>
        <div className="box white margin-bottom" id="add-an-ssh">
          <div id="keypairs">
            <p><span className="square-icon" /> Chưa có SSH Key nào</p>
            <p><span className="square-icon" /> Chọn Tạo SSH Key mới để tự động tạo một cặp khóa private key và public key</p>
            <p><span className="square-icon" /> Chọn Thêm SSH Key để thêm cặp khóa private key và public key của chính bạn</p>
          </div>
          <Row>
            <Col col="col-xs-12 sm-6" className="text-left">
              <Button primary>Tạo SSH Key mới</Button>
            </Col>
            <Col col="col-xs-12 col-sm-6" className="text-right" id="show-container">
            {
              this.changeButton()
            }
            </Col>
            {
              this.showForm()
            }
          </Row>
        </div>
      </Col>
    )
  }
}
