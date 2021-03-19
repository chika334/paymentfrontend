import React, { Component } from 'react'
import '../css/Login.css'
import { connect } from 'react-redux'
import { signup, getUser } from '../_action/userAction'
import PropTypes from 'prop-types'
import { clearErrors } from '../_action/errorAction'
import { Alert, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { showLoader, hideLoader } from '../_action/loading'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
)

export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      msg: null,
      redirect: false,
      formErrors: {
        name: '',
        email: '',
        password: '',
      },
    }
  }

  static propType = {
    auth: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }

    // if authenticated redirect
    if (isAuthenticated) {
      this.setState({ redirect: true })
      this.props.hideLoader()
      this.sendRedirect()
      window.location.href = '/profile/dashboard'
      // this.props.history.push('/profile/dashboard')
    }
  }

  sendRedirect = () => {
    this.props.clearErrors()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state

    const user = {
      name,
      email,
      password,
    }
    // console.log(user)
    this.props.signup(user)
    this.props.showLoader()
  }

  handleChange = (name) => (e) => {
    const { value } = e.target
    let formErrors = { ...this.state.formErrors }

    switch (name) {
      case 'name':
        formErrors.name =
          value.length < 6 ? 'minimum of 6 characters required' : ''
        break
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'invalid email address'
        break
      case 'password':
        formErrors.password =
          value.length < 6 ? 'minimum of 6 characters required' : ''
        break
      default:
        break
    }
    this.setState({ formErrors, [name]: value })
  }

  render() {
    const { formErrors } = this.state
    const { user } = this.props.authUser
    // if (this.state.redirect) {
    //   this.props.history.push({
    //     pathname: '/profile',
    //   })
    // }
    // console.log(user)
    return (
      <div className="m-5 mb-5">
        <div className="center pb-4 cardp containerp">
          <Form onSubmit={this.handleSubmit} className="pt-5">
            <h2 className="center">Register</h2>
            <br />
            {this.state.msg ? (
              <Alert variant="danger">{this.state.msg}</Alert>
            ) : null}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="input"
                type="text"
                className="name"
                value={this.state.name}
                name="name"
                placeholder="Enter Username"
                onChange={this.handleChange("name")}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="input"
                className="email"
                value={this.state.email}
                name="email"
                placeholder="Enter Email"
                onChange={this.handleChange('email')}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="input"
                type="password"
                className="password"
                value={this.state.password}
                name="password"
                placeholder="Enter Password"
                onChange={this.handleChange('password')}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </Form.Group>
            <div className="center">
              <Button
                onSubmit={this.handleSubmit}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        {/* <div className="forms" onSubmit={this.handleSubmit}>
          <h2 className="header">Signup</h2>
          {this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null}
          <div className="forms-form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="name" 
              value={this.state.name}
              name="name"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            {formErrors.name.length > 0 && (
              <span className="errorMessage">{formErrors.name}</span>
            )}
          </div>

          <div className="forms-form-group">
              <label>Email</label>
              <input 
                type="email" 
                className="email" 
                value={this.state.email}
                name="email"
                placeholder="Enter Email"
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="forms-form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="password" 
                value={this.state.password}
                name="password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
            </div>

          <div className="createAccount">
            <button 
              onClick={this.handleSubmit}
              type="button" 
              className="submit">Submit</button>
            {/* <small className="small">Don't have an account?? <a href="/signup">Signup</a></small> 
          </div>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
})

export default connect(mapStateToProps, { signup, clearErrors, getUser, showLoader, hideLoader })(
  Register,
)
