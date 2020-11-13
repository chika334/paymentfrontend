import React, { Component } from 'react'
import images from '../images/newImage.jpg';
import { Jumbotron, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Wallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
        wallet: `₦0.00`
    }
  }
  render() {
  const {isAuthenticated} = this.props
  if(isAuthenticated=== false) return <Redirect to="/login" /> 
    return (
      <div>
        <Jumbotron className="container">
          <h1>Wallet</h1>
          <hr />
          <div className="new">
            <Card>
            <Card.Body>                                                      
              <Card.Text>Credit your wallet now, and spend from it later. No Need to enter card details everytime you want to make a Payment. Make Faster Payments.</Card.Text>
              <div className="forms-form-group">
              <input 
                type="text" 
                style={{ width: '100%', marginBottom: 15 }} 
                placeholder="Enter Amount (NGN)"
                onChange={this.handleChange}
              />
            </div>
              <Button href='/News'>Submit</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img top width="100%" src={images} alt="Card image cap" />
          </Card>
          </div>
          <div style={{ marginBottom: 70 }} />
            <hr />
          <p style={{ color: 'red', marginBottom: 50  }}>Please note that loading your wallet through card as an agent attracts a card processing fee of 1.5%. To avoid paying this charge, please load your wallet through bank deposit.</p>
          <a style={{ textDecoration: 'none' }} href="#">Please click here to get information on how to load your wallet.</a>
        </Jumbotron>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated,
})

export default connect(mapStateToProps)(Wallet)
