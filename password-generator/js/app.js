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

	app.elements.namedItem('btn-generate').addEventListener('click', function () {
		// alert('Generated Password');
		generatePassword();
	});

	app.elements
		.namedItem('input-password')
		.addEventListener('click', function () {
			copyPassword();
		});

	// <!-- ========== FUNCTIONS================================ -->

	function btnToggle(element) {
		element.classList.toggle('false');
		element.childNodes[0].classList.toggle('fa-check');
		element.childNodes[0].classList.toggle('fa-times');
	}

	function generatePassword() {
		let finalCharacters = '';
		let password = '';

		for (property in settings) {
			if (settings[property] == true) {
				finalCharacters += characters[property] + ' ';
			}
		}

		finalCharacters = finalCharacters.trim(); // (method) String.trim(): string. Removes the leading and trailing white space and line terminator characters from a string.
		finalCharacters = finalCharacters.split(' ');
		// Split a string into substrings using the specified separator and return them as an array.@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

		//* Since 'finalCharacters' is now an array we can iterate over it:

		for (let i = 0; i < settings.characters; i++) {
			password +=
				finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
		}
		// console.log(password);

		app.elements.namedItem('input-password').value = password;
	}

	function copyPassword() {
		app.elements.namedItem('input-password').select();
		document.execCommand('copy');
		document.getElementById('copied-alert').classList.add('active');

		setTimeout(function () {
			document.getElementById('copied-alert').classList.remove('active');
		}, 2000);
	}

	generatePassword();
    
})();
