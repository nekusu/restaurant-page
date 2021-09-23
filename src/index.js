import './style.css';
import Logo from './logo.png';

const tabContent = document.querySelector('#content');

function createHeader() {
	const header = document.createElement('header');
	const img = document.createElement('img');
	const ul = document.createElement('ul');
	const tabs = ['Home', 'Menu', 'Contact'];
	img.id = 'logo';
	img.src = Logo;
	ul.id = 'tabs';
	for (const tab of tabs) {
		const li = document.createElement('li');
		li.textContent = tab;
		li.classList.add('tab');
		ul.appendChild(li);
	}
	header.appendChild(img);
	header.appendChild(ul);
	return header;
}

function selectTab(e) {
	if (e.target !== this) {
		for (const tab of this.childNodes) {
			if (tab === e.target) {
				tab.classList.add('selected')
			} else {
				tab.classList.remove('selected')
			}
		}
	}
}

document.body.insertBefore(createHeader(), tabContent);
tabs.addEventListener('click', selectTab);
