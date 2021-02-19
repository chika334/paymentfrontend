// import React, { Component } from 'react'
// import oliver from '../images/oliver.jpg'
// import Card from './displayServices'

// import { FaLock } from 'react-icons/fa'

// class Cards extends Component {
//   render() {
//     return (
//       <div>
//         <img src={oliver} className="backside" alt="cardui" />
//         <div className="container-fluid d-flex justify-content-center">
//           <div className="row p-5">
//             <div className="col-md-4">
//               <Card
//                 title="Safer and protected"
//                 text="100% Secure Payments. All financial payments are well protected"
//               />
//             </div>
//             <div className="col-md-4">
//               <Card
//                 title="Simple and convenient"
//                 text="Pay online with your Mipplepay. Stay logged in and check out without entering your password."
//               />
//             </div>
//             <div className="col-md-4">
//               <Card
//                 title="No more late fees"
//                 text="Save time with Mipplepay. All bill payment are made fast and reliable"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Cards

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/slider.css';

function SliderArrowPrev(props) {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			{/* Prev */}
			<FontAwesomeIcon icon={[ 'fas', 'chevron-left' ]} />
		</div>
	);
}

function SliderArrowNext(props) {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			{/* Next */}
			<FontAwesomeIcon icon={[ 'fas', 'chevron-right' ]} />
		</div>
	);
}

class CardUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			dataImageName: [],
			dataPics: []
		};
	}

	componentDidMount() {
		this.FetchPromise();
	}

	FetchPromise = () => {
		const dataImage = fetch(process.env.REACT_APP_DATA).then((resp) => resp.json());
		const creditImage = fetch(process.env.REACT_APP_CREDIT).then((resp) => resp.json());
		const tvsubImage = fetch(process.env.REACT_APP_IMAGE_TVSUB).then((resp) => resp.json());
		const electricImage = fetch(process.env.REACT_APP_IMAGE_ELECTRIC).then((resp) => resp.json());

		Promise.all([ dataImage, creditImage, tvsubImage, electricImage ])
			.then((files) => {
				this.setState({ ...this.state, data: files });
			})
			.catch((err) => console.log(err));
	};

	handleProducts = (e) => {
		e.preventDefault();
		if (this.props.authUser) {
			this.props.history.push('/profile/payment');
		} else {
			this.props.history.push('/login');
		}
	};

	render() {
		const { data } = this.state;
		if (!data || !data.length) return null;
		data.map((setData) =>
			setData.content.map(
				(allDataSet) => (
					this.state.dataImageName.push(`${allDataSet.name}`), this.state.dataPics.push(`${allDataSet.image}`)
				)
			)
		);

		const details = [
			{
				name: this.state.dataImageName[0],
				image: this.state.dataPics[0],
				description: `Buy your ${this.state.dataImageName[0]} fast and reliable`
			},
			{
				name: this.state.dataImageName[1],
				image: this.state.dataPics[1],
				description: `Buy your ${this.state.dataImageName[1]} fast and reliable`
			},
			{
				name: this.state.dataImageName[2],
				image: this.state.dataPics[2],
				description: `Buy your ${this.state.dataImageName[2]} fast and reliable`
			},
			{
				name: this.state.dataImageName[3],
				image: this.state.dataPics[3],
				description: `Buy your ${this.state.dataImageName[3]} fast and reliable`
			},
			{
				name: this.state.dataImageName[4],
				image: this.state.dataPics[4],
				description: `Buy your ${this.state.dataImageName[4]} fast and reliable`
			},
			{
				name: this.state.dataImageName[5],
				image: this.state.dataPics[5],
				description: `Buy your ${this.state.dataImageName[5]} fast and reliable`
			},
			{
				name: this.state.dataImageName[6],
				image: this.state.dataPics[6],
				description: `Buy your ${this.state.dataImageName[6]} fast and reliable`
			},
			{
				name: this.state.dataImageName[7],
				image: this.state.dataPics[7],
				description: `Buy your ${this.state.dataImageName[7]} fast and reliable`
			},
			{
				name: this.state.dataImageName[8],
				image: this.state.dataPics[8],
				description: `Buy your ${this.state.dataImageName[8]} fast and reliable`
			},
			{
				name: this.state.dataImageName[9],
				image: this.state.dataPics[9],
				description: `Buy your ${this.state.dataImageName[9]} fast and reliable`
			},
			{
				name: this.state.dataImageName[10],
				image: this.state.dataPics[10],
				description: `Buy your ${this.state.dataImageName[10]} fast and reliable`
			},
			{
				name: this.state.dataImageName[11],
				image: this.state.dataPics[11],
				description: `Buy your ${this.state.dataImageName[11]} fast and reliable`
			},
			{
				name: this.state.dataImageName[12],
				image: this.state.dataPics[12],
				description: `Buy your ${this.state.dataImageName[12]} fast and reliable`
			},
			{
				name: this.state.dataImageName[13],
				image: this.state.dataPics[13],
				description: `Buy your ${this.state.dataImageName[13]} fast and reliable`
			},
			{
				name: this.state.dataImageName[14],
				image: this.state.dataPics[14],
				description: `Buy your ${this.state.dataImageName[14]} fast and reliable`
			},
			{
				name: this.state.dataImageName[15],
				image: this.state.dataPics[15],
				description: `Buy your ${this.state.dataImageName[15]} fast and reliable`
			},
			{
				name: this.state.dataImageName[16],
				image: this.state.dataPics[16],
				description: `Buy your ${this.state.dataImageName[16]} fast and reliable`
			},
			{
				name: this.state.dataImageName[17],
				image: this.state.dataPics[17],
				description: `Buy your ${this.state.dataImageName[17]} fast and reliable`
			},
			{
				name: this.state.dataImageName[18],
				image: this.state.dataPics[18],
				description: `Buy your ${this.state.dataImageName[18]} fast and reliable`
			},
			{
				name: this.state.dataImageName[19],
				image: this.state.dataPics[19],
				description: `Buy your ${this.state.dataImageName[19]} fast and reliable`
			},
			{
				name: this.state.dataImageName[20],
				image: this.state.dataPics[20],
				description: `Buy your ${this.state.dataImageName[20]} fast and reliable`
			}
		];

		const marketingTestimonials1 = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			autoplay: true,
			slidesToScroll: 1,
			cssEase: 'linear',
			nextArrow: <SliderArrowNext />,
			prevArrow: <SliderArrowPrev />,
			className: 'slides',
			responsive: [
				{
					breakpoint: 599,
					settings: { slidesToShow: 1, slidesToScroll: 1 }
				}
			]
		};

		return (
			<div>
				<h4 className="services">Our Products</h4>
				<div>
					<Slider
						{...marketingTestimonials1}
						className="row slider-arrows-outside mb-5 slider-arrows-dark slider-dots-outside"
					>
						{details.map((allDetails) => (
							<Card className="col-md-11" style={{ width: '8rem' }}>
								<Card.Img height="130px" width="50px" variant="top" src={allDetails.image} />
								<Card.Body height="50%">
									<Card.Title>{allDetails.name}</Card.Title>
									<Card.Text>{allDetails.description}</Card.Text>
									<Button onClick={(e) => this.handleProducts(e)} variant="primary">
										Buy
									</Button>
								</Card.Body>
							</Card>
						))}
					</Slider>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	authUser: state.authUser.isAuthenticated
});

export default withRouter(connect(mapStateToProps, null)(CardUI));
