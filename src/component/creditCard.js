// import React, { useState } from 'react';
// import { PaystackButton } from 'react-paystack';
// import '../css/card.css';
// import creditcard from '../images/creditcard.jpg';
// import { BuyCreditFund } from '../_action/airtime';
// import { BuyData } from '../_action/data';
// import { payTvBill } from '../_action/TvsubAction';
// import { payElectricBill, postPayElectricBill } from '../_action/electric';
// import { connect, useSelector } from 'react-redux';
// import { clearPaystackDetails } from '../_action/paystack';
// import store from '../store'

// const App = (props) => {
// 	const paystackDetails = useSelector((state) => state.paystack);
// 	// const publicKey = 'pk_live_183a3ac8fc9ef851cd537b4b2e8fabfd9585d5ef';
// 	const publicKey = process.env.REACT_APP_TEST_PAYSTACK;
// 	const amount = props.location.state.detail.amount * 100;
// 	const [ email, setEmail ] = useState('');
// 	const [ name, setName ] = useState('');
// 	const [ phone, setPhone ] = useState('');

// 	const transaction = () => {
// 		const name = `${props.location.state.detail.name}`;
// 		const service = `${props.location.state.detail.service}`;
// 		const phone = `${props.location.state.detail.phone}`;
// 		const select = `${props.location.state.detail.select}`;
// 		const amount = props.location.state.detail.amount;

// 		const value = {
// 			name,
// 			amount,
// 			service,
// 			phone
// 		};

// 		console.log(value);

// 		props.BuyCreditFund(value);
// 	};

// 	const data = () => {
// 		const name = `${props.location.state.detail.name}`;
// 		const service = `${props.location.state.detail.service}`;
// 		const phone = `${props.location.state.detail.phone}`;
// 		const select = `${props.location.state.detail.select}`;
// 		const variation = `${props.location.state.detail.variation}`;

// 		const value = {
// 			name,
// 			amount,
// 			service,
// 			phone,
// 			select,
// 			variation
// 		};

// 		props.BuyData(value);
// 	};

// 	const TvSub = () => {
// 		const name = `${props.location.state.detail.name}`;
// 		const service = `${props.location.state.detail.service}`;
// 		const smartcard = `${props.location.state.detail.smartcard}`;
// 		const phone = `${props.location.state.detail.phone}`;
// 		const select = `${props.location.state.detail.select}`;

// 		const value = {
// 			name,
// 			amount,
// 			service,
// 			phone,
// 			select,
// 			smartcard
// 		};

// 		props.payTvBill(value);
// 	};

// 	const ElectricBill = () => {
// 		const name = `${props.location.state.detail.name}`;
// 		const service = `${props.location.state.detail.service}`;
// 		const phone = `${props.location.state.detail.phone}`;
// 		const select = `${props.location.state.detail.select}`;
// 		const meter = `${props.location.state.detail.meter}`;

// 		const value = {
// 			name,
// 			amount,
// 			service,
// 			phone,
// 			select,
// 			meter
// 		};

// 		props.payElectricBill(value);
// 	};

// 	const allData = () => {
// 		const name = props.location.state.detail.name;
// 		const select = props.location.state.detail.select;

// 		if (
// 			name === 'Third Party Motor Insurance - Universal Insurance' ||
// 			name === 'Health Insurance - HMO  ' ||
// 			name === 'Personal Accident Insurance' ||
// 			name === 'Home Cover Insurance'
// 		) {
// 			console.log('insurance');
// 			//sendDetails()
// 		} else if (name === 'DSTV Subscription' || name === 'Gotv Payment' || name === 'Startimes Subscription') {
// 			TvSub();
// 		} else if (
// 			name === 'Airtel Airtime VTU' ||
// 			name === 'MTN Airtime VTU' ||
// 			name === 'GLO Airtime VTU' ||
// 			name === '9mobile Airtime VTU' ||
// 			name === '9Mobile Airtime Pin'
// 		) {
// 			console.log('Credit');
// 			transaction();
// 		} else if (
// 			name === 'Airtel Data' ||
// 			name === 'MTN Data' ||
// 			name === 'GLO Data' ||
// 			name === '9mobile Data' ||
// 			name === 'Smile Payment'
// 		) {
// 			data();
// 			//console.log("Data")
// 		} else if (
// 			(name === 'Ikeja Electric Payment - IKEDC' ||
// 				name === 'Eko Electric Payment - EKEDC' ||
// 				name === 'Abuja Electricity Distribution Company- AEDC' ||
// 				name === 'KEDCO - Kano Electric' ||
// 				name === 'PHED - Port Harcourt Electric' ||
// 				name === 'Jos Electric - JED' ||
// 				name === 'IBEDC - Ibadan Electricity Distribution Company') &&
// 			select === 'prepaid'
// 		) {
// 			ElectricBill();
// 		} else if (
// 			(name === 'Ikeja Electric Payment - IKEDC' ||
// 				name === 'Eko Electric Payment - EKEDC' ||
// 				name === 'Abuja Electricity Distribution Company- AEDC' ||
// 				name === 'KEDCO - Kano Electric' ||
// 				name === 'PHED - Port Harcourt Electric' ||
// 				name === 'Jos Electric - JED' ||
// 				name === 'IBEDC - Ibadan Electricity Distribution Company') &&
// 			select === 'postpaid'
// 		) {
// 			postPayElectricBill();
// 		}
// 	};

