const products = [
	{ id: 1, image: src = 'images/note.jpg', title: 'Notebook', price: 2000 },
	{ id: 2, image: src = 'images/mouse.jpg', title: 'Mouse', price: 20 },
	{ id: 3, image: src = 'images/keyboard.jpg', title: 'Keyboard', price: 200 },
	{ id: 4, image: src = 'images/gamepad.jpg', title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (image, title, price) => {
	return `<div class="product-item">
					 <img src="${image}" alt="#">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
//  Убрал запятые, вызванные методом map c помощью join
const renderPage = list => {
	const productsList = list.map(item => renderProduct(item.image, item.title, item.price)).join('');
	console.log(productsList);
	document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);