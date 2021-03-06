import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout.js';
// import ProgressBar from './ProgressBar'
import '../css/profile.css';

export class NavBar extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		const { user, isAuthenticated } = this.props.authUser;
		// console.log(user.user);
		const noUser = (
			<ul className="navbar-nav ml-auto text-right">
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/profile/payment">
						Perform a transaction
					</Link>
				</li>
			</ul>
		);

		const users = (
			<ul className="navbar-nav ml-auto text-right">
				<li className="nav-item">
					<Link className="nav-link" to="/profile/dashboard">
						{user === null ? '' : `Welcome ${user.user.name}`}
					</Link>
					{/* <Link className="nav-link" to="/profile">
            
          </Link> */}
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/profile/payment">
						Perform a transaction
					</Link>
				</li>
				<Logout />
			</ul>
		);

		return (
			<div>
				{/* <ProgressBar /> */}
				<div className="container navbar navbar-expand-lg navbar-light">
					<div className="navbar-brand">
						<Link className="nav-link text-dark" to="/">
							<strong>Mipplepay</strong>
						</Link>
					</div>
					<button className="navbar-toggler" onClick={this.toggle} type="button" data-toggle="collapse">
						<span className="navbar-toggler-icon" />
					</button>

					{/* <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}> */}
					<div className={this.state.isOpen ? 'navbar-collapse' : 'collapse navbar-collapse'}>
						<ul className="navbar-nav ml-auto text-right">
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									Home<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							{isAuthenticated || localStorage.token ? users : noUser}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	authUser: state.authUser
});

export default connect(mapStateToProps, null)(NavBar);
