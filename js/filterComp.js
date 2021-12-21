'use strict';


const filter_el = {
	data() {
		return {
			userSearch: ''
		}
	},
	template: `
				<form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
					<input type="text" class="search-field" v-model="userSearch" placeholder="Введите название товара">
					<button class="btn-search" type="submit">Поиск</button>
				</form>
	`
}