import React, { Component } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { transAction } from '../_action/airtime'
import { withRouter } from 'react-router-dom'

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
    airtime: PropTypes.object.isRequired,
    transAction: PropTypes.func.isRequired
  }
  
  componentDidMount(e) {
        let newItem = this.state.tableSoftware
        const { transaction } = this.props.transaction

        newItem.push({
          transaction
        });

        this.setState({
          tableSoftware: newItem
        })
   }

  render() {
    const { transaction } = this.props.transaction
    console.log(transaction)
    return (
      <section className="App p-5">
        <header>
          <h1>Details</h1>
        </header>
        <div>
          <div className="new">
              <Table striped bordered responsive hover>
                  <thead>
                    <tr>
                      <th>Services</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Tranx NO</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                <tbody>
                  {transaction.map((newItem, index) => (
                    <tr key={index}>
                      <td>{newItem.product_name}</td>
                      <td>{newItem.amount}</td>
                      <td>{newItem.status}</td>
                      <td>{newItem.transactionId}</td>
                      <td>{newItem.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          </div>
          <div className="new">
            Nice
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
    transaction: state.transaction
})

export default withRouter(connect(mapStateToProps)(Transaction))
