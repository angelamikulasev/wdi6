// create and use variables
// create and use functions

// Find the exchange rate between dollars and pounds
// Store the exchange rate in a variable
// Converting dollars to pounds:

// Store a dollar amount into a variable.
// Convert it to pounds and output "$NN is £NN".
// Converting pounds to dollars:

// Now store a pound amount into a variable.
// Convert it to dollar and output "£NN is $NN."
// Cleaning it up:

// Can you make sure the output is only 2 decimal places?
// Refactoring

// Can you refactor the code so that it uses functions? Write a function dollarsToPounds that takes a dollar number as input and outputs a string of what the pound equivalent is.
// Do the same for poundsToDollars

var exchangeRate = 0.54

var ausToPounds = function (aus) {
	var pounds = aus * exchangeRate
	console.log("$" + aus + " is £" + pounds);
}

ausToPounds(50);

var poundsToAus = function (pounds) {
	var aus = pounds / exchangeRate
	console.log("£" + pounds + " is $" + aus);
}

poundsToAus(50);