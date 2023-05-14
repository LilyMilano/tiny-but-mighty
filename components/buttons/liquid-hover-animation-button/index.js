const btn = document.querySelector('.main_button_cont');
var last_five_positions = [
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
		'--directionAngle',
		angle_from_horizontal_axis_in_deg + 'deg'
	);

	// Sets the new values to CSS variables
	btn.style.setProperty('--cursorX', cursorX + 'px');
	btn.style.setProperty('--cursorY', cursorY + 'px');
	btn.style.setProperty('--followerX', last_five_positions[4][0] + 'px');
	btn.style.setProperty('--followerY', last_five_positions[4][1] + 'px');
});

function update_positions(new_position, last_five_positions) {
	last_five_positions[4] = last_five_positions[3]; // Makes fourth item fifth
	last_five_positions[3] = last_five_positions[2]; // Makes third item fourth
	last_five_positions[2] = last_five_positions[1]; // Makes second item third
	last_five_positions[1] = last_five_positions[0]; // Makes first item second
	last_five_positions[0] = new_position; // Gives the first item a new value
}

let slope, angle_from_horizontal_axis_in_deg;

function find_direction(position_initial, position_final) {
	// Finding the slope of the line by the formula: slope = (y2 - y1) / (x2 - x1)

	let slope =
		(position_final[1] - position_initial[1]) /
		(position_final[0] - position_initial[0]);

	// Find the angle using the formula: θ = arctan(slope)
	let angle_from_horizontal_axis = Math.atan(slope);

	// To convert radians to degrees, multiply by 180/π since a full circle is 360° = 2πradians:
	let angle_from_horizontal_axis_in_deg =
		(angle_from_horizontal_axis * 180) / Math.PI;

	return angle_from_horizontal_axis_in_deg;
}

// When the cursor is still
var timeout;
btn.onmousemove = function () {
	clearTimeout(timeout);
	timeout = setTimeout(function () {
		// To set the position of the follower same as the main cursor when cursor is not moving
		btn.style.setProperty('--followerX', last_five_positions[0][0] + 'px');
		btn.style.setProperty('--followerY', last_five_positions[0][1] + 'px');

		// Make the cursor a perfect circle
		btn.style.setProperty('followerWidth', '10px');
	}, 0);
};
