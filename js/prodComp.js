'use strict';


const product = {
	props: ['img', 'product'],
	template: `
				<div class="product-item">
					<img :src="img" alt="#">
					<div class="product-info">
						<h3>{{ product.product_name }}</h3>
						<p>{{ product.price }} $</p>
						<button class="btn-cart" @click="$root.$refs.basket.addProduct(product)">Купить</button>
					</div>
				</div>
	`
}

const products = {
	components: { product },
	data() {
		return {
			catalogUrl: '/catalogData.json',
			productImage: 'https://via.placeholder.com/200x150',
			products: [],
			filtered: []
		}
	},
	mounted() {

		console.log(this.$root.$refs)

		this.$parent.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let el of data) {
					this.products.push(el);
					this.filtered.push(el);
				}
			});
		this.$parent.getJson(`getProducts.json`)
			.then(data => {
				for (let el of data) {
					this.products.push(el);
					this.filtered.push(el);
				}
				console.log(this.filtered)
			});
	},
	methods: {
		filter(val) {
			const regExp = new RegExp(val, 'i');
			this.filtered = this.products.filter(el => regExp.test(el.product_name));
		}
	},
	template: `
			<div class="products">
				<product v-for="product of filtered" 
				:img="productImage"
				:product="product"></product>
			</div>
	`
}