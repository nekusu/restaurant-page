import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
import './style.css';
import Logo from './logo.png';

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
	ul.addEventListener('click', selectTab);
	ul.firstElementChild.click();
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
	const tabContent = document.querySelector('#content');
	const createFunctions = [createHome, createMenu, createContact];
	if (!tabContent.firstElementChild) {
		tabContent.appendChild(createFunctions[i]());
	} else if (tabContent.firstElementChild.dataset.id != i) {
		tabContent.replaceChild(createFunctions[i](), tabContent.firstElementChild);
	}
}

function createGithubButton() {
	const a = document.createElement('a');
	const img = document.createElement('img');
	a.id = 'github';
	a.href = 'https://github.com/nekusu';
	a.target = '_blank';
	a.title = 'Check my GitHub!';
	a.textContent = 'nekusu';
	a.classList.add('box');
	img.src = 'https://pngimg.com/uploads/github/github_PNG80.png';
	img.alt = 'GitHub';
	a.appendChild(img);
	return a;
}

function createFooter() {
	const footer = document.createElement('footer');
	footer.appendChild(createGithubButton());
	return footer;
}

document.body.insertBefore(createHeader(), document.body.firstElementChild);
document.body.appendChild(createFooter());
