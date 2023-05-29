const hamburgerMenu = document.getElementsByClassName('hamburgerMenu')[0];
const mobileMenuWrapper =
	document.getElementsByClassName('mobileMenuWrapper')[0];

hamburgerMenu.addEventListener('click', showMobileMenu);

function showMobileMenu() {
	mobileMenuWrapper.classList.toggle('clicked');

	// Here, the "fa-xmark" class is for the X-mark in fontawesome and fa-bars is for hamburger menu icon

	// So this will switch between hamburger menu icon and x mark icon based on whether the menu is opened or closed
	hamburgerMenu.classList.toggle('fa-xmark');
	hamburgerMenu.classList.toggle('fa-bars');
}
