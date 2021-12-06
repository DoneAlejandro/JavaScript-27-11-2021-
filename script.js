'use strict';


// const products = [
// 	{ id: 1, image: src = 'images/note.jpg', title: 'Notebook', price: 2000 },
// 	{ id: 2, image: src = 'images/mouse.jpg', title: 'Mouse', price: 20 },
// 	{ id: 3, image: src = 'images/keyboard.jpg', title: 'Keyboard', price: 200 },
// 	{ id: 4, image: src = 'images/gamepad.jpg', title: 'Gamepad', price: 50 },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (image, title, price) => {
// 	return `<div class="product-item">
// 					 <img src="${image}" alt="#">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// //  Убрал запятые, вызванные методом map c помощью join
// const renderPage = list => {
// 	const productsList = list.map(item => renderProduct(item.image, item.title, item.price)).join('');
// 	console.log(productsList);
// 	document.querySelector('.products').innerHTML = productsList;
// };

// renderPage(products);


class ProductsItem {
	constructor(image, title, price) {
		this.image = image;
		this.title = title;
		this.price = price;
	}
	render() {
		return `<div class="product-item">
		<img src="${this.image}" alt="#">
		<h3>${this.title}</h3>
		<p>${this.price}</p>
		<button class="buy-btn">Купить</button>
		</div>`
	}
}

class ProductsList {
	constructor() {
		this.products = [];
	}
	fetchProducts() {
		this.products = [
			{ id: 1, image: 'images/note.jpg', title: 'Notebook', price: 2000 },
			{ id: 2, image: 'images/mouse.jpg', title: 'Mouse', price: 20 },
			{ id: 3, image: 'images/keyboard.jpg', title: 'Keyboard', price: 200 },
			{ id: 4, image: 'images/gamepad.jpg', title: 'Gamepad', price: 50 },
		];
	}
	render() {
		let listHTML = '';
		this.products.forEach(product => {
			const ProductItems = new ProductsItem(product.image, product.title, product.price);
			listHTML += ProductItems.render();
		});
		document.querySelector('.products').innerHTML = listHTML;
	}

	totalSum() {
		let totalPrice = 0;
		this.products.forEach((product) => {
			if (product.price !== undefined) {
				// statement
				totalPrice += product.price;
			}
		});
		let sumBox = `Всего товаров на сумму: ${totalPrice}`;
		document.querySelector('.total-amount').innerHTML = sumBox;
	}
}



const list = new ProductsList();
list.fetchProducts();
list.render();
list.totalSum();

class Basket {

	addProducts() {

	}
	removeProducts() {

	}
	changeProducts() {

	}
	render() {

	}
}

class BasketItem {
	render() {
		return `<div class = "basket-product">
		<img src="${this.image}" alt="#">
		<h3>${this.title}</h3>
		<p>${this.price}</p>
		</div>`
	}
}