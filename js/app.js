//HTML/CSS BASIC MANIPULATION
//appends an "active" class to .info and .info-content when the "Open" button is clicked
$("#infoButton").on("click", function(){
  $(".info-overlay, .info-content").addClass("active");
});

//removes the "active" class to .info and .info-content when the "Close" button is clicked 
$("#info-close, .info-overlay").on("click", function(){
  $(".info-overlay, .info-content").removeClass("active");
});

//////SPOT FOR IDEAS, DELETE FOR FINAL PRODUCT////
//perhaps to make gator blink / water shimmer / whatever 
//later on in the game, if the current frameRate is divisible
//by 500 equally it'll swap the img block 









//CANVAS MANIPULATION AND CREATION
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
var withinBounds = true;

//froggo start coordinates
var x = 85;
var y = 370;

//initialized counters
var level = 1;
var lives = 0;

//event listeners to start game
var startButton = $('#startButton');

//life icons
var livesArr = [
	{ type: 'life1', imgName: 'life', x: 145, y: 375, width: 25, height: 25},
	{ type: 'life2', imgName: 'life', x: 160, y: 375, width: 25, height: 25},
	{ type: 'life3', imgName: 'life', x: 175, y: 375, width: 25, height: 25}
]

//all safe static tiles to populate for levelOne
var levelOneStaticSafe = [
	{ type: 'lilypad1', imgName: 'lilypad', x: 40, y: 345, width: 25, height: 25 },
	{ type: 'lilypad2', imgName: 'lilypad', x: 90, y: 345, width: 25, height: 25 },
	{ type: 'lilypad3', imgName: 'lilypad', x: 140, y: 345, width: 25, height: 25 },
	{ type: 'lilypad4', imgName: 'lilypad', x: 65, y: 295, width: 25, height: 25 },
	{ type: 'lilypad5', imgName: 'lilypad', x: 110, y: 295, width: 25, height: 25 },
	{ type: 'lilypad6', imgName: 'lilypad', x: 90, y: 220, width: 25, height: 25 },
	{ type: 'lilypad7', imgName: 'lilypad', x: 65, y: 145, width: 25, height: 25 },
	{ type: 'lilypad8', imgName: 'lilypad', x: 110, y: 145, width: 25, height: 25 },
	{ type: 'lilypad9', imgName: 'lilypad', x: 90, y: 30, width: 25, height: 25 }
];

//all bad boy tiles to populate for levelOne 
var levelOneStaticBad = [
	{ type: 'gator1', imgName: 'gator1', x: 40, y: 220, width: 25, height: 25 },
	{ type: 'gator2', imgName: 'gator1', x: 140, y: 220, width: 25, height: 25 },
	{ type: 'gator3', imgName: 'gator1', x: 40, y: 30, width: 25, height: 25 },
	{ type: 'gator4', imgName: 'gator1', x: 140, y: 30, width: 25, height: 25 }
];

//all safe static tiles to populate for levelTwo
var levelTwoStaticSafe = [
	{ type: 'lilypad1', imgName: 'lilypad', x: 40, y: 345, width: 25, height: 25 },
	{ type: 'lilypad2', imgName: 'lilypad', x: 140, y: 345, width: 25, height: 25 },
	{ type: 'lilypad3', imgName: 'lilypad', x: 65, y: 295, width: 25, height: 25 },
	{ type: 'lilypad4', imgName: 'lilypad', x: 110, y: 295, width: 25, height: 25 },
	{ type: 'lilypad5', imgName: 'lilypad', x: 90, y: 220, width: 25, height: 25 },
	{ type: 'lilypad6', imgName: 'lilypad', x: 110, y: 145, width: 25, height: 25 },
	{ type: 'lilypad7', imgName: 'lilypad', x: 90, y: 30, width: 25, height: 25 }
];

//all bad boy tiles to populate for levelTwo
var levelTwoStaticBad = [
	{ type: 'gator1', imgName: 'gator1', x: 40, y: 220, width: 25, height: 25 },
	{ type: 'gator2', imgName: 'gator1', x: 140, y: 220, width: 25, height: 25 },
	{ type: 'gator3', imgName: 'gator1', x: 40, y: 30, width: 25, height: 25 },
	{ type: 'gator4', imgName: 'gator1', x: 140, y: 30, width: 25, height: 25 },
	{ type: 'gator5', imgName: 'gator1', x: 90, y: 345, width: 25, height: 25 },
	{ type: 'gator6', imgName: 'gator1', x: 65, y: 145, width: 25, height: 25 }
];

