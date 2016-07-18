function sym(args) {

	var argumentArr = [...arguments];

	// Merge arrays into one symetrical difference array (return this)
	return argumentArr.reduce(function(a, b){
		var symDiffArr = [];
		// Filter arrays for duplicate values
		a = a.filter(function(x, i){
			return a.slice(i + 1).indexOf(x);
		});

		b = b.filter(function(x, i){
			return b.slice(i + 1).indexOf(x);
		});

		symDiffArr = symDiffArr.concat(a.filter(function(x){return b.indexOf(x) === -1;}));
		console.log(symDiffArr);
		symDiffArr = symDiffArr.concat(b.filter(function(x){return a.indexOf(x) === -1;}));
		console.log(symDiffArr);
		return symDiffArr;
	}).sort();

}
