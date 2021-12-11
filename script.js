'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.products = [];
		this.allProducts = [];
		this._getProducts()
			.then(data => {
				this.products = [...data];
				this.render();
			});
	}

	// fetchProducts() {
	// 	this.products = [
	// 		{ id: 1, image: 'images/note.jpg', title: 'Notebook', price: 2000 },
	// 		{ id: 2, image: 'images/mouse.jpg', title: 'Mouse', price: 20 },
	// 		{ id: 3, image: 'images/keyboard.jpg', title: 'Keyboard', price: 200 },
	// 		{ id: 4, image: 'images/gamepad.jpg', title: 'Gamepad', price: 50 },
	// 	];
	// }

	_getProducts() {
		return fetch(`${API}/catalogData.json`)
			.then(result => result.json())
			.catch(error => {
				console.log(error);
			});
	}


	calcSum() {
		return this.allProducts.reduce((accum, item) => accum += item.price, 0);
	}
	// 	totalSum() {
	// 		let totalPrice = 0;
	// 		this.products.forEach((product) => {
	// 			if (product.price !== undefined) {
	// 				// statement
	// 				totalPrice += product.price;
	// 			}
	// 		});
	// 		let sumBox = `Всего товаров на сумму: ${totalPrice}`;
	// 		document.querySelector('.total-amount').innerHTML = sumBox;
	// 	}
	// }
	render() {
		const block = document.querySelector(this.container);
		for (let product of this.products) {
			const productObj = new ProductsItem(product);
			this.allProducts.push(productObj);
			block.insertAdjacentHTML('beforeend', productObj.render());
		}
		// let listHTML = '';
		// this.products.forEach(product => {
		// 	const ProductItems = new ProductsItem(product.image, product.title, product.price);
		// 	listHTML += ProductItems.render();
		// });
		// document.querySelector('.products').innerHTML = listHTML;
	}


	// 	const list = new ProductsList();
	// list.fetchProducts();
	// list.render();
	// list.totalSum();

	// class Basket {

	// 	addProducts() {

	// 	}
	// 	removeProducts() {

	// 	}
	// 	changeProducts() {

	// 	}
	// 	render() {

	// 	}
	// }

	// class BasketItem {
	// 	render() {
	// 		return `<div class = "basket-product">
	// 		<img src="${this.image}" alt="#">
	// 		<h3>${this.title}</h3>
	// 		<p>${this.price}</p>
	// 		</div>`
	// 	}
}
class ProductsItem {
	constructor(product, image = 'https://via.placeholder.com/200x150') {
		this.title = product.product_name;
		this.price = product.price;
		this.id = product.id_product;
		this.image = image;
	}
	render() {
		return `<div class="product-item" data-id="${this.id_product}">
			<img src="${this.image}" alt="#">
			<div class="info">
				<h3>${this.title}</h3>
				<p>${this.price}</p>
				<button class="btn-cart"
				data-id="${this.id_product}"
				data-name="${this.product_name}"
				data-price="${this.price}">Купить</button>
			</div>
		</div>`
	}
}

class Basket {
	constructor(container = '.basket-box') {
		this.container = container;
		this.products = [];
		this._clickBasket();
		this._getBasketItem()
			.then(data => {
				this.products = [...data.contents];
				this.render();
			});
	}

	// addToBasket(product) {
	// 	return fetch(`${API}/addToBasket.json`)
	// 		.then(data => {
	// 			if(data.result === 1){
	// 				let productId = +product.dataset['id'];

	// 			}
	// 		});
	// }

	_getBasketItem() {
		return fetch(`${API}/getBasket.json`)
			.then(result => result.json())
			.catch(error => {
				console.log(Error);
			});
	}
	render() {
		const block = document.querySelector(this.container);
		for (let product of this.products) {
			const productObj = new BasketItem();
			block.insertAdjacentHTML('beforeend', productObj.render(product));
		}
	}

	_clickBasket() {
		document.querySelector(".basket-btn").addEventListener('click', () => {
			document.querySelector(this.container).classList.toggle('invisible');
		});
	}
}

class BasketItem {
	render(product, image = 'https://placehold.it/50x100') {
		return `<div class="cart-item" data-id="${product.id_product}">
			<div class="cart-card">
				<img src="${this.image}" alt="#">
				<div class="cart-info">
					<h3 class="cart-title">${product.product_name}</h3>
					<p class="cart-quantity">Quantity: ${product.quantity}</p>
					<p class="cart-price">$${product.price}</p>
				</div>
			</div>
			<div class="cart-block">
				<p class ="cart-final-price">$${product.quantity * product.price}</p>
				<button class="cart-del" data-id="${product.id_product}">x</button>
			</div>
		</div>`
	}
}



let list = new ProductsList();
let cart = new Basket();
console.log(list.allProducts);

