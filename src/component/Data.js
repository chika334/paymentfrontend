import React, { Component } from "react";
import airtel from '../images/airtel.jpg'
import etisalat from '../images/etisalat.png'
import glo from '../images/glo.png'
import mtn from '../images/mtn.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'

export default class Data extends Component {
  constructor(props) {
    super(props)
        this.state = {
        show: false,
        image: '',
        data: null,
      }
  };
  
   componentDidMount() {
    this.data(`${process.env.REACT_APP_DATA}`)
  }
  
  data = (url) => {
    axios.get(url)
        .then(json => {
            this.setState({ data: json.data })
        })
        .catch(response => console.log(response))
  }
  
 
  
  showModal = (data) => {
    this.setState({ show: true, image: data.image });
  };
  
  hideModal = () => {
    this.setState({ show: false });
  };
  
  render() {
  const { data } = this.state
  if (!data) return  null;
  const datas = data.content.map((data, index) => {
    return (
          <article key={index} className="service ml-4">
            <button onClick={e => this.showModal(data)}><img width="50" src={data.image} /></button>
            <h6 style={{ paddingTop: '10px' }}>{data.name}</h6>
          </article>
        );
  })
    return (
      <section >
      <Modal show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img width="50" src={this.state.image} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
			<form className="forms" onSubmit={this.handleSubmit}>
            <div className="forms-form-group">
              <p>Phone Number</p>
              <input 
                type="number" 
                id="quantity" 
                name="phone"
                placeholder="Enter phone number"
                onChange={this.handleChange}
              />
            </div>

            <div className="forms-form-group">
              <p>Email Address</p>
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
              <p>Amount</p>
              <input 
                type="number" 
                className="password" 
                value={this.state.number}
                name="password"
                placeholder="Enter Amount"
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
      </Modal>
        <div className="news">
            {datas}
        </div>
      </section>
    );
  }
}
