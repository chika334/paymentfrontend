import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { jsPDF } from "jspdf";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			departmentName: '',
			listOfAssets: '',
			requestId: '',
			tableSoftware: []
		};
	}

	componentDidMount(e) {
		let newItem = this.state.tableSoftware;
		const { transaction } = this.props.transaction;

		newItem.push({
			transaction
		});

		this.setState({
			tableSoftware: newItem
		});
	}

	submit = (e) => {
		e.preventDefault();
		const { token } = this.props.success === null ? '' : this.props.success;
		// new document in jspdf
		let doc = new jsPDF({ unit: 'pt', orientation: 'p', lineHeight: 1.2 });
		let img = localStorage.getItem('ProductImage');
		// add some text to the pdf
		doc.addImage(img, 'jpg jpeg png', 200, 40, 180, 160);
		doc.text(180, 230, `${process.env.REACT_APP_NAME} ${localStorage.getItem('ProductTitle')}`);
		doc.text(220, 250, `Name:- ${this.props.authUser.user.user.fullName}`);
		doc.text(200, 270, `Company Name:- ${this.props.authUser.user.sender.companyName}`);
		doc.text(180, 290, `Reference Number:-   ${token.reference}`);
		doc.text(200, 310, `Current Balance:-    ${token.currentBalance}`);
		doc.text(180, 400, `Thank you for using ${process.env.REACT_APP_NAME}`);

		// save the pdf file
		doc.save(`${process.env.REACT_APP_URL}.pdf`);
	};

	render() {
		const { transaction } = this.props.transaction;
		return (
			<section className="App p-2">
				<header>
					<h1>Details</h1>
				</header>
				<div className="center">
					<div className="good">
						{transaction.map((newItem, index) => (
							<div key={index}>
								<div className="new">
									<p>Services: </p>
									<p style={{ paddingLeft: '20px' }}>{newItem.product_name}</p>
								</div>
								<div className="new">
									<p>Amount: </p>
									<p style={{ paddingLeft: '20px' }}>₦{newItem.amount}</p>
								</div>
								<div className="new">
									<p>Status: </p>
									<p style={{ paddingLeft: '20px' }}>{newItem.status}</p>
								</div>
								<div className="new">
									<p>Tranx NO: </p>
									<p>{newItem.transactionId}</p>
								</div>
								<div className="new">
									<p>Date: </p>
									<small style={{ paddingLeft: '20px' }}>{newItem.date}</small>
								</div>
								<div className="new">
									<p>Total Amount Payable: </p>
									<p style={{ paddingLeft: '20px' }}>₦{newItem.total_amount}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="m-3 center">
				{/* // style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }} */}
					<Button onClick={(e) => this.submit(e)}>Download Details</Button>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	transaction: state.transaction
});

export default withRouter(connect(mapStateToProps)(Details));
