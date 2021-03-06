import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Data from '../component/Data';
import Tvsub from '../component/Tvsub';
//import Insurance from '../component/insurance'
import Credit from '../component/credit';
import Nepa from '../component/nepa';
import '../css/modalForm.scss';

export class Payment extends Component {
	render() {
		const { isAuthenticated } = this.props;
		//   if(isAuthenticated=== false) return <Redirect to="/login" />
		return (
			<div className="p-5 pt-5">
				<div>
					<h3 className="pt-3">
						<b>Payment</b>
					</h3>
					<p>Select the service you want to make payment for</p>
					<div className="pt-2">
						<h4>Airtime Recharge</h4>
						<Credit />
					</div>
				</div>

				<div className="pt-4">
					<h4>Data Services</h4>
					<div>
						<Data />
					</div>
				</div>

				<div className="pt-4">
					<h4>TV Subscription</h4>
					<div>
						<Tvsub />
					</div>
				</div>

				<div className="pt-4">
					<h4>Electricity bill</h4>
					<div>
						<Nepa />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.authUser.isAuthenticated
});

export default connect(mapStateToProps, null)(Payment);
