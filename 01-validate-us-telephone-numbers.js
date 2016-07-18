function telephoneCheck(str) {

	var fourDigits = new RegExp(/\d\d\d\d/);
	var threeDigits = new RegExp(/\d\d\d/);
	var groupSeparator = new RegExp(/ |-/);
	var parenthesis = new RegExp(/\(\d\d\d\)/)
	var notDigit = new RegExp(/\D/);

	str = str.split("");

	// Check for digits in last 4
	if (!fourDigits.test(str.slice(-4).join(""))) {
		console.log("returning false for the above value");
		return false;
	} else {
		console.log("meets criteria, taking off last 4 numbers")
		str.splice(-4)
		console.log(str);
	}

	// Check for optional space or dash
	if (groupSeparator.test(str.slice(-1).join(""))) {
		console.log("found acceptable space or dash. Removing.");
		str.splice(-1);
		console.log(str);
	}

	// Check for digits in next 3 characters
	if (threeDigits.test(str.slice(-3).join(""))) {
		console.log("meets criteria, taking off last 3 numbers")
		str.splice(-3)
		console.log(str);
	} else {
		console.log("returning false for the above value");
		return false;
	}

	if (str.length < 1) {
		console.log("too short, returning false");
		return false;
	}

	// Check for optional space or dash
	if (groupSeparator.test(str.slice(-1).join(""))) {
		console.log("found acceptable space or dash. Removing.");
		str.splice(-1);
		console.log(str);
	}

	//Parenthesis check
	if (str.indexOf("(") !== -1 && str.indexOf(")") !== str.indexOf("(") + 4) {
		console.log("issue with parenthesis, returning false");
		return false;
	}

	if (str.indexOf(")") !== -1 && (str.indexOf("(") !== str.indexOf(")") - 4 || str.length < 5)) {
		console.log("issue with parenthesis, returning false");
		return false;
	}

	if (parenthesis.test(str.slice(-5).join(""))) {
		console.log("found acceptable parenthesis, removing now");
		str.splice(-5,1);
		str.splice(-1);
		console.log(str);
	}

	// Check for optional space or dash
	if (groupSeparator.test(str.slice(-1).join(""))) {
		console.log("found acceptable space or dash. Removing.");
		str.splice(-1);
		console.log(str);
	}

	// Check for area code
	if (threeDigits.test(str.slice(-3).join(""))) {
		console.log("meets criteria, taking off last 3 numbers")
		str.splice(-3)
		console.log(str);
	}

	// If it's empty, it's good
	if (str.length < 1) {
		console.log("this one checks out, returning true");
		return true;
	}

	// Check for optional space or dash
	if (groupSeparator.test(str.slice(-1).join(""))) {
		console.log("found acceptable space or dash. Removing.");
		str.splice(-1);
		console.log(str);
	}

	// Check for country code
	if (str.length === 1 && str[0] === "1") {
		console.log("this one checks out, returning true");
		return true;
	} else {
		console.log("country code appears to be incorrect");
		return false;
	}
}
