import React, { Component } from 'react'
import StoreProducts from './data';

const ProductContext = React.createContext();

//Provider
//Comsumer

class ProductProvider extends Component {
 
 	/*state ={
 		products: storeProducts,
 		detailProduct:detailProduct
 	}
 	handleDetail = () =>{
 		console.log('hello from detail');
 	}
 	addToCart = () =>{
 		console.log('hello from add to cart');
 	}*/

	render() {
		console.log(StoreProducts);
		return (
			<div>
			hello storeProducts 
			</div>
			);

	}
}

/*const ProductConsumer = ProductContext.ProductConsumer;
*/export {ProductProvider};