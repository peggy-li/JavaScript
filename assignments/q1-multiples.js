// Find the sum of all positive multiples of 3 or 5 below a specified number (limit).

function multiples (limit) {
	var sum = 0;
	for (var i = 1; i < limit; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum = sum + i;
		}
	}
	return sum;
}