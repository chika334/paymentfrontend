import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiWallet } from 'react-icons/bi'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DeductWallet } from '../_action/wallet'
import {clearErrors} from '../_action/errorAction'
import {Alert} from 'react-bootstrap'
import { BuyCreditFund } from '../_action/airtime'

export class Paid extends Component {
  constructor(props) {
    super(props)
    this.state = {
        deduct: null,
        msg: null,
        redirect: false,
    }
  }

  static propType = {
    wallet: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired,
    BuyCreditFund: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }
  
  componentDidUpdate(prevProps) {
    const {error, isAuthenticated} = this.props
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === 'PAYMENT_FAIL') {
        this.setState({msg: error.msg.msg})
      } else {
        this.setState({msg: null})
      }
      return
    }

    // if authenticated redirect
    if(isAuthenticated) {
      
    }
  }

  sendRedirect = () => {
    this.props.clearErrors()
  }
  
  transaction = () => {
    const name = `${this.props.location.state.detail.name}`
    const amount = `${this.props.location.state.detail.amount}`
    const service = `${this.props.location.state.detail.service}`
    const phone = `${this.props.location.state.detail.phone}`
    
    const AmountInt = parseInt(amount, 10)
    
    const value = {
        name,
        AmountInt,
        service,
        phone
    }

    this.props.BuyCreditFund(value)
  }
  
  PayWithWallet = () => {
    const amount = this.props.location.state.detail.amount
    const AmountInt = parseInt(amount, 10)
    
    this.transaction()
    
    // clear errors
    this.sendRedirect();

    const deductWallet = {
        AmountInt
    }
    this.props.DeductWallet(deductWallet);

    // Add paystack login here
  }

  PayWithCard =() => {
    let name = this.props.location.state.detail.name
    let amount = this.props.location.state.detail.amount
    const AmountInt = parseInt(amount, 10)
    this.props.history.push({
        pathname: '/card',
        search: '?query=abc',
        state: { detail: { name, AmountInt } }
    })
  }

  render() {
  const wallet = this.props.wallet.wallet.wallet
    return (
      <div className="container">
        <div className="cards new" style={{ borderRadius: '20px' }}>
            <div>
                <button style={{ backgroundColor: 'Transparent', backgroundRepeat: 'no-repeat', border: '1px solid grey', borderRadius: '3px' }} className="nav-link" href="/help"><Link style={{ textDecoration: 'none' }} to="/profile/wallet"><BiWallet />Wallet: ₦{wallet}</Link></button>
            </div>
            <div>
                <h3>Please Confirm your Transaction Details are as Follows:</h3>
                {this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null}
                <div className="cards bg-light" style={{  padding: '10px', borderRadius: '10px',  }}>
                <p style={{ width: '100%' }}>TRANSACTION INFO:</p>
                    <div className="new">
                        <p>Product: </p><p style={{  paddingLeft: '30px' }}>{this.props.location.state.detail.name}</p>
                    </div>
                    <div className="new">
                        <p>Phone: </p><p style={{  paddingLeft: '30px' }}>{this.props.location.state.detail.phone}</p>
                    </div>
                    <div className="new">
                        <p>Amount: </p><p style={{  paddingLeft: '30px' }}>{this.props.location.state.detail.amount}</p>
                    </div>
                    <div className="new">
                        <p>Email: </p><p style={{  paddingLeft: '20px' }}>{this.props.location.state.detail.email}</p>
                    </div>
                    <div className="new">
                        <p>Status: </p><p style={{  paddingLeft: '20px' }}>initiated</p>
                    </div>
                </div>
                <div className="new p-3">
                    <button className="btn btn-primary m-3" onClick={this.PayWithWallet} >Pay with wallet</button>
                    <button className="btn btn-primary m-3" onClick={this.PayWithCard}>Pay with card</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authUser.isAuthenticated,
    wallet: state.wallet,
    error: state.error
})

export default connect(mapStateToProps, { DeductWallet, clearErrors, BuyCreditFund })(Paid)
