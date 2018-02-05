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

var contScreen = $('.continue-content, .continue-screen');
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
var lives = 3;

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

//all logs displayed in levelOne
var levelOneMovingBad = [
	{ type: 'starter', imgName: 'longLog', x: 240, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog2', imgName: 'longLog', x: 40, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog3', imgName: 'longLog', x: 140, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'log1', imgName: 'log', x: -25, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log2', imgName: 'log', x: 20, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log3', imgName: 'log', x: 65, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'log4', imgName: 'log', x: 110, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'starter', imgName: 'log', x: 150, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'log6', imgName: 'log', x: -50, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log7', imgName: 'log', x: -5, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log8', imgName: 'log', x: 40, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 85, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log10', imgName: 'log', x: -5, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log12', imgName: 'log', x: 65, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'log13', imgName: 'log', x: -5, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'log15', imgName: 'log', x: 65, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'log16', imgName: 'log', x: -5, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 65, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log19', imgName: 'log', x: 190, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log20', imgName: 'log', x: 130, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log21', imgName: 'log', x: 245, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log22', imgName: 'log', x: 65, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'log23', imgName: 'log', x: 190, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'log24', imgName: 'log', x: 130, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'log', x: -5, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'longLog', x: 40, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog5', imgName: 'longLog', x: 140, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'starter', imgName: 'longLog', x: 165, y: 100, width: 50, height: 25, dx: 0.5},
	{ type: 'longLog7', imgName: 'longLog', x: 90, y: 100, width: 50, height: 25, dx: 0.5},
	{ type: 'longLog8', imgName: 'longLog', x: 20, y: 100, width: 50, height: 25, dx: 0.5}
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

//all logs displayed in levelTwo
var levelTwoMovingBad = [
	{ type: 'starter', imgName: 'longLog', x: 240, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog2', imgName: 'longLog', x: 40, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'log1', imgName: 'log', x: -25, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log2', imgName: 'log', x: 20, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log3', imgName: 'log', x: 65, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'starter', imgName: 'log', x: 110, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'starter', imgName: 'log', x: 150, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'log6', imgName: 'log', x: -50, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log7', imgName: 'log', x: -5, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 85, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log10', imgName: 'log', x: -5, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log12', imgName: 'log', x: 65, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'log15', imgName: 'log', x: 65, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'log16', imgName: 'log', x: -5, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 65, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log19', imgName: 'log', x: 190, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log21', imgName: 'log', x: 245, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log22', imgName: 'log', x: 65, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'log23', imgName: 'log', x: 190, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'log24', imgName: 'log', x: 130, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'log', x: -5, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'longLog', x: 40, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog5', imgName: 'longLog', x: 140, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'starter', imgName: 'longLog', x: 165, y: 100, width: 50, height: 25, dx: 0.5},
	{ type: 'longLog7', imgName: 'longLog', x: 90, y: 100, width: 50, height: 25, dx: 0.5}
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

//all logs displayed in levelThree
var levelThreeMovingBad = [
	{ type: 'starter', imgName: 'longLog', x: 240, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog2', imgName: 'longLog', x: 40, y: 320, width: 50, height: 25, dx: -0.5},
	{ type: 'log1', imgName: 'log', x: -25, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log2', imgName: 'log', x: 20, y: 270, width: 25, height: 25, dx: 0.6},
	{ type: 'log3', imgName: 'log', x: 65, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'starter', imgName: 'log', x: 110, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'starter', imgName: 'log', x: 150, y: 270, width: 25, height: 25, dx: 0.6 },
	{ type: 'log6', imgName: 'log', x: -50, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log7', imgName: 'log', x: -5, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 85, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 245, width: 25, height: 25, dx: 0.5 },
	{ type: 'log12', imgName: 'log', x: 65, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 170, width: 25, height: 25, dx: 0.5 },
	{ type: 'log15', imgName: 'log', x: 65, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'log16', imgName: 'log', x: -5, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 130, y: 50, width: 25, height: 25, dx: 0.5 },
	{ type: 'starter', imgName: 'log', x: 65, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log19', imgName: 'log', x: 190, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log21', imgName: 'log', x: 245, y: 125, width: 25, height: 25, dx: -0.5 },
	{ type: 'log22', imgName: 'log', x: 65, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'log24', imgName: 'log', x: 130, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'log', x: -5, y: 195, width: 25, height: 25, dx: -0.5 },
	{ type: 'starter', imgName: 'longLog', x: 40, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'longLog5', imgName: 'longLog', x: 140, y: 75, width: 50, height: 25, dx: -0.5},
	{ type: 'starter', imgName: 'longLog', x: 165, y: 100, width: 50, height: 25, dx: 0.5},
	{ type: 'longLog7', imgName: 'longLog', x: 90, y: 100, width: 50, height: 25, dx: 0.5}
];

//checks to see if froggo is within the game screen bounds
var checkBounds = function() {
	withinBounds = true;
	if (x < -15 || x > 202) {
		withinBounds = false;
		loseHeart();
	}
	if (y > 390) {
		withinBounds = false;
		loseHeart();
	}
}

var safetyCheck = function() {
	//will check if the froggo is within a certain amount of distance 
	//of a safe square
}

var onLog = function() {
	//checks to see if the froggo is on the log or not 
	//if so, froggo inherits the dx value from log
	//so she moves along with it 
}

var nearGator = function() {
	//checks to see if froggo is near gator!
	//if so, display open gator mouth 
}

//checks to see if froggo is over the finish line yet 
var checkForGoal = function() {
	if (y < 10 && level !== 3) {
		//display next level for 3 sec
		console.log('yay');
	}
	if (y < 10 && level === 3) {
		//display you won! and score/time
	}
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

//this will update the x/y values of each object to the delta x/y each 
//frame so it will animate them at various rates of movement
var movingObjects = function(movingObjects) {
	for (var i = 0; i < movingObjects.length; i++) {
		var img = document.getElementById(movingObjects[i].imgName);
		ctx.drawImage(img, movingObjects[i].x, movingObjects[i].y, movingObjects[i].width, movingObjects[i].height);
		movingObjects[i].x += movingObjects[i].dx;

		if (movingObjects[i].x > 202) {
			var tempXL = -25;
			movingObjects[i].x = tempXL;
		} else if (movingObjects[i].x < -25) {
			var tempXR = 202;
			movingObjects[i].x = tempXR; 
		} 
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

var continueGame = function() {
	if (contScreen.hasClass('active')){
		contScreen.removeClass('active');
	} 
	x = 85;
	y = 375;
	if (level===1) {
		levelOne = window.setInterval(gameLoop, levelOneFrame);
	} else if (level===2) {
		levelTwo = window.setInterval(gameLoop, levelTwoFrame);
	} else if (level===3) {
		levelThree = window.setInterval(gameLoop, levelThreeFrame);
	};
	//reset timer 
}

var loseHeart = function() {
	if (lives >= 1) {
		if (level===1) {
			clearInterval(levelOne);
			lives--; 
		} else if (level===2) {
			clearInterval(levelTwo);
			lives--; 
		} else if (level===3) {
			clearInterval(levelThree);
			lives--; 
		};
	} else if (lives === 0) { 
		gameOver();
	}
	contScreen.addClass('active');
	$('#continue-button').on('click', continueGame);
}

//this adds all the event listeners, focuses onto the canvas
//for a better ux, and determines which level we are on so it 
//displays the right board 
var beginGame = function() {
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
		if (lives === 3) {
			beginGame(); 
		} else {
			continueGame();
		}
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

var log = document.getElementById('log');

//this is the animation loop initializer 
//and all the things that ought to begin 
//on game startup 
var gameLoop = function() {
	//clear between interval pops
	ctx.clearRect(0, 0, 200, 400);

	if (level === 1) {
		staticBad(levelOneStaticBad);
		staticSafe(levelOneStaticSafe);
		movingObjects(levelOneMovingBad);
	//	movingRespawn(levelOneMovingBad);
	} else if (level === 2) {
		staticBad(levelTwoStaticBad);
		staticSafe(levelTwoStaticSafe);
		// movingObjects(levelTwoMovingBad);
	} else if (level === 3) {
		staticBad(levelThreeStaticBad);
		staticSafe(levelThreeStaticSafe);
		// movingObjects(levelThreeMovingBad);
	}
	froggoDisplay();
	checkBounds();
	checkForGoal();
	lifeDisplay(livesArr, lives);
}


$(document).ready(function() {
	startButton.on('click', beginGame);
	window.addEventListener('keydown', spaceStart);
});