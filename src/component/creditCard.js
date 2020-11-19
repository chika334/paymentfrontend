import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import "../css/card.css"
import creditcard from '../images/creditcard.jpg'

const CreditCard = (props) => {
  const publicKey = `${process.env.REACT_APP_PAYSTACK}`
  const amount = `${props.location.state.detail.AmountInt}`
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("")
      setName("")
      setPhone("")
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

  return (
    <div className="App">
      <div className="containers">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src={creditcard}
            alt="product"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
