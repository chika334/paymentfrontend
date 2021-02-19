import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var style = {
	// backgroundColor: '#F8F8F8',
	marginTop: '20px',
	borderTop: '1px solid #E7E7E7',
	textAlign: 'center',
	padding: '20px',
	position: 'fixed',
	left: '0',
	bottom: '0',
	height: '60px',
	width: '100%',
	backgroundColor: '#000'
};

var phantom = {
	display: 'block',
	padding: '20px',
	height: '60px',
	width: '100%'
};

export class Footer extends Component {
	render() {
		return (
			<div className={phantom}>
				<hr />
				<footer
					className="page-footer text-dark font-small blue p-3"
					// className={style}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<span>Mipplepay © 2021</span>
					<Link to="/terms">Terms and condition</Link>
				</footer>
			</div>
		);
	}
}

export default Footer;
