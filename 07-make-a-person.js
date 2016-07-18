var Person = function (firstAndLast) {


	firstAndLast = firstAndLast.split(" ");
	var firstName = firstAndLast[0];
	var lastName = firstAndLast[1];

	this.getFirstName = function () {
		console.log(firstName);
		return firstName;
	};

	this.getLastName = function () {
		console.log(lastName);
		return lastName;
	};

	this.getFullName = function () {
		console.log(firstName + " " + lastName);
		return firstName + " " + lastName;
	};

	this.setFirstName = function (first) {
		firstName = first;
		console.log(firstName);
		return firstName;
	};

	this.setLastName = function (last) {
		lastNameastName = last;
		console.log(lastName);
		return lastName;
	};

	this.setFullName = function (full) {
		var firstAndLast = full.split(" ");
		firstName = firstAndLast[0];
		lastName = firstAndLast[1];
		console.log(fullName);
		return fullName;
	};


};
