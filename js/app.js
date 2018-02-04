//HTML/CSS BASIC MANIPULATION
//appends an "active" class to .info and .info-content when the "Open" button is clicked
$("#infoButton").on("click", function(){
  $(".info-overlay, .info-content").addClass("active");
});

//removes the "active" class to .info and .info-content when the "Close" button is clicked 
$("#info-close, .info-overlay").on("click", function(){
  $(".info-overlay, .info-content").removeClass("active");
});

//make your canvas available in JS 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//height/width of canvas
canvas.width = 200;
canvas.height = 400;

var score = 0;
var collision = false;
var gameLost = false;
var gameWin = false;
var levelOne = null;
var levelTwo = null;
var levelThree = null;
var levelOneFrame = 25;
var levelTwoFrame = 20;
var levelThreeFrame = 15;

//froggo start coordinates
var x = 85;
var y = 370;

var level = 1;

//event listeners to start/reset game
var startButton = $('#startButton');

var beginGame = function() {
	win = false;
	window.addEventListener('keydown', hop);
	canvas.focus();
	levelOne = window.setInterval(gameLoop, levelOneFrame);
	//if statements to find out what level it is and then
	//displays stuff accordingly 

};

var gameOver = function() {
	//clear gameLoop intervals
	//display a modal displaying image of 
	//how frog died lmao rip 
};

var froggoDisplay = function () {
	var froggo = document.getElementById('froggo');
	ctx.drawImage(froggo, x, y, 35, 35);
	console.log('frog drawn');
}

var hop = function(e) {
	// ^
	if (e.keyCode === 38) {
		y -= 25;
	}
	// v
	if (e.keyCode === 40) {
		y += 25;
	}
	// < 
	if (e.keyCode === 37) {
		x -= 25; 
	}
	// >
	if (e.keyCode === 39) {
		x += 25;
	}
};


var gameLoop = function() {
	//clear between interval pops
	ctx.clearRect(0, 0, 200, 400);
	froggoDisplay();
}


$(document).ready(function() {
	startButton.on('click', beginGame);

});