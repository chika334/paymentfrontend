import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentName: '',
      listOfAssets: '',
      requestId: '',
      tableSoftware: []
    }
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
    console.log(this.state.tableSoftware)
    return (
      <section className="App p-3">
        <header>
          <h1>Details</h1>
        </header>
        <div>
          <div className="new good">
              {transaction.map((newItem, index) => (
                <div key={index}>
                  <div className="new">
                    <p>Services: </p><p style={{ paddingLeft: '20px' }}>{newItem.product_name}</p>
                  </div>
                  <div className="new">
                    <p>Amount: </p><p style={{ paddingLeft: '20px' }}>₦{newItem.amount}</p>
                  </div>
                  <div className="new">
                    <p>Status: </p><p style={{ paddingLeft: '20px' }}>{newItem.status}</p>
                  </div>
                  <div className="new">
                    <p>Tranx NO: </p><p style={{ paddingLeft: '20px' }}>{newItem.transactionId}</p>
                  </div>
                  <div className="new">
                    <p>Date: </p><small style={{ paddingLeft: '20px' }}>{newItem.date}</small>
                  </div>
                  <div className="new">
                    <p>Total Amount Payable: </p><p style={{ paddingLeft: '20px' }}>₦{newItem.total_amount}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
    transaction: state.transaction
})

export default withRouter(connect(mapStateToProps)(Details))
