import './menu.css';

function createFoodBox(food, i) {
	const foodBox = document.createElement('div');
	const foodName = document.createElement('div');
	const foodDescription = document.createElement('div');
	const foodPriceOrder = document.createElement('div');
	const foodPrice = document.createElement('div');
	const foodOrder = document.createElement('button');
	foodBox.classList.add('food', 'box');
	foodBox.style.animation = `${i * 0.2}s hidden, 1s move-in ${i * 0.2}s`
	foodName.textContent = food.name;
	foodName.classList.add('name');
	foodDescription.textContent = food.description;
	foodDescription.classList.add('description');
	foodPriceOrder.classList.add('price-order');
	foodPrice.textContent = `$${food.price}`;
	foodPrice.classList.add('price');
	foodOrder.textContent = 'Order';
	foodOrder.classList.add('order', 'box');
	[foodPrice, foodOrder].forEach(el => foodPriceOrder.appendChild(el));
	[foodName, foodDescription, foodPriceOrder].forEach(el => foodBox.appendChild(el));
	return foodBox;
}

function createMenu() {
	const menu = document.createElement('div');
	const foodMenu = [
		{ name: 'Classic', description: 'Lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 2 },
		{ name: 'Double Classic', description: 'Two flame-grilled beef patties, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 4 },
		{ name: 'Black Jack', description: 'Blackened beef, pepper jack cheese, lettuce, tomato, creole mayo', price: 3 },
		{ name: 'Bacon Cheddar', description: 'Cheddar cheese, bacon, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 5 },
		{ name: 'Southwest BBQ', description: 'Cheddar cheese, bacon, onion straws, BBQ sauce, chipotle mayo, lettuce, tomato, pickles', price: 8 },
		{ name: 'Black & Bleu', description: 'Blackened beef, crumbled blue cheese, bacon, lettuce, tomato, red onion, mayo', price: 6 },
	]
	const foodBoxes = foodMenu.map((food, i) => createFoodBox(food, i));
	menu.id = 'menu';
	menu.dataset.id = 1;
	foodBoxes.forEach(box => menu.appendChild(box));
	return menu;
}

export default createMenu;
