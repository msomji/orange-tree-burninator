// $(document).ready(function() {
// 	var player = Player.new("bob");
// 	gameRunning = setInterval(function () {gameCycle()}, 100);


// 	function Player(name, posX, posY) {
// 		this.x = posX;
// 		this.y = posY;
// 		this.name = name;
// 		var stepIncrement = 10;

// 		this.legalStep = function() {
// 			return true;//check for collisions here
// 		}

// 		this.moveUp = function() {
// 			if (this.legalStep() && this.y > 0) {
// 				this.y -= stepIncrement;
// 				$('#'+this.name).css({'top': this.y});
// 			}
// 		}

// 		this.moveDown = function() {
// 			if (this.legalStep() && this.y < 590) {
// 				this.y += stepIncrement;
// 				$('#'+this.name).css({'top': this.y});
// 			}
// 		}

// 		this.moveLeft = function() {
// 			if (this.legalStep() && this.x > 0) {
// 				this.x -= stepIncrement;
// 				$('#'+this.name).css({'left': this.x});
// 			}
// 		}

// 		this.moveRight = function() {
// 			if (this.legalStep() && this.x < 790) {
// 				this.x += stepIncrement;
// 				$('#'+this.name).css({'left': this.x});
// 			}
// 		}

		
// 	}



// 	function Zombie(name, posX, posY, chaser) {
// 		this.x = posX;
// 		this.y = posY;
// 		this.isChaser = chaser;
// 		var wanderSteps = Math.floor(Math.random() * 8 + 1);
// 		var direction = Math.floor(Math.random() * 4 + 1)
// 		var waitTime;
// 		var stepIncrement = 1;
// 		this.target;

// 		function wander() {
// 			while (wanderSteps > 0) {
// 				switch (direction) {
// 					case 1:

// 						break;
// 				}
// 				//wandering logic here
// 				//decrement wanderSteps
// 			}
// 			//reset waitTime
// 		}

// 		function wait() {
// 			//decrement wait counter, reassign wanderSteps and direction
// 		}

// 		this.chase = function() {

// 		}

// 		this.assignTarget = function() {
// 			if (findDistance(this, player1) < 100 && findDistance(this, player1) < findDistance(this, player2)) {
// 				return player1;
// 			}
// 			else if (findDistance(this, player2) < 100) {
// 				return player2;
// 			}
// 			else {
// 				return null;
// 			}
// 		}

// 		this.update = function() {
// 			// while (wanderSteps > 0) {
// 			// 	if (direction == 1) {
// 			// 		if (this.y > 0) {
// 			// 			$('#'+name).css({'top': this.y});
// 			// 		}
// 			// 	}
// 			// 	else if (CONTINUE HERE)
// 			// }
// 			console.log("assignTarget returns a " + this.assignTarget().name);
// 		}


// 	}

// 	function setUpPlayers() {
// 		player1 = new Person('player1', 0, 200);
// 		$('#player1').css({ 'left': 0 + 'px', 'top': 200 + 'px' });
// 		player2 = new Person('player2', 0, 100);
// 		$('#player2').css({ 'left': 0 + 'px', 'top': 100 + 'px' });
// 	}

// 	function findDistance(obj, target) {
// 		return Math.sqrt(((obj.x - target.x) * (obj.x - target.x)) + ((obj.y - target.y) * (obj.y - target.y)))
// 	}


// 	$(document).on('keypress', function(event) {

// 		var movementKey = {
// 			87: function() {player1.moveUp();},
// 			65: function() {player1.moveLeft();},
// 			83: function() {player1.moveDown();},
// 			68: function() {player1.moveRight();},
// 			80: function() {player2.moveUp();},
// 			76: function() {player2.moveLeft();},
// 			186: function() {player2.moveDown();},
// 			222: function() {player2.moveRight();}
// 		}

// 		movementKey[event.which]();
// 	});

// 	function checkForWin() {
// 		//console.log("here i am")
// 		if (player1.x > 750 && player1.y < 50) {
// 			console.log("Win!");
// 			alert('win');
// 			clearInterval(gameRunning);
// 		}
// 	}

// 	function gameCycle() {
// 		//console.log("im here");
// 		checkForWin();
// 		zom.update();
// 	}
// });