//all safe static tiles to populate for levelThree
var levelThreeStaticSafe = [
	{ type: 'lilypad1', imgName: 'lilypad', x: 140, y: 345, width: 25, height: 25 },
	{ type: 'lilypad2', imgName: 'lilypad', x: 65, y: 295, width: 25, height: 25 },
	{ type: 'lilypad3', imgName: 'lilypad', x: 90, y: 220, width: 25, height: 25 },
	{ type: 'lilypad4', imgName: 'lilypad', x: 110, y: 145, width: 25, height: 25 },
	{ type: 'lilypad5', imgName: 'lilypad', x: 90, y: 30, width: 25, height: 25 }
];

//all bad boy tiles to populate for levelThree
var levelThreeStaticBad = [
	{ type: 'gator1', imgName: 'gator1', x: 40, y: 220, width: 25, height: 25 },
	{ type: 'gator2', imgName: 'gator1', x: 140, y: 220, width: 25, height: 25 },
	{ type: 'gator3', imgName: 'gator1', x: 40, y: 30, width: 25, height: 25 },
	{ type: 'gator4', imgName: 'gator1', x: 140, y: 30, width: 25, height: 25 },
	{ type: 'gator5', imgName: 'gator1', x: 90, y: 345, width: 25, height: 25 },
	{ type: 'gator6', imgName: 'gator1', x: 40, y: 345, width: 25, height: 25 },
	{ type: 'gator7', imgName: 'gator1', x: 110, y: 295, width: 25, height: 25 }
	];

var checkBounds = function() {
	withinBounds = true;
	//this will check to make sure homie is within boundary 
	//of the gameboard
	if (x < -15 || x > 202) {
		console.log('froggo out of bounds!');
		withinBounds = false;
		//loseLife 
	}

	if (y > 390) {
		withinBounds = false;
		//loseLife
		console.log('froggo out of bounds!');
	}
}

var checkForGoal = function() {
	//this will check to see if froggo made it to
	//the other side!! 
	//if yes and not level 3, display 'next level' for 3 sec
	//if yes and level 3, display 'you won!' and score
	//if no, don't do anything
}

//displays safe static spots to walk on the board
var staticSafe = function(staticSafe) {
	for (var i = 0; i < staticSafe.length; i++) {
		var safeTile = document.getElementById(staticSafe[i].imgName);
		ctx.drawImage(safeTile, staticSafe[i].x, staticSafe[i].y, staticSafe[i].width, staticSafe[i].height);
	}
};

//displays bad boys on the board
var staticBad = function(staticBad) {
	for (var i = 0; i < staticBad.length; i++) {
		var badTile = document.getElementById(staticBad[i].imgName);
		ctx.drawImage(badTile, staticBad[i].x, staticBad[i].y, staticBad[i].width, staticBad[i].height);
	}
};


//displays the amount of lives left 
//eventually add function to detract from lives global var 
//every time it is necessary 
var lifeDisplay = function(livesArr, lives) {
	for (var i = 0; i < lives; i++) {
		var livesImg = document.getElementById(livesArr[i].imgName);
		ctx.drawImage(livesImg, livesArr[i].x, livesArr[i].y, livesArr[i].width, livesArr[i].height);
	}
}

//this adds all the event listeners, focuses onto the canvas
//for a better ux, and determines which level we are on so it 
//displays the right board 
var beginGame = function() {
	lives = 3;
	win = false;
	window.addEventListener('keydown', hop);
	canvas.focus();
	
	//if statements to find out what level it is and then
	//displays stuff accordingly 
	if (!levelOne && level===1) {
		levelOne = window.setInterval(gameLoop, levelOneFrame);
	} else if (!levelTwo && level===2) {
		levelTwo = window.setInterval(gameLoop, levelTwoFrame);
	} else if (!levelThree && level===3) {
		levelThree = window.setInterval(gameLoop, levelThreeFrame);
	};

};

var spaceStart = function(e) {
	if(e.keyCode === 32) {
		beginGame(); 
	}
}

var gameOver = function() {
	//clear gameLoop intervals
	//display a modal displaying image of 
	//how frog died lmao rip 
};

//initiates froggo
var froggoDisplay = function () {
	var froggo = document.getElementById('froggo');
	ctx.drawImage(froggo, x, y, 35, 35);
}

//specifics keydown values and how it affects froggo
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

//this is the animation loop initializer 
var gameLoop = function() {
	//clear between interval pops
	ctx.clearRect(0, 0, 200, 400);

	if (level === 1) {
		staticBad(levelOneStaticBad);
		staticSafe(levelOneStaticSafe);
	} else if (level === 2) {
		staticBad(levelTwoStaticBad);
		staticSafe(levelTwoStaticSafe);
	} else if (level === 3) {
		staticBad(levelThreeStaticBad);
		staticSafe(levelThreeStaticSafe);
	}
	
	froggoDisplay();
	checkBounds();
	lifeDisplay(livesArr, lives);
}


$(document).ready(function() {
	startButton.on('click', beginGame);
	window.addEventListener('keydown', spaceStart);
});