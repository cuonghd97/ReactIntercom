import React, { Component } from 'react'
import { Modal, Button } from 'bootstrap-4-react'

export default class ModalSuccess extends Component {
  render () {
    return (
      <Modal className="in add-key-modal" fade id="confirm-dialog" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <Modal.Dialog>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title><span style={{color: 'green'}}><i className="glyphicon glyphicon-thumbs-up" /> Success!</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>Create keypair successful</Modal.Body>
            <Modal.Footer>
              <Button danger primary className="danger confirm" data-dismiss="modal">OK</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Dialog>
      </Modal>
    )
  }
}
