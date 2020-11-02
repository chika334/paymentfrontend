import React, { Component } from "react";
import startimes from '../images/startimes.jpg'
import gotv from '../images/gotv.png'
import dstv from '../images/dstv.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

export default class Tvsub extends Component {
  state = {
    show: false,
    image: '',
    services: [
      {
        img: <img src={dstv} width="50" />,
        title: "DSTV",
      },
      {
        img: <img src={gotv} width="50" />,
        title: "GOTV",
      },
      {
        img: <img src={startimes} width="50" />,
        title: "Startimes",
      }
    ]
  };
  
  showModal = (item) => {
    this.setState({ show: true, image: item.img });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
    return (
      <section>
        <Modal show={this.state.show} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.state.image}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
			    <form className="forms" onSubmit={this.handleSubmit}>
                <div className="forms-form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    className="email" 
                    value={this.state.email}
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="forms-form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className="password" 
                    value={this.state.password}
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.handleChange}
                    />
                </div>
                <div className="but">
                  <button 
                    onSubmit={this.handleSubmit}
                    type="submit" 
                    className="submit">
                    Submit
                  </button>
                </div>
              </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.hideModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        <div className="service-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <button onClick={e => this.showModal(item)}>{item.img}</button>
                <h6 style={{ paddingTop: '10px'}}>{item.title}</h6>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
