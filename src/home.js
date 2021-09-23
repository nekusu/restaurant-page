import './home.css';
import Burger from './burger.png';


function createHome() {
	const home = document.createElement('div');
	const container = document.createElement('div');
	const title = document.createElement('p');
	const titleSpan = document.createElement('span');
	const paragraph = document.createElement('p');
	const button = document.createElement('button');
	const img = document.createElement('img');
	home.id = 'home';
	home.dataset.id = 0;
	container.id = 'container';
	title.id = 'title';
	title.textContent = 'Order Juicy & Scrummy Food ';
	titleSpan.textContent = 'anytime!';
	title.appendChild(titleSpan);
	paragraph.id = 'description';
	paragraph.textContent = 'Just confirm your order and enjoy our delicious fastest delivery.'
	button.id = 'order';
	button.classList.add('box');
	button.textContent = 'Order Now';
	button.addEventListener('click', () => tabs.childNodes[1].click());
	[title, paragraph, button].forEach(el => container.appendChild(el));
	img.src = Burger;
	home.appendChild(container);
	home.appendChild(img);
	return home;
}

export default createHome;
