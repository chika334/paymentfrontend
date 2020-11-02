import React, { Component } from 'react'
import {logout} from '../_action/userAction.js'
import {connect} from 'react-redux'
// import{NavItem, NavLink} from 'reactstrap'
import PropTypes from 'prop-types'

export class Logout extends Component {
  static propType = {
    logout: PropTypes.func.isRequired
  }
  render() {
    console.log(this.props)
    return (
      // <div>
        <li className="nav-item">
          <a className="nav-link" onClick={this.props.logout} href="/login">Signout</a>
        </li>
      // </div>
    )
  }
}

export default connect(null, {logout})(Logout)
