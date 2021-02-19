/*import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { Prompt } from 'react-router'
import images from '../images/newImage.jpg';
import { Jumbotron, Button, Card } from 'react-bootstrap'
// import { connect } from 'react-redux'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { addFund } from '../_action/wallet'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import { PaystackButton } from "react-paystack"

export function Wallet (props) {
  const publicKey = `${process.env.REACT_APP_PAYSTACK}`
  const amount = `${props.location.state.detail.AmountInt}`
  const [values, setValues] = useState({
    wallet: `₦0.00`,
    //amount: "",
    email: ""
  })
  
  console.log(amount)

  const { wallet, email} = values
  
  const transaction = () => {
    const name = `${props.location.state.detail.name}`
    //const amount = `${props.location.state.detail.amount}`
    const service = `${props.location.state.detail.service}`
    const phone = `${props.location.state.detail.phone}`
    const select = `${props.location.state.detail.select}`
    
    //const AmountInt = parseInt(amount, 10)
    
    const value = {
      name,
      amount,
      service,
      phone,
      select
    }

    props.BuyCreditFund(value)
  }
  
  const data = () => {
    const name = `${props.location.state.detail.name}`
    //const amount = `${props.location.state.detail.amount}`
    const service = `${props.location.state.detail.service}`
    const phone = `${props.location.state.detail.phone}`
    const select = `${props.location.state.detail.select}`
    const variation = `${props.location.state.detail.variation}`
    
    //const AmountInt = parseInt(amount, 10)
    
    console.log(service)
    
    const value = {
      name,
      amount,
      service,
      phone,
      select,
      variation
    }

    props.BuyData(value)
  }
  
  const TvSub = () => {
    const name = `${props.location.state.detail.name}`
    const service = `${props.location.state.detail.service}`
    const smartcard = `${props.location.state.detail.smartcard}`
    //const amount = `${props.location.state.detail.amount}`
    const phone = `${props.location.state.detail.phone}`
    const select = `${props.location.state.detail.select}`
    
    //const AmountInt = parseInt(amount, 10)
    
    const value = {
      name,
      amount,
      service,
      phone,
      select,
      smartcard
    } 

    props.payTvBill(value)
  }
  
  const ElectricBill = () => {
    const name = `${props.location.state.detail.name}`
    //const amount = `${props.location.state.detail.amount}`
    const service = `${props.location.state.detail.service}`
    const phone = `${props.location.state.detail.phone}`
    const select = `${props.location.state.detail.select}`
    const meter = `${props.location.state.detail.meter}`
    
    //const AmountInt = parseInt(amount, 10)
    
    const value = {
      name,
      amount,
      service,
      phone,
      select,
      meter
    }
    
    props.payElectricBill(value)
  }
  
  const allData = () => {
    const name = props.location.state.detail.name
    const amount = props.location.state.detail.amount
    
    const AmountInt = parseInt(amount, 10)
    
    if (name === "Third Party Motor Insurance - Universal Insurance" || name === "Health Insurance - HMO  " || name === "Personal Accident Insurance" || name === "Home Cover Insurance") {
      this.sendDetails()
    } else if (name === "DSTV Subscription" || name === "Gotv Payment" || name === "Startimes Subscription") {
      this.TvSub()
    } else if (name === "Airtel Airtime VTU" || name === "MTN Airtime VTU" || name === "GLO Airtime VTU" || name === "9mobile Airtime VTU" || name === "9Mobile Airtime Pin") {
      this.transaction()
    } else if (name === "Airtel Data" || name === "MTN Data" || name === "GLO Data" || name === "9mobile Data" || name === "Smile Payment") {
      this.data()
        //console.log("Data")
    } else if (name === "Ikeja Electric Payment - IKEDC" || name === "Eko Electric Payment - EKEDC" || name === "Abuja Electricity Distribution Company- AEDC" || name === "KEDCO - Kano Electric" || name === "PHED - Port Harcourt Electric" || name === "Jos Electric - JED" || name === "IBEDC - Ibadan Electricity Distribution Company") {
      this.ElectricBill()
    }
 
    // clear errors
    this.sendRedirect();

    const deductWallet = {
      AmountInt
    }
    
  }
  
  const handleChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay with Paystack",
    onSuccess: () => allData(),
    onClose: () => alert("Having issues paying?? Please try again!!!!"),
  }

  useEffect(() => {
    if (props.shouldBlockNavigation) {
        window.onbeforeunload = () => true
      } else {
        window.onbeforeunload = undefined
      }
  })
  
  //console.log(props.location.state)

  // const addFund = (e) => {
  //   e.preventDefault()
  //   // const { amounts } = this.state
  //   const AmountInt = parseInt(amount, 10)
  //   const transactionID = uuid();
    
  //   // this.props.history.push({
  //   //   pathname: '/confirmWallet',
  //   //   search: '?query=abc',
  //   //   state: { detail: { AmountInt, transactionID } }
  //   // })
    
  //   // props.addFund(Amountwallet)
  // }
    return (
      <div>
        <Prompt
          when={props.shouldBlockNavigation}
          message='Leaving this page cancels all incomplete transactions, are you sure you want to leave?'
        />
        <Jumbotron className="container pt-3">
          <h1>Make Payments</h1>
          <hr />
          <div className="new">
            <Card>
            <Card.Body>                                                      
              <Card.Text>Make Faster Payments.</Card.Text>
              <div className="forms-form-group">
                <p>Email</p>
                <input 
                  type="email"
                  //value={email}
                  name="email"
                  style={{ width: '100%', marginBottom: 12 }} 
                  placeholder="Enter Email address"
                  onChange={handleChange}
                />
              </div>
              <div className="forms-form-group pt-4">
                <p>Amount: <label className="pl-3">₦{amount}</label></p>
              </div>
              <div style={{ marginTop: 12 }}>
                <PaystackButton className="paystack-button" {...componentProps} />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img width="100%" src={images} alt="Card image cap" />
          </Card>
          </div>
        </Jumbotron>
      </div>
    )
}

Wallet.prototype = {
  shouldBlockNavigation: PropTypes.bool.isRequired
}

export default Wallet*/
