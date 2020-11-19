import React, { Component } from "react";
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'react-uuid'
import { BuyCreditFund } from '../_action/airtime'

class Nepa extends Component {
  constructor(props) {
    super(props)
        this.state = {
        name: '',
        type: '',
        show: false,
        phone: '',
        amount: '',
        image: '',
        imageDatas: null,
        data: [],
        service: ''
      }
  };

   handleChange = e => {
		const {name, value} = e.target;
		this.setState({ [name]: value })
	}

   componentDidMount() {
    this.data(`${process.env.REACT_APP_IMAGE_ELECTRIC}`)
  }

  data = (url) => {
    axios.get(url)
        .then(json => {
            console.log(json.data)
            this.setState({ imageDatas: json.data })
        })
        .catch(response => console.log(response))
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, service, email, amount, phone, type } = this.state;
    const AmountInt = parseInt(amount, 10)
    const uuidvar = uuid()

    this.props.history.push({
        pathname: '/paid',
        search: '?query=abc',
        state: { detail: { name, email, phone, amount, uuidvar, service, type } }
    })
  }

  showModal = (data) => {
    this.setState({ show: true, image: data.image });
  };

  handleAirtimeModal = (props) => {
    this.setState({ show: true, image: props.image, type: props.type, name: props.name, service: props.serviceID });
  }

  hideModal = () => {
    this.setState({ show: false });
  };
  
  Submit = (e) => {
    console.log('Selected value:', e.target.value);
  }

  render() {
  const { imageDatas } = this.state
  
  if (!imageDatas) return  null;
  const Imagedatas = imageDatas.content.map((imagedata, index) => {
    return (
            <div key={index}>
                <Card onClick={() => this.handleAirtimeModal({image: imagedata.image, type: imagedata.name, name: imagedata.name, serviceID: imagedata.serviceID })} className="btn secondtabs" style={{ width: '12rem', height: '10rem' }}>
                    <Card.Body>
                        <img width="60" height="50" className="pr-2" src={imagedata.image} />
                        <Card.Text>
                          {imagedata.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
  })

    return (
      <div>
      <Modal show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img width="50" src={this.state.image} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
		<form className="forms" onSubmit={this.handleSubmit}>
		    
		    
	        <p>Metertype </p>
            <select onChange={this.Submit} style={{ width: '60%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                <option>Please Select metertype</option>
                <option value="Prepaid">Prepaid</option>
                <option value="Postpaid">Postpaid</option>
            </select>
            
            <div className="forms-form-group">
              <p>Meter Number</p>
              <input 
                type="tel" 
                id="quantity"
                value={this.state.phone}
                name="phone"
                placeholder="Enter Meter Number"
                onChange={this.handleChange}
              />
            </div>
		    
            <div className="forms-form-group">
              <p>Phone Number</p>
              <input 
                type="tel" 
                id="quantity"
                value={this.state.phone}
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
                type="tel" 
                className="password" 
                value={this.state.amount}
                name="amount"
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
        <div className="new">
            {Imagedatas}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { BuyCreditFund })(Nepa))
