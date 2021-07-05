import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class FormModal extends Component {
  submition = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target.title.value,
      content: e.target.content.value,
      id:this.props.id
    };
    this.props.sendData(obj)
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.open}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submition}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  defaultValue={this.props.title}
                  type="text"
                />
                <Form.Label>Content</Form.Label>
                <Form.Control
                  name="content"
                  defaultValue={this.props.content}
                  type="text"
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
