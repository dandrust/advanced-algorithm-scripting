function makeFriendlyDates(arr) {

	//Set variables for current date and dates passed to function
	var today = new Date();
	var currentMonth = today.getMonth();
	var currentDate = today.getDate();
	var currentYear = today.getFullYear();
	var startDateMonth = parseInt(arr[0].slice(5,7));
	var startDateDate = parseInt(arr[0].slice(-2));
	var startDateYear = parseInt(arr[0].slice(0,4));
	var endDateMonth = parseInt(arr[1].slice(5,7));
	var endDateDate = parseInt(arr[1].slice(-2));
	var endDateYear = parseInt(arr[1].slice(0,4));

	// Define function to convert cardinal numbers to ordinal numbers
	function ordinalDate(date) {
		if (date === 1 || date === 21 || date === 31) {
			return date + "st";
		} else if (date === 2 || date === 22) {
			return date + "nd";
		} else if (date ===3 || date === 23) {
			return date + "rd";
		} else {
			return date + "th";
		}
	}

	// Define funciton to convert number month to string month name
	function monthName(month) {
		var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months[month];
	}


	var toPrint = [true, true, true, true, true, true];

	if (arr[0] === arr[1]) {
		toPrint[3] = false;
		toPrint[4] = false;
		toPrint[5] = false;
	}

	if (startDateYear === endDateYear || endDateYear === startDateYear + 1) {
		toPrint[5] = false;
		if (startDateMonth === endDateMonth && endDateDate > startDateDate){
			toPrint[3] = false;
		}
	}

	if (startDateYear === currentYear && toPrint[5] === false) {
		toPrint[2] = false;
	}

	if (startDateMonth === endDateMonth && startDateDate === endDateDate){
		toPrint[5] = true;
	}


	// Build friendly date strings
	var startDateStr = "";
	var endDateStr = "";

	if (toPrint[0]) {
		startDateStr += monthName(startDateMonth) + " ";
	}
	if (toPrint[1]) {
		startDateStr += ordinalDate(startDateDate);
	}
	if (toPrint[2]) {
		startDateStr += ", " + startDateYear;
	}

	if (toPrint[3]) {
		endDateStr += monthName(endDateMonth) + " ";
	}
	if (toPrint[4]) {
		endDateStr += ordinalDate(endDateDate);
	}
	if (toPrint[5]) {
		endDateStr += ", " + endDateYear;
	}
			
	if (arr[0] === arr[1]) {
		console.log([startDateStr]);
		return [startDateStr];
	} else {
		console.log([startDateStr, endDateStr]);
		return [startDateStr, endDateStr];
	}

}
