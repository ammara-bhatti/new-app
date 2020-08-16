import React, { Component } from 'react'
import Logo from '../assets/images/logo.jpg';
import ImageStyle from './imageStyle.css';
import Title from './Title';

export default class Details extends Component {
	render() {
		return (
			
			<React.Fragment>
			<div className="py-5">
			<div className="container">
				<img src={Logo} alt="Logo" className="center"/>
				<Title name="Our WebSite is the leading online marketplace in Pakistan connecting thousands of sellers with millions of customers in Pakistan." />
			<div className="row">
			</div>
			</div>
			</div>
			</React.Fragment>
			
		);
	}
}