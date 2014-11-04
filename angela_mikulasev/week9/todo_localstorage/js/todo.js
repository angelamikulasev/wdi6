// Make ul a variable - editing purposes
// Add event handler to save button - this will be the setItem
// Add event handler to the clear button -- this will be the reload
// If the list exists, show the info that has been stored in local storage, else the default content will load - this will be the getItem

$(document).ready (function () {
    var $ul = $('ul');

    $('#save').click(function() {
        localStorage.setItem('list', $ul.html());
    });

    $('#clear').click(function() {
        localStorage.clear('list');
        document.location.reload(); // reloads from the current url
    });

    if(localStorage.getItem('list')) {
        $ul.html(localStorage.getItem('list'));
    }
});