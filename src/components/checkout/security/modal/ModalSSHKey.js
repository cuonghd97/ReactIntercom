import React, { Component } from 'react'
import { Modal, Button } from 'bootstrap-4-react'

export default class ModalSSHKey extends Component {
  render () {
    return (
      <Modal fade className="in add-key-modal" id="confirm-dialog" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <Modal.Dialog className="form">
          <Modal.Content>
            <Modal.Header>
              <h4 className="modal-title"><span style={{color: 'red', fontWeight: 'bold'}}>Backup this Private key to your local!</span></h4>
            </Modal.Header>
            <Modal.Body className="form-group">
              <div className="modal-description">-----BEGIN RSA PRIVATE KEY-----<br />In ra SSH Key ở đây</div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="cancel" data-dismiss="modal">Cancel</Button>
              <Button danger primary className="danger confirm" data-dismiss="modal">OK</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    )
  }
}
