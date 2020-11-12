import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from './Logout.js'
import ProgressBar from './ProgressBar'
import SecondNav from './secondNav'
import '../css/profile.css'                        

export class NavBar extends Component {
  state= {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { user, isAuthenticated } = this.props.authUser;
    const noUser = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </>
    )

    const users = (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">{user === null ? '' : `Welcome ${user.name}`}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Referal</Link>
        </li>
        <Logout />
      </>
    )

    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            <Link className="nav-link text-dark" to="/">
              <strong>Mipplepay</strong>
            </Link>
          </div>
          <button className="navbar-toggler" onClick={this.toggle} type="button" data-toggle="collapse" >
			<span className="navbar-toggler-icon"></span>
		  </button>

          {/* <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}> */}
          <div className={this.state.isOpen ? "navbar-collapse" : "collapse navbar-collapse"}>
            <ul className="navbar-nav ml-auto text-right">
				<li className="nav-item active">
					<Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/about">About</Link>
				</li>
              {
                isAuthenticated ? users : noUser
              }
			</ul>
          </div>
        </div>
        <SecondNav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser
})

export default connect(mapStateToProps, null)(NavBar)
