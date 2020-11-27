import React, { Component } from "react";
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import uuid from 'react-uuid'

class Tvsub extends Component {
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
    this.data(`${process.env.REACT_APP_IMAGE_TVSUB}`)
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
     const dstv = fetch(process.env.REACT_APP_DSTV).then(resp => resp.json());
     const gotv = fetch(process.env.REACT_APP_GOTV).then(resp => resp.json());
     const startimes = fetch(process.env.REACT_APP_STARTIMES).then(resp => resp.json());

     Promise.all([dstv, gotv, startimes])
         .then(files => {
            this.setState({ ...this.state, data: files });
         })
         .catch(err => console.log(err))
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, amount, service } = this.state;
    const uuidvar = uuid()

    this.props.history.push({
        pathname: '/paid',
        search: '?query=abc',
        state: { detail: { name, email, phone, amount, service } }
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

  render() {
  const { imageDatas, data } = this.state
  
   if (!data || !data.length) return  null;

  const options = {};
  const [dstv, gotv, startimes] = data;

  options["dstv"] = dstv.content.variations;
  options["gotv"] = gotv.content.variations;
  options["startimes"] = startimes.content.variations;
  
  const dstvData = dstv.content.variations.map((dstvdata, index) => {
    return (
        <>
            <option key={index}>
                {dstvdata.name}
            </option>
        </>
    )
  })

  const gotvData = gotv.content.variations.map((gotvdata, index) => {
    return (
        <>
            <option value={gotvdata.name} key={index}>
                {gotvdata.name}
            </option>
        </>
    )
  })

  const startimesData = startimes.content.variations.map((startimesdata, index) => {
    return (
        <>
            <option value={startimesdata.name} key={index}>
                {startimesdata.name}
            </option>
        </>
    )
  })

  if (!imageDatas) return  null;
  const Imagedatas = imageDatas.content.map((imagedata, index) => {
    return (
            <div key={index}>
                <Card onClick={() => this.handleAirtimeModal({image: imagedata.image, type: imagedata.name, name: imagedata.name, serviceID: imagedata.serviceID })} className="btn secondtabs" style={{ width: '12rem', height: '7rem' }}>
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

			{this.state.type == "DSTV Subscription" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {dstvData}
                </select>
            </>)}

            {this.state.type == "Gotv Payment" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {gotvData}
                </select>
            </>)}

            {this.state.type == "Startimes Subscription" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {startimesData}
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

export default withRouter(Tvsub)
