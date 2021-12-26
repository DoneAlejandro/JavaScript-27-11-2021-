'use strict';


Vue.component('search-form', {
   data() {
      return {
         userSearch: ''
      }
   },
   template: `<form action="#" method="post" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch" placeholder="Введите название товара">
                <button class="btn-search" type="submit">
					 Поиск
                </button>
            </form>`
});