// 	const success = (dispatch) => {
// 		if (paystackDetails.success) {
// 			allData();

// 			setTimeout(() => {
// 				store.dispatch(clearPaystackDetails());
// 			}, 10000);
// 		} else {
// 			console.log('false');
// 		}
// 	};

// 	const componentProps = {
// 		email,
// 		amount,
// 		metadata: {
// 			name,
// 			phone
// 		},
// 		publicKey,
// 		text: 'Pay Now',
// 		onSuccess: () => {
// 			// return allData(),
// 			return (
// 				success(),
// 				alert('Thanks for doing business with us! Come back soon!!'),
// 				props.clearPaystackDetails()
// 			);
// 		},
// 		onClose: () => alert("Please try again don't leave :(")
// 	};

// 	return (
// 		<div className="App">
// 			<div className="container allnew">
// 				<div className="item">
// 					<div className="overlay-effect" />
// 					<img className="item-image" src={creditcard} alt="may payment" />
// 					<div className="item-details">
// 						<p className="item-details__title">{props.location.state.detail.name}</p>
// 						<p className="item-details__amount">{amount} kobo</p>
// 					</div>
// 				</div>
// 				<div className="checkout">
// 					<div className="checkout-form">
// 						<div className="checkout-field">
// 							<label>Name</label>
// 							<input type="text" id="name" onChange={(e) => setName(e.target.value)} />
// 						</div>
// 						<div className="checkout-field">
// 							<label>Email</label>
// 							<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
// 						</div>
// 						<div className="checkout-field">
// 							<label>Phone</label>
// 							<input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} />
// 						</div>
// 						<PaystackButton className="paystack-button" {...componentProps} />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default connect(null, {
// 	payElectricBill,
// 	payTvBill,
// 	postPayElectricBill,
// 	BuyCreditFund,
// 	BuyData,
// 	clearPaystackDetails
// })(App);

import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { connect } from 'react-redux';
import { verifyPayment } from '../_action/paystack';
import '../css/card.css';

export function App(props) {
	const amount = props.location.state.detail.amount;
	const [ email, setEmail ] = useState('');
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState(null);

	// console.log(phone);

	const config = {
		public_key: `${process.env.REACT_APP_TEST_FLUTTERWAVE}`,
		tx_ref: Date.now(),
		amount: amount,
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
			email: email,
			phonenumber: phone,
			name: name
		},
		customizations: {
			title: 'my Payment Title',
			description: 'Payment for items in cart',
			logo:
				'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg'
		}
	};

	const handleFlutterPayment = useFlutterwave(config);

	return (
		<div className="App">
			<div className="checkout">
				<div className="checkout-form">
					<div className="checkout-field">
						<label>Name</label>
						<input type="text" id="name" onChange={(e) => setName(e.target.value)} />
					</div>
					<div className="checkout-field">
						<label>Email</label>
						<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="checkout-field">
						<label>Phone</label>
						<input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} />
					</div>
				</div>
				<button
					className="paystack-button"
					onClick={() => {
						handleFlutterPayment({
							callback: (response) => {
								const ref = response.tx_ref;
								// console.log(response);
								props.verifyPayment(ref);

								// props.history.push(`/success`)
								// closePaymentModal(); // this will close the modal programmatically
								setTimeout(() => {
									window.location.href = `/profile/payment`;
								}, 2000);
							},
							onClose: () => {
								alert("Please don't go :(");
							}
						});
					}}
				>
					Payment with React hooks
				</button>
			</div>
		</div>
	);
}

export default connect(null, { verifyPayment })(App);
