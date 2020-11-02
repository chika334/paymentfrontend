import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { FaAlignRight, FaMoneyBillAlt } from "react-icons/fa";
import { GiWallet } from 'react-icons/gi'
import { BiTransfer, BiHelpCircle, BiWallet } from 'react-icons/bi'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export class NavBar extends Component {
  state= {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    const { user, isAuthenticated } = this.props.authUser;
    //if (this.state.wallet) return <Redirect to="/wallet" />
    const noUser = (
      <>
        <li className="nav-item">
			<a className="nav-link" href="/contact">Become an agent</a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="/about">Start Earning</a>
		</li>
      </>
    )

    const users = (
      <>
        <li className="nav-item">
          <a className="nav-link" href="/profile/earning"><GiWallet/> Total Earning: ₦0</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile/transaction"><BiTransfer /> Transactions</a>
        </li>
        <li className="nav-item">
            <DropdownButton id="dropdown-basic-button" title="Quick Tools">
              <Dropdown.Item href="#/action-1">Report</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Manage</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/help"><BiHelpCircle/> Help/Support</a>
        </li>
        
         <li className="nav-item ml-5">
          <button style={{ backgroundColor: 'Transparent', backgroundRepeat: 'no-repeat', border: '1px solid grey', borderRadius: '3px' }} className="nav-link" href="/help"><a href="/profile/wallet"><BiWallet /> Wallet: ₦0</a></button>
        </li>
      </>
    )

    return (
      <div className="header">
        <div className="container navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" onClick={this.toggle} type="button" data-toggle="collapse" >
			<FaAlignRight className="nav-icon" />
		  </button>

          {/* <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}> */}
          <div className={this.state.isOpen ? "navbar-collapse" : "collapse navbar-collapse"}>
            <ul className="navbar-nav nav-center ml-auto text-right">
				<li className="nav-item">
					<a className="nav-link" href="/"><FaMoneyBillAlt /> Make Payment</a>
				</li>
              {
                isAuthenticated ? users : noUser
              }
			</ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser
})

export default connect(mapStateToProps, null)(NavBar)
