function reduce (xs, fn, seed) {
 	// NOTE: that seed is optional; you should give the appropriate default in the function body

  	var init = (typeof seed === "undefined") ? xs[0] : seed;
  	var i = (typeof seed === "undefined") ? 1 : 0;	

  	for (i; i < xs.length; i++)
  		init = fn(init, xs[i]);
  	return init;
}