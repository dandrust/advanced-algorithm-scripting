function checkCashRegister(price, cash, cid) {
	//Define variables
	var changeDue = cash - price;
	var change = [["PENNY", 0],
				  ["NICKEL", 0],
				  ["DIME", 0],
				  ["QUARTER", 0],
				  ["ONE", 0],
				  ["FIVE", 0],
				  ["TEN", 0],
				  ["TWENTY", 0],
				  ["ONE HUNDRED", 0]];
	var cidTotal = cid.reduce(function(a, b){return a.concat(b[1]);},[]).reduce(function(a, b){return a + b;});

	if (changeDue > cidTotal) {
		return "Insufficient Funds";
	} else if (changeDue === cidTotal) {
		return "Closed";
	} else {
		var denom = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
		for (i = 8; i >= 0; i--){
			calculateChange(i, denom[i]);
		}
		change = change.filter(function(val){return val[1] > 0;}).reverse();

		var changeTotal = change.reduce(function(a, b){return a.concat(b[1]);},[]).reduce(function(a, b){return a + b;});
		if (changeTotal < cash - price) {
			console.log("Insufficient Funds");
			return "Insufficient Funds";
		}
	}

	function calculateChange(arrayIndex, denomination) {
		while (changeDue >= denomination && cid[arrayIndex][1] >= denomination) {
			cid[arrayIndex][1] -= denomination;
			change[arrayIndex][1] += denomination;
			changeDue -= denomination;
			changeDue = parseFloat(changeDue.toFixed(2));
		}
	}
	
	return change;
}
