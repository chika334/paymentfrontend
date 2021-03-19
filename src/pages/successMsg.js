import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class successMsg extends Component {
	render() {
		console.log(this.props.paystack.msg);
		return (
			<div
				style={{
					display: 'flex',
					alignContent: 'center',
					justifyContent: 'center',
					marginTop: '5%'
				}}
			>
				<Card
					style={{
						// padding: '10%',
						padding: '100px',
						margin: '10px',
						marginBottom: '5%'
					}}
				>
					Success
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	paystack: state.paystack
});

export default connect(mapStateToProps)(successMsg);
