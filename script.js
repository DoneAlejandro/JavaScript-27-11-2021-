'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		products: [],
		filtered: [],
		basketItems: [],
		catalogUrl: '/catalogData.json',
		basketUrl: '/getBasket.json',
		productImage: 'https://via.placeholder.com/200x150',
		basketImage: 'https://via.placeholder.com/50x100',
		userSearch: '',
		showBasket: false

	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					console.log(error);
				});
		},

		addProduct(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						let find = this.basketItems.find(el => el.id_product === item.id_product);
						if (find) {
							find.quantity++;
						} else {
							const prod = Object.assign({ quantity: 1 }, item);
							this.basketItems.push(prod)
						}
					}
				});
		},

		remove(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						if (item.quantity > 1) {
							item.quantity--;
						} else {
							this.basketItems.splice(this.basketItems.indexOf(item), 1);
						}
					}
				});
		},

		filter() {
			const regexp = new RegExp(this.userSearch, 'i');
			this.filtered = this.products.filter(el => regexp.test(el.product_name));
		}

	},
	mounted() {
		this.getJson(`${API + this.basketUrl}`)
			.then(data => {
				for (let item of data.contents) {
					this.basketItems.push(item);
				}
			});
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let item of data) {
					this.products.push(item);
					this.filtered.push(item);
				}
			});
	}
});

