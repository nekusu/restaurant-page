import './contact.css';

function copyToClipboard(e) {
	const copy = document.createElement('span');
	const el = e.target;
	navigator.clipboard.writeText(el.lastChild.textContent);
	el.style.filter = 'blur(2.5px)';
	copy.classList.add('copy', 'box');
	copy.textContent = 'Copied!';
	document.body.appendChild(copy);
	copy.style.top = `${el.offsetTop + el.offsetHeight / 2 - copy.offsetHeight / 2}px`;
	copy.style.left = `${el.offsetLeft + el.offsetWidth / 2 - copy.offsetWidth / 2}px`;
	setTimeout(() => {
		el.style.filter = '';
		copy.remove();
	}, 1000);
}

function createContactInfo(text, icon) {
	const info = document.createElement('p');
	const infoIcon = document.createElement('span');
	infoIcon.textContent = icon;
	infoIcon.classList.add('material-icons-outlined');
	info.textContent = text;
	info.title = 'Click to copy';
	info.classList.add('contact-info');
	info.addEventListener('click', copyToClipboard);
	info.insertBefore(infoIcon, info.firstChild);
	return info;
}

function createForm() {
	const form = document.createElement('form');
	const paragraph = document.createElement('p');
	const input = document.createElement('input');
	const submit = document.createElement('input');
	paragraph.textContent = 'Leave us your email to receive exclusive promotions and discount coupons!';
	input.type = 'email';
	input.placeholder = 'Enter your email address';
	input.required = true;
	submit.value = 'Subscribe';
	submit.type = 'submit';
	[input, submit].forEach(el => el.classList.add('box'));
	[paragraph, input, submit].forEach(el => form.appendChild(el));
	return form;
}

function createContact() {
	const contact = document.createElement('div');
	const contactUs = document.createElement('div');
	const infoContainer = document.createElement('div');
	const phone = createContactInfo('+1-555-4444-333', 'phone');
	const email = createContactInfo('fakemail@burgerstore.com', 'email');
	const location = createContactInfo('160 Broadway, New York, NY 10038, United States', 'place');
	const form = createForm();
	contact.id = 'contact';
	contact.dataset.id = 2;
	contactUs.id = 'contact-us';
	contactUs.textContent = 'Contact us!';
	infoContainer.id = 'info-container';
	[phone, email, location].forEach(el => infoContainer.appendChild(el));
	[contactUs, infoContainer, form].forEach(el => contact.appendChild(el));
	return contact;
}

export default createContact;
