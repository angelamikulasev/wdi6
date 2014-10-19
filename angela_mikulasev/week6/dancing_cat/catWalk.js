// inside function are ids and elements
function CatWalk(catId, startId, goFasterId, stopId) {
  this.speed = 0;
  this.imageEl = document.getElementById(catId);

  var startEl = document.getElementById(startId);
  var goFasterEl = document.getElementById(goFasterId);
  var stopEl = document.getElementById(stopId);


// 'this' is determined by how a function is called
//speed for buttons
  this.onStart = function() {
    this.speed = 5;
  }

  this.onGoFaster = function() { 
    if(this.speed > 0) {
      this.speed += 10;
    } else {
      this.speed -= 10;
    }
  }

  this.onStop = function() {
    this.speed = 0;
  }


  // BIND creates a new function that, when called, has its THIS keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called

  // addEventListener attaches an event handler to the document
  // button click
  startEl.addEventListener('click', this.onStart.bind(this));
  goFasterEl.addEventListener('click', this.onGoFaster.bind(this));
  stopEl.addEventListener('click', this.onStop.bind(this));

// flip image when hits edge of the screen
  this.walk = function() {
    var currentLeft = parseInt(this.imageEl.style.left) || 0;  //parseInt() function parses a string and returns an integer
    var currentRight = currentLeft + 296;

    if(currentRight >= window.innerWidth) {
      this.speed *= -1;
      this.imageEl.className = 'walk-left'; // link to flip style
    } else if (currentLeft < 0) {
      this.speed *= -1;
      this.imageEl.className = 'walk-right';
    }

    var newLeft = currentLeft + this.speed;
    this.imageEl.style.left = newLeft + 'px';  // The HTMLElement.style property returns a CSSStyleDeclaration object that represents the element's style attribute.
  }

  setInterval(this.walk.bind(this), 100); //setInterval() method calls a function or evaluates an expression at specified intervals(ms) 
}