import React, { Component, Suspense } from 'react'
import airtel from '../images/airtel.jpg'
import etisalat from '../images/etisalat.png'
import mtn from '../images/mtn.png'
import glo from '../images/glo.png'
import dstv from '../images/dstv.png'
import gotv from '../images/gotv.png'
import phcn from '../images/phcn.png'
import startimes from '../images/startimes.jpg'
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

const ListOfBouquet = [
    'Please Select bouquet',
    'DStv Padi N1,850',
    'DStv Yanga N2,565',
    'DStv Confam N4,615',
    'DStv Compact N7,900',
    'DStv Compact N18,400',
    'DStv Asia N6,200'
]

const ListOfData = [
    'Please Select Type',
    'Airtel Data Bundle - 50 Naira - 25GB - 1Day',
    'Airtel Data Bundle - 100 Naira - 75GB - 1Day',
    'Airtel Data Bundle - 200 Naira - 200GB - 3Days',
    'Airtel Data Bundle - 300 Naira - 350GB - 7Days',
    'Airtel Data Bundle - 20,000 Naira - 110GB - 30 Days',
    'Airtel Data Bundle - 500 Naira - 750GB - 14 Days',
    'Airtel Data Bundle - 1000 Naira - 1.5GB - 30 Days',
    'Airtel Data Bundle - 1500 Naira - 3GB - 30 Days',
    'Airtel Data Bundle - 10,000 Naira - 40GB - 30 Days',
    'Airtel Data Bundle - 15,000 Naira - 75GB - 30 Days'
]

const ListOfElectricity = [
    'Please Select Type',
    'Airtel Data Bundle - 50 Naira - 25GB - 1Day',
    'Airtel Data Bundle - 100 Naira - 75GB - 1Day',
    'Airtel Data Bundle - 200 Naira - 200GB - 3Days',
    'Airtel Data Bundle - 300 Naira - 350GB - 7Days',
    'Airtel Data Bundle - 20,000 Naira - 110GB - 30 Days',
    'Airtel Data Bundle - 500 Naira - 750GB - 14 Days',
    'Airtel Data Bundle - 1000 Naira - 1.5GB - 30 Days',
    'Airtel Data Bundle - 1500 Naira - 3GB - 30 Days',
    'Airtel Data Bundle - 10,000 Naira - 40GB - 30 Days',
    'Airtel Data Bundle - 15,000 Naira - 75GB - 30 Days'
]



export class Payment extends Component {
  state = {
    image: '',
    email: '',
    phone: '',
    number: '',
    show: false,
    MtnallUrl: null,
    AirtelallUrl: null,
    GloallUrl: null,
    EtisalatallUrl: null,
    SmileallUrl: null
  }

  FetchPromise = () => {
    const mtn_URL = fetch(process.env.REACT_APP_MTN_DATA)
    const airtel_URL = fetch(process.env.REACT_APP_AIRTEL_DATA)
    const glo_URL = fetch(process.env.REACT_APP_GLO_DATA)
    const etisalat_URL = fetch(process.env.REACT_APP_ETISALAT_DATA)
    const smile_URL = fetch(process.env.REACT_APP_SMILE_DATA)

    Promise.all([mtn_URL, airtel_URL, glo_URL, etisalat_URL, smile_URL])
        .then(files => {
            files.forEach(file => {
                this.process( file.json())
            })
            // files[0].json()
            // files[1].json()
        })
        .catch(err => {  })
    
     
  }
  
  process = (prom) => {
    prom.then(data => {
        console.log(data)
    })   
  }
  
  componentWillUnmount() {
    this.FetchPromise()
  }

  handleChange = e => {
		const {name, value} = e.target;
		let formErrors = {...this.state.formErrors};

		switch(name) {
      case "password":
				formErrors.phone = 
				value.length < 1 ? "required"
				: ""
				break;
			case "email":
				formErrors.email = emailRegex.test(value)
				? ""
				: "Invalid email address"
				break;
			case "password":
				formErrors.password = 
				value.length < 6 ? "minimum of 6 charcter required"
				: ""
				break;
			default:
				break;
		}
		this.setState({ formErrors, [name]: value })
	}
  
  handleAirtimeModal = (props) => {
    this.setState({ show: true, image: props.image, type: props.type });
    //console.log(this.state.type)
  }
  
  hideModal = () => {
    this.setState({ show: false });
  };

