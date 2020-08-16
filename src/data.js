const storeProducts = [
	{
		id: 1,
		title: "Google Pixel - Black",
		img: "assets/images/mobile.jpg",
		company: "Samsung",
		info: "",
		inCart: false,
		count: 0,
		total: 0,
		price: "12 USD"
	},
	{
		id: 2,
		title: "Google Pixel - Black",
		img: "assets/images/mobile.jpg",
		company: "Samsung",
		info: "",
		inCart: false,
		count: 0,
		total: 0,
		price: "10 USD"
	}
];

const categories = [
	{
		id:1,
		name: "Fruits",
		description: "Fresh fruits"
	},
	{
		id:2,
		name: "Vegetables",
		description: "Fresh vegetables"
	}
];

export {
 storeProducts,
 categories
}

/*const detailProduct = {};

storeProducts.forEach((arrayItem) => {
  detailProduct = {
    id: arrayItem.id,
    title: arrayItem.title,
    img: arrayItem.img,
    price: arrayItem.price,
    company: arrayItem.company,
    info: arrayItem.info,
    inCart: arrayItem.inCart,
    count: arrayItem.count,
    total: arrayItem.total
  };
  console.log(arrayItem);
});



/*export const detailProducts =  {

	id:1,
	title: "Google Pixel - Black",
	img: "assets/images/mobile.jpg",
	price: 10,
	company: "Samsung",
	info: "hello",
	inCart: false,
	count: 0,
	total: 0
}
*/

