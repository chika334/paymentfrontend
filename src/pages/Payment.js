import React, { Component } from 'react'
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
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Data from '../component/Data'
import Tvsub from '../component/Tvsub'
import Insurance from '../component/insurance'
import Credit from '../component/credit'
import Nepa from '../component/nepa'

export class Payment extends Component {
  render() {
  const {isAuthenticated} = this.props
  if(isAuthenticated=== false) return <Redirect to="/login" /> 
    return (
      <div>
      	<div className="p-5">
      	<h3 className="pt-3"><b>Payment</b></h3>
      	<p>Select the service you want to make payment for</p>
      	<h4>Airtime Recharge</h4>
      	<div className="new">
      	    <Credit />
      	</div>
      	</div>

      	<div className="p-5">
      	    <h4>Data Services</h4>
          	<div className="new">
          	    <Data />
            </div>
      	</div>

      	<div className="p-5">
      	    <h4>TV Subscription</h4>
          	<div className="new">
          	    <Tvsub />
            </div>
         </div>
         
         <div className="p-5">
      	    <h4>Insurance</h4>
          	<div className="new">
          	    <Insurance />
            </div>
         </div>
         
         
         <div className="p-5">
      	    <h4>Electricity bill</h4>
          	<div className="new">
          	    <Nepa />
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated,
})

export default connect(mapStateToProps, null)(Payment)
