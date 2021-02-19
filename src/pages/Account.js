// import React, { Component } from 'react'
// import Password from '../component/Password'
// import PersonalData from '../component/PersonalData'
// import { Link } from 'react-router-dom'
// import Transactions from './AirtimeTranx'
// import Data from './DataTranx'
// import Electric from './ElectricTranx'
// import TvSub from './TvSubTranx'
// import '../css/singleNav.css'

// export class Account extends Component {
//   openCity = (evt, cityName) => {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

//   componentDidMount() {
//     document.getElementById("defaultOpen").click()
//   }

//   // handleClick = () => {
//   //   this.props.history.push({
//   //     pathname: '/profile/dashboard',
//   //   })
//   // }

//   render() {
//     return (
//       <div className="fold mb-5 pt-5">
//         <h4 className="text-center">Profile</h4>
//         <div className="tab">
//           <button className="tablinks" id="defaultOpen" onClick={event => this.openCity(event, 'PersonalData')}>Personal Data</button>
//           <button className="tablinks" onClick={event => this.openCity(event, 'Password')}>Password</button>
//           {/* <button><Link to="/profile/dashboard">Dashboard</Link></button> */}
//           {/* <button onClick={this.handleClick}>Dashboard</button>
//           <button className="tablinks" onClick={event => this.openCity(event, 'Airtime')}> Airtime Tranx</button>
//           <button className="tablinks" onClick={event => this.openCity(event, 'Data')}> Data Tranx</button>
//           <button className="tablinks" onClick={event => this.openCity(event, 'Electric')}> Electric Tranx</button>
//           <button className="tablinks" onClick={event => this.openCity(event, 'TvSub')}> TvSub Tranx</button> */}
//         </div>

//         <div id="PersonalData" className="tabcontent">
//           <PersonalData />
//         </div>

//         <div id="Password" className="tabcontent">
//           <Password />
//         </div>

//         {/* <div id="Airtime" className="tabcontent">
//           <Transactions />
//         </div>

//         <div id="Data" className="tabcontent">
//           <Data />
//         </div>

//         <div id="Electric" className="tabcontent">
//           <Electric />
//         </div>

//         <div id="TvSub" className="tabcontent">
//           <TvSub />
//         </div> */}
//         <div className="pt-3 d-flex align-content-center justify-content-center">
//           <Link to="/profile/dashboard">Back to Dashboard</Link>
//         </div>
//       </div>
//     )
//   }
// }

// export default Account

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profileImage from '../images/profile.png';

export const Account = (props) => {
	return (
		<div className="container pb-2">
			<Jumbotron className="text-center">
				<div className="new bigNew">
					<Image src={profileImage} roundedCircle />
					<h3 className="bigSize">{`Welcome ${props.authUser === null && localStorage.token
						? ''
						: props.authUser.user.name}`}</h3>
				</div>
				<div className="pt-3">
					<hr />
				</div>
				<p>Mipplepay makes all your bill payment fast and easy</p>
				<div className="pt-2">
					<Row>
						<Col md={6}>
							<Button
								onClick={(e) => {
									e.preventDefault();
									window.location.href = '/profile/tranx';
								}}
								className="m-2"
								variant="primary"
							>
								View Transactions
							</Button>
						</Col>
						<Col md={6}>
							<Button
								onClick={(e) => {
									e.preventDefault();
									window.location.href = '/profile/dashboard';
								}}
								className="m-2"
								variant="primary"
							>
								Dashboard
							</Button>
						</Col>
						{/* <Col md={4}>
              <Button className="m-2" variant="primary">
                Learn more
              </Button>
            </Col> */}
					</Row>
				</div>
			</Jumbotron>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authUser: state.authUser.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
