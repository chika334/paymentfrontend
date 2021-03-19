import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class ForgotPassword extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: ''
		};
	}

	handleChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log('good', this.state.email);
	};

	render() {
		return (
			<div className="m-5 mb-5 mt-4">
				<div className="center pb-4 cardp containerp">
					<form onSubmit={this.handleSubmit} className="pt-5 pb-3">
						<h4>REQUEST PASSWORD RESET</h4>
						<label>Email: </label>
						<br />
						<input
							value={this.state.email}
							placeholder="Enter your email"
							type="email"
							onChange={this.handleChange}
							width="100%"
						/>
						<div className="mt-3 ">
							<Button onSubmit={this.handleSubmit} variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
