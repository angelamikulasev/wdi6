$(document).ready (function(){
	$('#search').on('click', searchFlickr);
	$('#clear').on('click', clearPhotos);
	$(window).on('scroll', maybeLoad);
});

var requestInProgress = false;
var requestNewPage = 1;
var endOfResults = false;

var nextPage = function() {
	requestNewPage = requestNewPage + 1;
}

var maybeLoad =  function() {
	if(requestInProgress || endOfResults) {
		return;
	}

	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	var windowHeight = $(window).height();

	if (scrollTop > docHeight - (3 * windowHeight)) {
		searchFlickr();
	};
};

var clearPhotos = function() {
	requestNewPage = 1;
	endOfResults = false
	$('#images').fadeIn();
	$('#images').empty();
};

var searchFlickr = function(event) {
	var query = $('#query').val();
	var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';
	requestInProgress = true;

	$.getJSON(flickrUrl, {
		method: 'flickr.photos.search',
		api_key: '2f5ac274ecfac5a455f38745704ad084',
		text: query,
		page: requestNewPage,
		format: 'json',
	}, processImages);
};

var processImages = function(result) {
	requestInProgress = false;
	nextPage();

	if(result.photos.photo.length === 0) {
		endOfResults = true;
		return;
	}

	if (result.stat != 'ok') {
		return;
	}

console.log(result.photos)

  _(result.photos.photo).each(function (photo) {  //builds the individual URL
  	var url = [
  	'https://farm', 
  	photo.farm, 
  	'.staticflickr.com/', 
  	photo.server,
  	'/',
  	photo.id,
  	'_',
  	photo.secret,
  	'_q.jpg'
  	].join(''); //joins parts all together
  	

  	$('<img>', { //shows images on page
  		src: url
  	}).appendTo('#images');
  });
};