  Submit = (e) => {
    console.log('Selected value:', e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("good")
  }

  render() {
  console.log(this.state)
  const bouquet = ListOfBouquet.map((allBouquet, index) => {
    return (
        <option value={allBouquet} key={index}>{allBouquet}</option>
    )
  })
  
  const data = ListOfData.map((allData, index) => {
    return (
        <option value={allData} key={index}>{allData}</option>
    )
  })
  
  const electric = ListOfElectricity.map((allElectric, index) => {
    return (
        <option value={allElectric} key={index}>{allElectric}</option>
    )
  })
  
    return (
      <div>
        <div>
        <Modal style={{ minWidth: '30%' }} show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
           <img className="logoPayment" width="50" src={this.state.image} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
		<form className="forms container" onSubmit={this.handleSubmit}>
        {this.state.type == 'airtime' && ''}

        {this.state.type == 'data' && (<>
          <p>Data type: </p>
            <select className="dataDrop" onChange={this.Submit} style={{ width: '65%', marginBottom: '5%', padding: '5px' }} id="cars" name="cars">
              {data}
            </select>
        </>)}

        {this.state.type == 'elect' && (<>
          <p>Choose a Electricity: </p>
            <select onChange={this.Submit} style={{ width: '65%', marginBottom: '5%' }} id="cars" name="cars">
              {electric}
            </select>
        </>)}

        {this.state.type == 'tvsub' && (<>
          <p>Bouquet </p>
            <select onChange={this.Submit} style={{ width: '65%', marginBottom: '5%' }} id="cars" name="cars">
              {bouquet}
            </select>
        </>)}

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
        </div>
      	<div className="p-5">
      	<h3 className="pt-3"><b>Payment</b></h3>
      	<p>Select the service you want to make payment for</p>
      	<h4>Airtime Recharge</h4>
      	<div className="new">
      	<Card onClick={() => this.handleAirtimeModal({image:airtel, type: 'airtime'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
          <Card.Body>
            <img width="60" height="50" className="pr-2" src={airtel} />
            <Card.Text>
              Aitel Airtime VTU
              <small>Airtel airtime - Get instant top up</small>
            </Card.Text>
          </Card.Body>
        </Card>

       <Card onClick={() => this.handleAirtimeModal({image:etisalat, type: 'airtime'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
          <Card.Body>
            <img width="60" height="50" className="pr-2" src={etisalat} />
            <Card.Text>
              Aitel Airtime VTU
              <small>Airtel airtime - Get instant top up</small>
            </Card.Text>
          </Card.Body>
        </Card>
        
       <Card onClick={() => this.handleAirtimeModal({image:glo, type: 'airtime'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
          <Card.Body>
            <img width="60" height="50" className="pr-2" src={glo} />
            <Card.Text>
              Aitel Airtime VTU
              <small>Airtel airtime - Get instant top up</small>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card onClick={() => this.handleAirtimeModal({image:mtn, type: 'airtime'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
          <Card.Body>
           <img width="60" height="50" className="pr-2" src={mtn} />
            <Card.Text>
              Aitel Airtime VTU
              <small>Airtel airtime - Get instant top up</small>
            </Card.Text>
          </Card.Body>
        </Card>
      	</div>
      	</div>
      	
      	<div className="p-5">
      	    <h4>Data Services</h4>
          	<div className="new">
          	<Card onClick={() => this.handleAirtimeModal({image:airtel, type: 'data'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={airtel} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={() => this.handleAirtimeModal({image:etisalat, type: 'data'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={etisalat} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={() => this.handleAirtimeModal({image:glo, type: 'data'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={glo} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={() => this.handleAirtimeModal({image:mtn, type: 'data'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={mtn} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
      	</div>
      	
      	
      	<div className="p-5">
      	    <h4>TV Subscription</h4>
          	<div className="new">
          	<Card onClick={() => this.handleAirtimeModal({image:dstv, type: 'tvsub'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={dstv} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={() => this.handleAirtimeModal({image:gotv, type: 'tvsub'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={gotv} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={() => this.handleAirtimeModal({image:startimes, type: 'tvsub'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={startimes} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
         </div>
         
         
         <div className="p-5">
      	    <h4>Electricity bill</h4>
          	<div className="new">
          	<Card onClick={() => this.handleAirtimeModal({image:phcn, type: 'elect'})} className="btn secondtabs" style={{ width: '19rem', height: '7rem' }}>
              <Card.Body>
                <img width="60" height="50" className="pr-2" src={phcn} />
                <Card.Text>
                  Aitel Airtime VTU
                  <small>Airtel airtime - Get instant top up</small>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
      </div>
    )
  }
}

export default Payment
