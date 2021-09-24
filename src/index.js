import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
import './style.css';
import Logo from './logo.png';

const tabContent = document.querySelector('#content');

function createTabs() {
	const tabs = ['Home', 'Menu', 'Contact'];
	const listItems = [];
	for (let i = 0; i < tabs.length; i++) {
		const li = document.createElement('li');
		li.textContent = tabs[i];
		li.classList.add('tab');
		li.addEventListener('click', () => createContent(i));
		listItems.push(li);
	}
	return listItems;
}

function createHeader() {
	const header = document.createElement('header');
	const img = document.createElement('img');
	const ul = document.createElement('ul');
	img.id = 'logo';
	img.src = Logo;
	ul.id = 'tabs';
	createTabs().forEach(tab => ul.appendChild(tab));
	img.addEventListener('click', () => ul.firstElementChild.click());
	header.appendChild(img);
	header.appendChild(ul);
	return header;
}

function selectTab(e) {
	if (e.target !== this) {
		for (const tab of this.childNodes) {
			if (tab === e.target) {
				tab.classList.add('selected');
			} else {
				tab.classList.remove('selected');
			}
		}
	}
}

function createContent(i) {
	const createFunctions = [createHome, createMenu, createContact];
	if (!tabContent.firstElementChild) {
		tabContent.appendChild(createFunctions[i]());
	} else if (tabContent.firstElementChild.dataset.id != i) {
		tabContent.replaceChild(createFunctions[i](), tabContent.firstElementChild);
	}
}

document.body.insertBefore(createHeader(), tabContent);
tabs.addEventListener('click', selectTab);
tabs.firstElementChild.click();
