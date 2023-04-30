let buttonEl = document.querySelector('body a');

buttonEl.addEventListener('click', () => {
	const span = document.querySelector('a span');
	buttonEl.style.paddingRight = '10px';
	span.style.visibility = 'visible';
	setTimeout(() => {
		span.style.visibility = 'hidden';
		buttonEl.style.transition = '0.3s ease-in-out';
		buttonEl.style.paddingRight = '0px';
	}, 3000);
});
