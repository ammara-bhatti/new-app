import React, { Component } from 'react'
import { storeProducts } from '../data';

export default class Product extends Component {
	constructor(props) {

		super(props)
		this.state = {
			search: '',
			products: storeProducts,
			searchedProducts: [],
		}
	}

	onClickHandler = () => {
		let searchResult = this.state.products.filter((item) => {
			return item.title.includes(this.state.search)
		})
		this.setState({ searchedProducts: searchResult })
	}

	inputChangeHandler = (evt) => {
		this.setState({
			search: evt.target.value
		})
	}

	render() {
		return (
			<div>
				<div>
					<h3> Shopping here </h3>
					<input onChange={this.inputChangeHandler} type="text" placeholder="Search" className="button" />
					<button onClick={this.onClickHandler} className="button">
						<spam className="mr-2">
							<i className="fa fa-search" />
						</spam>
						Search
	        </button>
				</div>

				<div>
					{this.state.searchedProducts.map(product =>
						<div>
							<span>{product.id}</span>
							<span>{product.title}</span>
							<span>{product.price}</span>
						</div>
					)}
				</div>
			</div>
		);
	}
}