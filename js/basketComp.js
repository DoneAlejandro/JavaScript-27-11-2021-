'use strict';


const basketItem = {
	props: ['basket-item', 'img'],
	template: `
					<div class="basket-item">
						<div class="basket-product">
							<img :src="img" alt="#">
							<div class="product-desc">
								<div class="product-title">{{ basket_item.product_name }}</div>
								<div class="product-quantity">Quantity: {{ basket_item.quantity }}</div>
								<div class="product-single-price">$ {{ basket_item.price }} each</div>
							</div>
						</div>

						<div class="basket-info">
							<div class="product-price">{{ basket_item.quantity * basket_item.price }}</div>
							<button class="cart-del" @click="$root.$refs.basket.remove(basket_item)">x</button>
						</div>
					</div>
	`
}
const basket = {
	components: { 'basket-item': basketItem },
	data() {
		return {
			basketUrl: '/getBasket.json',
			basketImage: 'https://via.placeholder.com/50x100',
			basketItems: [],
			showBasket: false
		}
	},
	methods: {
		addProduct(product) {
			this.$parent.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						let find = this.basketItems.find(el => el.id_product === product.id_product);
						if (find) {
							find.quantity++;
						} else {
							const prod = Object.assign({ quantity: 1 }, product);
							this.basketItems.push(prod)
						}
					} else {
						console.log('Error')
					}
				});
		},
		remove(product) {
			this.$parent.getJson(`${API}/deleteFromBasket.json`)
				.then(data => {
					if (data.result === 1) {
						if (product.quantity > 1) {
							product.quantity--;
						} else {
							this.basketItems.splice(this.basketItems.indexOf(product), 1);
						}
					}
				});
		}
	},
	mounted() {
		this.$parent.getJson(`${API + this.basketUrl}`)
			.then(data => {
				for (let el of data) {
					this.basketItems.push(el);
					this.basketItems.push(el);
				}
			})
	},
	template: `
			<div>
	  			<button class="basket-btn" type="button" @click="showBasket = !showBasket">Корзина</button>
				<div class="basket-box" v-show="showBasket">
					<basket-item v-for="product of basketItems">
						:key="product.id_product"
						:img="basketImage"
						:basket_item="product"
					</basket-item>
					
				</div>
			</div>
	  `
}