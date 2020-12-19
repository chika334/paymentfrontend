import React, { useState } from 'react'
import { useSelector, connect } from 'react-redux'
import images from '../images/newImage.jpg';
import { Jumbotron, Button, Card } from 'react-bootstrap'
// import { connect } from 'react-redux'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { addFund } from '../_action/wallet'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import { PaystackButton } from "react-paystack"

export function Wallet (props) {
  const isAuthenticated = useSelector(state => state.authUser.isAuthenticated)
  const publicKey = `${process.env.REACT_APP_PAYSTACK}`
  const [values, setValues] = useState({
    wallet: `₦0.00`,
    amount: "",
    email: ""
  })

  const { wallet, amount, email} = values
  
  const handleChange = name => (e) => {
    const { value } = e.target
    setValues({ ...values, [name]: value })
  }

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay with Paystack",
    onSuccess: () => {

      // add to wallet
      //props.addFund(amount)
    },
    onClose: () => alert("Please Wait! You need fund your account!!!!"),
  }

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
  
  if(isAuthenticated === false) return <Redirect to="/login" /> 
    return (
      <div>
        <Jumbotron className="container pt-5">
          <h1>Make Payments</h1>
          <hr />
          <div className="new">
            <Card>
            <Card.Body>                                                      
              {/* <Card.Text>Credit your wallet now, and spend from it later. No Need to enter card details everytime you want to make a Payment. Make Faster Payments.</Card.Text> */}
              <Card.Text>Make Faster Payments.</Card.Text>
              <div className="forms-form-group">
                <p>Email</p>
                <input 
                  type="email"
                  value={email}
                  style={{ width: '100%', marginBottom: 12 }} 
                  placeholder="Enter Email address"
                  onChange={handleChange('email')}
                />
              </div>
              <div className="forms-form-group">
                <p>Amount</p>
                <input 
                  type="tel"
                  value={amount}
                  style={{ width: '100%', marginBottom: 12 }} 
                  placeholder="Enter Amount (NGN)"
                  onChange={handleChange('amount')}
                />
              </div>
              <div style={{ marginTop: 12 }}>
                {/* <Button onClick={addFund}>Pay with wallet</Button> */}
                <PaystackButton className="paystack-button" {...componentProps} />
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img width="100%" src={images} alt="Card image cap" />
          </Card>
          </div>
          <div style={{ marginBottom: 70 }} />
            <hr />
          <p style={{ color: 'red', marginBottom: 50  }}>Please note that loading your wallet through card as an agent attracts a card processing fee of 1.5%. To avoid paying this charge, please load your wallet through bank deposit.</p>
          <Link style={{ textDecoration: 'none' }} to="#">Please click here to get information on how to load your wallet.</Link>
        </Jumbotron>
      </div>
    )
}

Wallet.prototype = {
  addFund: PropTypes.func.isRequired
}

export default Wallet