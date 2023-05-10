(function () {
	// <!-- ========== GENERAL VARIABLES AND OBJECTS========== -->

	const app = document.getElementById('app');
	const inputCharacters = document.getElementById('characters-number');

	let settings = {
		characters: parseInt(inputCharacters.value),
		symbols: true,
		numbers: true,
		uppercase: true,
		lowercase: true,
	};

	let characters = {
		numbers: '0 1 2 3 4 5 6 7 8 9',
		symbols: '! @ # $ % ^ & * ( ) _ - + ~ = { [ } ] ; : < , > . ? /',
		uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
	};

	// <!-- ========== EVENTS================================== -->

	// To prevent the app from executing a 'submit'____________
	app.addEventListener('submit', function (e) {
		e.preventDefault();
	});

	app.elements.namedItem('btn-plus-one').addEventListener('click', function () {
		settings.characters++;
		inputCharacters.value = settings.characters;
	});

	app.elements
		.namedItem('btn-minus-one')
		.addEventListener('click', function () {
			if (settings.characters > 1) {
				settings.characters--;
				inputCharacters.value = settings.characters;
			}
		});

	app.elements.namedItem('btn-symbols').addEventListener('click', function () {
		btnToggle(this);
		settings.symbols = !settings.symbols;
		console.log('Active symbols: ' + settings.symbols);
	});

	app.elements.namedItem('btn-numbers').addEventListener('click', function () {
		btnToggle(this);
		settings.numbers = !settings.numbers;
		console.log('Active numbers: ' + settings.numbers);
	});

	app.elements
		.namedItem('btn-uppercase')
		.addEventListener('click', function () {
			btnToggle(this);
			settings.uppercase = !settings.uppercase;
			console.log('Active uppercase: ' + settings.uppercase);
		});

	// <!-- ========== FUNCTIONS================================ -->

	function btnToggle(element) {
		element.classList.toggle('false');
		element.childNodes[0].classList.toggle('fa-check');
		element.childNodes[0].classList.toggle('fa-times');
	}
})();
