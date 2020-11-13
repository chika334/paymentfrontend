import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiWallet } from 'react-icons/bi'

export class Paid extends Component {
  constructor(props) {
    super(props)
    this.state = {
        walletAmount: `₦0.00`
    }
  }
  
  PayWithWallet = () => {
    alert("Good")
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="cards new" style={{ borderRadius: '20px' }}>
            <div>
                <button style={{ backgroundColor: 'Transparent', backgroundRepeat: 'no-repeat', border: '1px solid grey', borderRadius: '3px' }} className="nav-link" href="/help"><Link style={{ textDecoration: 'none' }} to="/profile/wallet"><BiWallet />Wallet: {this.state.walletAmount}</Link></button>
            </div>
            <div>
                <h3>Please Confirm your Transaction Details are as Follows:</h3>
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
                        <p>Transaction ID: </p><p style={{  paddingLeft: '20px' }}>{this.props.location.state.detail.randomID}</p>
                    </div>
                    <div className="new">
                        <p>Status: </p><p style={{  paddingLeft: '20px' }}>initiated</p>
                    </div>
                </div>
                <div className="new p-3">
                    <button className="btn btn-primary m-3" onClick={this.PayWithWallet} >Pay with wallet</button>
                    <button className="btn btn-primary m-3">Pay with card</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Paid
