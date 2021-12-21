'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		products: [],
		filtered: [],
		catalogUrl: '/catalogData.json',
		productImage: 'https://via.placeholder.com/200x150',
		userSearch: '',
		showBasket: false

	},
	components: { basket, products, filter_el },
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					console.log(error);
				});
		},

		addProduct(product) {
			console.log(product.id_product);
		},
	},
	mounted() {
		console.log(this);
	}
});

