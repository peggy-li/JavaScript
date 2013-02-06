function map (xs, fn) {
  	var trans = new Array();
 	for (var x in xs) {
		trans.push(fn(xs[x]));
  	}
  	return trans;
}