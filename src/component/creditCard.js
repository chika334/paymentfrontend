import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import "../css/card.css"
import creditcard from '../images/creditcard.jpg'
import { BuyCreditFund } from '../_action/airtime'
import { BuyData } from '../_action/data'
import { payTvBill } from '../_action/TvsubAction'
import { payElectricBill, postPayElectricBill } from '../_action/electric'
import { connect } from 'react-redux'

const App = (props) => {
  const publicKey = process.env.REACT_APP_TEST_PAYSTACK
  const amount = props.location.state.detail.amount * 100
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  
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
    }
    
    console.log(value)

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
    
    //console.log(service)
    
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
    const select = props.location.state.detail.select
    //const amount = props.location.state.detail.amount
    
    console.log(name, amount)
    transaction()
    
    //const AmountInt = parseInt(amount, 10)
    
    /*if (name === "Third Party Motor Insurance - Universal Insurance" || name === "Health Insurance - HMO  " || name === "Personal Accident Insurance" || name === "Home Cover Insurance") {
      console.log("insurance")
      //sendDetails()
    } else if (name === "DSTV Subscription" || name === "Gotv Payment" || name === "Startimes Subscription") {
      TvSub()
    } else if (name === "Airtel Airtime VTU" || name === "MTN Airtime VTU" || name === "GLO Airtime VTU" || name === "9mobile Airtime VTU" || name === "9Mobile Airtime Pin") {
      transaction()
    } else if (name === "Airtel Data" || name === "MTN Data" || name === "GLO Data" || name === "9mobile Data" || name === "Smile Payment") {
      data()
        //console.log("Data")
    } else if ((name === "Ikeja Electric Payment - IKEDC" || name === "Eko Electric Payment - EKEDC" || name === "Abuja Electricity Distribution Company- AEDC" || name === "KEDCO - Kano Electric" || name === "PHED - Port Harcourt Electric" || name === "Jos Electric - JED" || name === "IBEDC - Ibadan Electricity Distribution Company") && select === "prepaid") {
      ElectricBill()
    } else if((name === "Ikeja Electric Payment - IKEDC" || name === "Eko Electric Payment - EKEDC" || name === "Abuja Electricity Distribution Company- AEDC" || name === "KEDCO - Kano Electric" || name === "PHED - Port Harcourt Electric" || name === "Jos Electric - JED" || name === "IBEDC - Ibadan Electricity Distribution Company") && select === "postpaid") {
        postPayElectricBill()
    }*/
  }
  
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      allData(),
     // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="App">
      <div className="container allnew">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src={creditcard}
            alt="may payment"
          />
          <div className="item-details">
            <p className="item-details__title">{props.location.state.detail.name}</p>
            <p className="item-details__amount">NGN {amount}</p>
          </div>
        </div>
        <div className="checkout">
           <div className="checkout-form">
             <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <PaystackButton {...componentProps} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {payElectricBill, payTvBill, postPayElectricBill, BuyCreditFund, BuyData})(App)
