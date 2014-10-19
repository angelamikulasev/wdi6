lines = {
	'n': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	'l': ['8th', '6th', 'Union Square', '3rd', '1st'],
	'6': ['Grand Central', '33rd', '28th', 'Union Square', 'Astor Place']
};

var departureLine = prompt('Enter a departure line:' + Object.keys(lines).join(', '));
var departureStations = lines[departureLine];

var departureStation = prompt('Enter a departure station: ' + departureStations.join(', '));

var destinationLine = prompt('Enter a destination line: ' + Object.keys(lines).join(', '));
destinationStations = lines[destinationLine];

var destinationStation = prompt('Enter a destination station: ' + destinationStations.join(', '));

var numberOfStations = Math.abs((departureStations.indexOf('Union Square') - departureStations.indexOf(departureStation))) + Math.abs((destinationStations.indexOf('Union Square') - destinationStations.indexOf(destinationStation)));

console.log('Total number of stations via Union Square: ' + numberOfStations + '.');



// function Mta(departureLine, departureStation, destinationLine, destinationStation) {
//   this.departureLine = depatureLine;
//   this.departureStation = departureStation;
//   this.destinationLine = destinationLine;
//   this.destinationStation = destinationStation;

//   this.depatureStations = function() { Mta.lines[destinationLine]; }
//   this.destinationStations = function() { Mta.lines[destinationLine]; }

//   this.numberOfStations = function() { Math.abs((this.departureStations().indexOf('Union Square') - this.departureStations().indexOf(this.departureStation))) + Math.abs((this.destinationStations().indexOf('Union Square') - destinationStations().indexOf(this.destinationStation))); };
// }

// Mta.lines = {
// 	'n': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
// 	'l': ['8th', '6th', 'Union Square', '3rd', '1st'],
// 	'6': ['Grand Central', '33rd', '28th', 'Union Square', 'Astor Place']
// };

// mta = Mta.new()
// mta.numberOfStations();
