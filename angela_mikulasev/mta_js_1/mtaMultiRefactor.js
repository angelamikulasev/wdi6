function CityRail() {
  this.setDepartureLine = function(departureLine) { return this.departureLine = departureLine; }
  this.departureStations = function() { return CityRail.lines[this.departureLine]; }
  this.setDepartureStation = function(departureStation) { return this.departureStation = departureStation; }

  this.setDestinationLine = function(destinationLine) { this.destinationLine = destinationLine; }
  this.destinationStations = function() { return CityRail.lines[this.destinationLine]; }
  this.setDestinationStation = function(destinationStation) { return this.destinationStation = destinationStation; }

  this.numberOfStationsToCentral = function() { return Math.abs((this.departureStations().indexOf('Union Square') - this.departureStations().indexOf(this.departureStation))); }
  this.numberOfStationsFromCentral = function() { return Math.abs((this.destinationStations().indexOf('Union Square') - this.destinationStations().indexOf(this.destinationStation))); }

  this.numberOfStations = function() {
  	if (this.departureLine === this.destinationLine) {
  	  return this.staNumberOfStations();
  	} else {
      return this.mtaNumberOfStations();
  	}
  }

  this.staNumberOfStations = function() { return Math.abs(this.departureStations().indexOf(this.destinationStation) - this.departureStations().indexOf(this.departureStation)); }
  this.mtaNumberOfStations = function() { return this.numberOfStationsToCentral() + this.numberOfStationsFromCentral(); }
}

CityRail.lines = {
	'n': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	'l': ['8th', '6th', 'Union Square', '3rd', '1st'],
	'6': ['Grand Central', '33rd', '28th', 'Union Square', 'Astor Place']
};
    
var cityRail = new CityRail();

var departureLine = prompt('Enter a departure line:' + Object.keys(CityRail.lines).join(', '));
cityRail.setDepartureLine(departureLine);

var departureStation = prompt('Enter a departure station: ' + cityRail.departureStations().join(', '));
cityRail.setDepartureStation(departureStation);

var destinationLine = prompt('Enter a destination line: ' + Object.keys(CityRail.lines).join(', '));
cityRail.setDestinationLine(destinationLine);

var destinationStation = prompt('Enter a destination station: ' + cityRail.destinationStations().join(', '));
cityRail.setDestinationStation(destinationStation);

console.log('Total number of stations: ' + cityRail.numberOfStations() + '.');
