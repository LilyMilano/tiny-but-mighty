const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');

getNotes().forEach((note) => {
	const noteEl = createNoteEl(note.id, note.content);
	appEl.insertBefore(noteEl, btnEl);
});

// :::::::::::::::::CREATE:::::::::::::::::::::::::::::::::::::::::::::

function createNoteEl(id, content) {
	// console.log(id, content);
	const element = document.createElement('textarea');
	element.classList.add('note');
	element.placeholder = 'Empty Note';
	element.value = content;

	element.addEventListener('dblclick', () => {
		const warning = confirm('Do you want to delete this note?');
		if (warning) {
			deleteNote(id, element);
		}
	});

	element.addEventListener('input', () => {
		updateNote(id, element.value);
	});

	return element;
}

// :::::::::::::::::DELETE:::::::::::::::::::::::::::::::::::::::::::::

function deleteNote(id, element) {
	const notes = getNotes().filter((note) => note.id !== id);
	saveNote(notes);
	appEl.removeChild(element);
}

// :::::::::::::::::UPDATE:::::::::::::::::::::::::::::::::::::::::::::

function updateNote(id, content) {
	const notes = getNotes();
	const target = notes.filter((note) => note.id == id)[0];
	target.content = content;
	saveNote(notes);
}

// :::::::::::::::::ADD::::::::::::::::::::::::::::::::::::::::::::::::

function addNote() {
	// console.log('clicked');
	const notes = getNotes();

	const noteObj = {
		id: Math.floor(Math.random() * 10000),
		content: '',
	};
	// console.log(noteObj);
	const noteEl = createNoteEl(noteObj.id, noteObj.content);
	appEl.insertBefore(noteEl, btnEl);

	notes.push(noteObj);

	saveNote(notes);
}

// :::::::::::::::::SAVE-SET STORAGE::::::::::::::::::::::::::::::::::::

function saveNote(notes) {
	localStorage.setItem('note-app', JSON.stringify(notes));
}

// :::::::::::::::::GET FROM STORAGE::::::::::::::::::::::::::::::::::::

function getNotes() {
	return JSON.parse(localStorage.getItem('note-app') || '[]');
}

// :::::::::::::::::BUTTOM EVENT LISTENER:::::::::::::::::::::::::::::::

btnEl.addEventListener('click', addNote);
