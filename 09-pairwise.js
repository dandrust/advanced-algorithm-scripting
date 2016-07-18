function pairwise(inputArr, targetSum) {

	var usedArr = [];
	for (var i = 0; i < inputArr.length; i++) {
		usedArr.push(false);
	}
	var indexBuffer = [];

	var stopLogging = false;

	for (var i1 = 0; i1 < inputArr.length; i1++) { //cycle through all elements in array (unless they're taken)
		var value1 = inputArr[i1];
		if (usedArr[i1]) {
		} else {
			usedArr[i1] = true;
			for (var i2 = 0; i2 < inputArr.length; i2++) { //cycle through the rest of the elements in the array (unless taken)
				var value2 = inputArr[i2];
				if (usedArr[i2]) {
				} else {
					if (value1 + value2 === targetSum && !stopLogging) { //if they equal target sum, mark both as true in usedArr
						usedArr[i1] = true;
						usedArr[i2] = true;
						indexBuffer.push(i1);
						indexBuffer.push(i2);
						stopLogging = true;

					}
				}


			}
			stopLogging = false;

			if (indexBuffer.indexOf(i1) === -1) {
				usedArr[i1] = false;
			}
			
		}

	}
	var result = indexBuffer.reduce(function(a, b){return a + b;},0);
    return result;
}
