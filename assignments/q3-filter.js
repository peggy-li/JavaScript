function filter (xs, condition) {
	var filtered = new Array();
	for (var x in xs) {
		if (condition(xs[x]) )
			filtered.push(xs[x]);
	}
	return filtered;
}
