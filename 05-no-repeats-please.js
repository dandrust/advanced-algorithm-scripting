function permAlone(str) {

	// Create strBuffer to hold permutation and set it to empty strings equal to length of string
	var strBuffer = [];
	
	// Create boolean array to keep track of use of letters
	var usedArr = [];
	for (i = 0; i < str.length; i++) {
		usedArr.push(false);
	}

	var resultArr = [];

	var length = str.length;

	permutation(str, length, strBuffer, usedArr, 0);

	function permutation(str, length, strBuffer, usedArr, position) {
		if (position === length){
			resultArr.push(strBuffer.join(""));

		} else {
			for (var i = 0; i < str.length; i++) {
				if (!usedArr[i]) {
					strBuffer.push(str.charAt(i))
					usedArr[i] = true;

					permutation(str, length, strBuffer, usedArr, position + 1);

					strBuffer.pop();
					usedArr[i] = false;

				}
			}
		}
	}

	var duplicateFinder = new RegExp(/(.)\1{1,}/);
	resultArr = resultArr.filter(function(val){
		return !duplicateFinder.test(val); //you DO NOT find a double letter in the string
	});
	return resultArr.length;


}
