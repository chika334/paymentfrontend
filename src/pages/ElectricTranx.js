import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ElectrictransAction } from '../_action/electric'
import { withRouter, Redirect } from 'react-router-dom'

class Transaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentName: '',
      listOfAssets: '',
      requestId: '',
      tableSoftware: []
    }
  }

  static propTypes = {
    electric: PropTypes.object.isRequired
  }


  handleClick = (props) => {
    const trans = props.id 
    const value = {
      trans,
    }
    this.props.ElectrictransAction(value)

    this.props.history.push({
      pathname: '/profile/details/electric',
      search: '?query=abc',
      state: { detail: { value } }
    })
  }

  render() {
    const { electric } = this.props.electric
    return (
      <section>
        <header className="mt-5">
          <h1 align="center">Electric transactions</h1>
        </header>
        <div>
          <div>
            <Container>
              <Table striped bordered responsive hover size="sm">
                  <thead>
                    <tr>
                      <th>Services</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Tranx NO / Token</th>
                      <th></th>
                    </tr>
                  </thead>
                <tbody>
                  {electric.map((newItem, index) => (
                    <tr key={index}>
                      <td>{newItem.product_name}</td>
                      <td>{newItem.amount}</td>
                      <td>{newItem.status}</td>
                      <td>{newItem.transactionId}<br /><small>{newItem.date}</small></td>
                      <td><button  onClick={() => this.handleClick({id: newItem.requestId})} className="btn btn-primary">see all</button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  electric: state.electric,
  isAuthenticated: state.authUser.isAuthenticated,
})

export default withRouter(connect(mapStateToProps, { ElectrictransAction })(Transaction))
