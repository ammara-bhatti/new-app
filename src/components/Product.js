import React, { Component } from 'react'

export default class Product extends Component {
	constructor(props) {

     super(props)
	     this.state = {
		 	search: '', products: [
  {
    id: 1,
    name: "Product1",
    price: 100
  },
  {
    id: 2,
    name: "Product2",
    price: 100
  },
  {
    id: 3,
    name: "Product3",
    price: 100
  },
  {
    id: 4,
    name: "Product4",
    price: 100
  },
]
, searchedProducts: [],
		}
	
}
	onClickHandler = () => {
		let searchResult = this.state.products.filter((item) => {
     	return item.name.includes(this.state.search)})
		this.setState({searchedProducts: searchResult})
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
	        <input onChange={this.inputChangeHandler} type="text" placeholder="Search" />
	        <button onClick={this.onClickHandler}>
	       	 Search
	        </button>      
          </div>
          <div>
  {
    this.state.searchedProducts.map (product =>
      <div>
        <span>{product.id}</span>
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      )
  }
</div>
</div>
		);
	}
}