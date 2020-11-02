import React, { Component } from 'react'
import images from '../images/newImage.jpg';
import Papers from './Paper'
import { Jumbotron, Button } from 'react-bootstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="container">
          <h1>Hello, world!</h1>
          <hr />
          <div className="new">
            <Card>
            <CardBody>                                                      
              <CardText>Credit your wallet now, and spend from it later. No Need to enter card details everytime you want to make a Payment. Make Faster Payments.</CardText>
              <div className="forms-form-group">
              <input 
                type="text" 
                style={{ width: '100%', marginBottom: 15 }} 
                placeholder="Enter Amount (NGN)"
                onChange={this.handleChange}
              />
            </div>
              <Button href='/News'>Click here</Button>
            </CardBody>
          </Card>

          <Card>
            <CardImg top width="100%" src={images} alt="Card image cap" />
          </Card>
          </div>
          <div style={{ marginBottom: 70 }} />
            <hr />
          <p style={{ color: 'red', marginBottom: 50  }}>Please note that loading your wallet through card as an agent attracts a card processing fee of 1.5%. To avoid paying this charge, please load your wallet through bank deposit.</p>
          <a href="#">Please click here to get information on how to load your wallet.</a>
        </Jumbotron>
      </div>
    )
  }
}

export default Wallet
