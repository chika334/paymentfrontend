import React, { Component } from 'react'
import { connect } from 'react-redux'
import { kycandbvn } from '../_action/kyc'
import PropTypes from 'prop-types'
import BusinessInfo from './BusinnessInfo'
import {Alert} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'
import moment from "moment";
import wallet from '../images/wallet.jpg';
import { Jumbotron, Button, Card } from 'react-bootstrap'

export class walletTran extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id: '',
        firstname: '',
        middlename: '',
        lastname: '',
        gender: '',
        birthday: '',
        bvn: '',
        bvnphone: '',
        msg: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { id, firstname, middlename, lastname, birthday, bvn, bvnphone } = this.state;
    const details = { id, firstname, middlename, lastname, birthday, bvn, bvnphone }
    //console.log(this.state)
    this.props.kycandbvn(details)
  }
  
  render() {
  const {isAuthenticated} = this.props
  if(isAuthenticated === false) return <Redirect to="/login" /> 
  console.log(this.props.location.state.detail)
    return (
        <Jumbotron className="container">
            <div className="new">
            <Card width="100%">
                <Card.Body>                                                      
                  <table>
              	    <tbody>
                  	    <tr>
                  	        <td>Payment Method</td>
                  	        <td disabled style={{ border: '1px solid black', padding: '5px' }}>Online</td>
                  	    </tr>
                  	    <tr>
                  	        <td>Transaction ID</td>
                  	        <td style={{ border: '1px solid black' }}>{this.props.location.state.detail.transactionID}</td>
                  	    </tr>
                  	    <tr>
                  	        <td>Amount</td>
                  	        <td style={{ border: '1px solid black', padding: '5px' }}>{this.props.location.state.detail.amount.AmountInt} + ₦0  (Convenience Fee) </td>
                  	    </tr>
                  	    <tr>
                  	        <td>Total Amount Payable</td>
                  	        <td style={{ border: '1px solid black', padding: '5px' }}>{this.props.location.state.detail.amount.AmountInt}</td>
                  	    </tr>
                  	    <tr>
                  	        <td>KYC and BVN Info</td>
                  	        <td style={{ border: '1px solid black', padding: '5px' }}>
                  	           {moment().format('YYYY-MM-DD HH:mm:ss')}
                  	        </td>
                  	    </tr>       
              	    </tbody>
              	</table>
                  <Button onClick={this.addFund} >Submit</Button>
                </Card.Body>
              </Card>
          	
          	  <Card width="100%">
                <Card.Img src={wallet} alt="Card image cap" />
              </Card>
          </div>
      </Jumbotron>
      
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authUser.isAuthenticated
})

export default connect(mapStateToProps)(walletTran)
