import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from './Logout.js'
import ProgressBar from './ProgressBar'
import SecondNav from './secondNav'
import '../css/profile.css'                        

export class Paid extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="cards">
            <h3>Please Confirm your Transaction Details are as Follows:</h3>
            <p style={{ paddingTop: '10px' }}>TRANSACTION INFO:</p>
            <div className="cards container" style={{ backgroundColor: 'grey', width: '50%' }}>
                <p>{this.props.location.state.detail.email}</p>
                <p>{this.props.location.state.detail.amount}</p>
                <p>{this.props.location.state.detail.phone}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Paid
