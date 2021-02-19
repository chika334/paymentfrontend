import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DataAction } from '../_action/data'
import { withRouter, Redirect } from 'react-router-dom'

class Data extends Component {
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
    data: PropTypes.object.isRequired
  }
  
  handleClick = (props) => {
    const trans = props.id 
    const value = {
      trans,
    }
    this.props.DataAction(value)

    this.props.history.push({
      pathname: '/profile/details/data',
      search: '?query=abc',
      state: { detail: { value } }
    })
  }

  render() {
    const { data } = this.props.data
    return (
      <section>
        <header className="mt-5">
          <h1 align="center">Data transactions</h1>
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
                  {data.map((newItem, index) => (
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
  data: state.data,
  isAuthenticated: state.authUser.isAuthenticated,
})

export default withRouter(connect(mapStateToProps, { DataAction })(Data))
