function updateInventory(currentInventory, shippment) {
    var currentItems = currentInventory.reduce(function(a, b){return a.concat([b[1]]);},[]);

	console.log(currentItems);

	shippment.forEach(function(val){

		if (currentItems.indexOf(val[1]) === -1){
			currentInventory.push(val);
		} else
			currentInventory[currentItems.indexOf(val[1])][0] += val[0];
	});

	currentInventory = currentInventory.sort(function(a, b){
		return a[1] > b[1];
	});

	console.log(currentInventory);
    return currentInventory;
}
