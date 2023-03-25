const btn = document.querySelector('.main_button_cont');
let last_five_positions = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

// When the cursor is moving
let rect, cursorX, cursorY, angle_from_horizontal_axis;

btn.addEventListener('mousemove', (e) => {
	// Make the cursor follower an ellipse
	btn.style.setProperty('--followerWidth', '12px');

	// Gets the cursor position
	rect = e.currentTarget.getBoundingClientRect();
	cursorX = e.clientX - rect.left;
	cursorY = e.clientY - rect.top;

	// Updates the last five position array
	update_positions([cursorX, cursorY], last_five_positions);

	// Changing the direction of follower
	angle_from_horizontal_axis_in_deg = find_direction(
		last_five_positions[4],
		last_five_positions[0]
	);

	btn.style.setProperty(
		'--direction_angle',
		angle_from_horizontal_axis_in_deg + 'deg'
	);

	// Sets the new values to CSS variables
	// Sets the new values to CSS variables
	btn.style.setProperty('--cursorX', cursorX + 'px');
	btn.style.setProperty('--cursorY', cursorY + 'px');
	btn.style.setProperty('--followerX', last_five_positions[4][0] + 'px');
	btn.style.setProperty('--followerY', last_five_positions[4][1] + 'px');
});
