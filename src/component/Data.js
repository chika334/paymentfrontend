import React, { Component } from "react";
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import uuid from 'react-uuid'

class Data extends Component {
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
    this.data(`${process.env.REACT_APP_DATA}`)
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
     const mtn_URL = fetch(process.env.REACT_APP_MTN_DATA).then(resp => resp.json());
     const airtel_URL = fetch(process.env.REACT_APP_AIRTEL_DATA).then(resp => resp.json());
     const glo_URL = fetch(process.env.REACT_APP_GLO_DATA).then(resp => resp.json());
     const etisalat_URL = fetch(process.env.REACT_APP_ETISALAT_DATA).then(resp => resp.json());
     const smile_URL = fetch(process.env.REACT_APP_SMILE_DATA).then(resp => resp.json());

     Promise.all([mtn_URL, airtel_URL, glo_URL, etisalat_URL, smile_URL])
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
    this.setState({ show: true, image: props.image, type: props.type, name: props.name });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
  const { imageDatas, data } = this.state
  
   if (!data || !data.length) return  null;

  const options = {};
  const [mtn, airtel, glo, etisalat, smile] = data;

  options["mtn"] = mtn.content.variations;
  options["airtel"] = airtel.content.variations;
  options["glo"] = glo.content.variations;
  options["etisalat"] = etisalat.content.variations;
  options["smile"] = smile.content.variations;

  const mtnData = mtn.content.variations.map((mtndata, index) => {
    return (
        <>
            <option key={index}>
                {mtndata.name}
            </option>
        </>
    )
  })

  const airtelData = airtel.content.variations.map((airteldata, index) => {
    return (
        <>
            <option key={index}>
                {airteldata.name}
            </option>
        </>
    )
  })

  const gloData = glo.content.variations.map((glodata, index) => {
    return (
        <>
            <option key={index}>
                {glodata.name}
            </option>
        </>
    )
  })

  const etisalatData = etisalat.content.variations.map((etisalatdata, index) => {
    return (
        <>
            <option key={index}>
                {etisalatdata.name}
            </option>
        </>
    )
  })

  const smileData = smile.content.variations.map((smiledata, index) => {
    return (
        <>
            <option key={index}>
                {smiledata.name}
            </option>
        </>
    )
  })

  if (!imageDatas) return  null;
  const Imagedatas = imageDatas.content.map((imagedata, index) => {
    return (
            <div key={index}>
                <Card onClick={() => this.handleAirtimeModal({image: imagedata.image, type: imagedata.name, name: imagedata.name })} className="btn secondtabs" style={{ width: '11rem', height: '7rem' }}>
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

			{this.state.type == "MTN Data" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {mtnData}
                </select>
            </>)}

            {this.state.type == "Airtel Data" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {airtelData}
                </select>
            </>)}

            {this.state.type == "GLO Data" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {gloData}
                </select>
            </>)}

            {this.state.type === "9mobile Data" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {etisalatData}
                </select>
            </>)}

            {this.state.type == "Smile Payment" && (<>
              <p>Data type: </p>
                <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
                 {smileData}
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

export default withRouter(Data)
