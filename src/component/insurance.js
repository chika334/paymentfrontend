import React, { Component } from "react";
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import uuid from 'react-uuid'

class Insurance extends Component {
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
        data: []
      }
  };

   handleChange = e => {
		const {name, value} = e.target;
		this.setState({ [name]: value })
	}

   componentDidMount() {
    this.data(`${process.env.REACT_APP_IMAGE_INSURANCE}`)
    this.FetchPromise();
  }

  data = (url) => {
    axios.get(url)
        .then(json => {
            this.setState({ imageDatas: json.data })
        })
        .catch(response => console.log(response))
  }

  FetchPromise = () => {
     const first = fetch(process.env.REACT_APP_INSURANCE_FIRST).then(resp => resp.json());
     const second = fetch(process.env.REACT_APP_INSURANCE_SECOND).then(resp => resp.json());
     const third = fetch(process.env.REACT_APP_INSURANCE_THIRD).then(resp => resp.json());
     const fourth = fetch(process.env.REACT_APP_INSURANCE_FOURTH).then(resp => resp.json());

     Promise.all([first, second, third, fourth])
         .then(files => {
            this.setState({ ...this.state, data: files });
         })
         .catch(err => console.log(err))
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, amount } = this.state;
    const uuidvar = uuid()

    this.props.history.push({
        pathname: '/paid',
        search: '?query=abc',
        state: { detail: { name, email, phone, amount, uuidvar } }
    })
  }

  showModal = (data) => {
    this.setState({ show: true, image: data.image });
  };

  handleAirtimeModal = (props) => {
    console.log(props)
    this.setState({ show: true, image: props.image, type: props.type, name: props.name });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
  const { imageDatas, data } = this.state
  
   if (!data || !data.length) return  null;

  const options = {};
  const [first, second, third, fourth] = data;

  options["first"] = first.content.variations;
  options["second"] = second.content.variations;
  options["third"] = third.content.variations;
  options["fourth"] = fourth.content.variations;
  
  const firstData = first.content.variations.map((firstdata, index) => {
    return (
        <>
            <option key={index}>
                {firstdata.name}
            </option>
        </>
    )
  })

  const secondData = second.content.variations.map((seconddata, index) => {
    return (
        <>
            <option key={index}>
                {seconddata.name}
            </option>
        </>
    )
  })

  const thirdData = third.content.variations.map((thirddata, index) => {
    return (
        <>
            <option key={index}>
                {thirddata.name}
            </option>
        </>
    )
  })
  
  const fourthData = fourth.content.variations.map((fourthdata, index) => {
    return (
        <>
            <option key={index}>
                {fourthdata.name}
            </option>
        </>
    )
  })

  if (!imageDatas) return  null;
  const Imagedatas = imageDatas.content.map((imagedata, index) => {
    return (
            <div key={index}>
                <Card onClick={() => this.handleAirtimeModal({image: imagedata.image, type: imagedata.name, name: imagedata.name })} className="btn secondtabs" style={{ width: '12rem', height: '7rem' }}>
                    <Card.Body>
                        <img width="60" height="50" className="pr-2" src={imagedata.image} />
                        <Card.Text>
                          {imagedata.name}
                          <br />
                          <small>{imagedata.name} - Get instant top up</small>
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

			{this.state.type == "Third Party Motor Insurance - Universal Insurance" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {firstData}
                </select>
            </>)}

            {this.state.type == "Health Insurance - HMO  " && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {secondData}
                </select>
            </>)}

            {this.state.type == "Personal Accident Insurance" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {thirdData}
                </select>
            </>)}
            
            {this.state.type == "Home Cover Insurance" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {fourthData}
                </select>
            </>)}

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

export default withRouter(Insurance)
