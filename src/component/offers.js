import React, { useEffect } from 'react';
import '../css/profile.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const details = [
	{
		name: 'Mipplepay is fast',
		qoute:
			'The advantage of online banking is that you can pay bills superfast, and your account is automatically credited or debited for each deposit and payment, making it easier to stay on track.'
	},
	{
		name: 'Mipplepay is fast',
		qoute:
			'The advantage of online banking is that you can pay bills superfast, and your account is automatically credited or debited for each deposit and payment, making it easier to stay on track.'
	},
	{
		name: 'Mipplepay is fast',
		qoute:
			'The advantage of online banking is that you can pay bills superfast, and your account is automatically credited or debited for each deposit and payment, making it easier to stay on track.'
	}
];

export default function Offer() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="">
			<h3 className="center">Make simple easy payments with Mipplepay</h3>
			<p className="center">
				Mipplepay gives customers a modern platform where all bills can be paid from the comfort of there homes.
			</p>
			{details.map((alldetails) => (
				<div className="rows pl-5">
					<div className="m-5">
						<div className="sizes">
							<h5>{alldetails.name}</h5>
              <hr />
              <p>{alldetails.qoute}</p>
						</div>
					</div>
				</div>
			))}
			{/* <h2 className="services">OUR SERVICES</h2>
			<div className="new">
				<div className="cards" style={{ background: '#87ceeb', borderRadius: '20px', padding: '30px' }}>
					<strong>Airtime</strong>
					<br />
					<small>Our Airtime services are: </small>
					<ul style={{ listStyleType: 'circle' }}>
						<li>Airtel</li>
						<li>Mtn</li>
						<li>Glo</li>
						<li>Etisalat</li>
						<li>Smile</li>
					</ul>
				</div>
				<div className="cards" style={{ background: '#87ceeb', borderRadius: '20px', padding: '30px' }}>
					<strong>Data</strong>
					<br />
					<small>Our Data services are: </small>
					<ul style={{ listStyleType: 'circle' }}>
						<li>Airtel</li>
						<li>Mtn</li>
						<li>Glo</li>
						<li>Etisalat</li>
						<li>Smile</li>
					</ul>
				</div>
				<div className="cards" style={{ background: '#87ceeb', borderRadius: '20px', padding: '30px' }}>
					<strong>Tv Subscription</strong>
					<br />
					<small>Our Tv Subscription services are: </small>
					<ul style={{ listStyleType: 'circle' }}>
						<li>DSTV</li>
						<li>GOTV</li>
						<li>STARTIMES</li>
					</ul>
				</div>
				<div className="cards" style={{ background: '#87ceeb', borderRadius: '20px', padding: '30px' }}>
					<strong>Electricity Bill</strong>
					<br />
					<small>Pay all Electricity bills: </small>
					<ul className="" style={{ listStyleType: 'circle' }}>
						<li>IKEDC</li>
						<li>EKEDC</li>
						<li>AEDC</li>
						<li>KEDCO</li>
						<li>PHED</li>
						<li>JED</li>
						<li>KAEDCO</li>
						<li>IBEDC</li>
					</ul>
				</div>
			</div> */}
		</div>
	);
}
