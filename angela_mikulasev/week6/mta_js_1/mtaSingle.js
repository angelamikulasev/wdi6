lines = {
	'n': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	'l': ['8th', '6th', 'Union Square', '3rd', '1st'],
	'6': ['Grand Central', '33rd', '28th', 'Union Square', 'Astor Place']
};

var departureLine = prompt('Enter a line to travel on: ' + Object.keys(lines).join(', '));
var stations = lines[departureLine];

var departureStation = prompt('Enter a departure station: ' + stations.join(', '));

var destinationStation = prompt('Enter a destination station: ' + stations.join(', '));

var numberOfStations = Math.abs(stations.indexOf(destinationStation) - stations.indexOf(departureStation));

console.log('Total number of stations: ' + numberOfStations + '.');