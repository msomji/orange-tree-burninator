$(document).ready(function() {
	gameRunning = setInterval(function () {gameCycle()}, 100);
	var orangeTrees = []


	var Player = function(name, posX, posY) {
		this.x = posX;
		this.y = posY;
		this.width = 32;
		this.height = 32;
		var velocityY = 0;
		var velocityX = 0;
		this.name = name;
		this.direction = "down"
		var stepIncrement = 8;
		this.leftCollision = false;
		this.rightCollision = false;
		this.upCollision = false;
		this.downCollision = false;
		this.settingFire = false;

		this.legalStep = function(x, y) {
			// for (var i = 0; i < 50; i++) {
			// 	console.log("x: " + x + ", y: " + y + ", Ox: " + orangeTrees[i].x + ", Oy: " + orangeTrees[i].y)
			// 	if (orangeTrees[i].active) {
			// 		if (this.collidesWith(x, y, orangeTrees[i])){
			// 			return false;					
			// 		}
			// 	}
			// }
			return true;
		}

		this.moveUp = function(triggered) {
			if (this.legalStep(this.x, this.y - stepIncrement) && this.y > 0 && triggered) {
				velocityY = -stepIncrement;
				direction = "up";
			}
			else {
				velocityY = 0;
			}
		}

		this.moveDown = function(triggered) {
			if (this.legalStep(this.x, this.y + stepIncrement) && this.y < 568 && triggered) {
				velocityY = stepIncrement;
				direction = "down";
			}
			else {
				velocityY = 0;
			}			
		}

		this.moveLeft = function(triggered) {
			if (this.legalStep(this.x - stepIncrement, this.y) && this.x > 0 && triggered) {
				velocityX = -stepIncrement;
				direction = "left";
			}
			else {
				velocityX = 0;
			}			
		}

		this.moveRight = function(triggered) {
			if (this.legalStep(this.x + stepIncrement, this.y) && this.x < 768 && triggered) {
				velocityX = stepIncrement;
				direction = "right";
			}
			else {
				velocityX = 0;
			}			
		}

		this.startFire = function(triggered) {
			if (triggered){
				this.settingFire = true;
			}
			else {
				this.settingFire = false;
			}
		}

		this.collidesWith = function(object) {
			if ((Math.abs(this.x - object.x) <= 32) && Math.abs(this.y - object.y) <= 32)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		// this.leftCollision = function() {
		// 	for (var i = 0; i < 50; i++) {
		// 		if (orangeTrees[i].active){
		// 			if (this.x < orangeTrees[i].x + orangeTrees[i].width) {
		// 				if (this.x > orangeTrees[i].x) {
		// 					if (this.y < orangeTrees[i].y + orangeTrees[i].height && this.y > orangeTrees[i].y - orangeTrees[i].height){
		// 						if (this.x <= orangeTrees[i].x + orangeTrees[i].width) {
		// 							this.x = orangeTrees[i].x + orangeTrees[i].width
		// 						}
		// 						return true;
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	return false;
		// }

		// this.rightCollision = function() {
		// 	for (var i = 0; i < 50; i++) {
		// 		if (orangeTrees[i].active){
		// 			if (this.x + this.width > orangeTrees[i].x) {
		// 				if (this.x + this.width < orangeTrees[i].x + orangeTrees[i].width) {
		// 					if (this.y < orangeTrees[i].y + orangeTrees[i].height && this.y > orangeTrees[i].y - orangeTrees[i].height){
		// 						if (this.x <= orangeTrees[i].x + orangeTrees[i].width) {
		// 							this.x = orangeTrees[i].x + orangeTrees[i].width
		// 						}
		// 						return true;
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// 	return false;
		// }

		// this.rightCollision = function() {
		// 	for (var i = 0; i < 50; i++) {
		// 		if (this.x < orangeTrees[i].x && this.x > orangeTrees[i].x + orangeTrees[i].width) {
		// 			if (this.y > orangeTrees[i].y - orangeTrees[i].height && this.y < orangeTrees[i].y + orangeTrees[i].height) {
		// 				return true;
		// 			}
		// 		}
		// 	}
		// 	return false
		// }

		// this.topCollision = function() {
		// 	for (var i = 0; i < 50; i++) {
		// 		if (this.y < orangeTrees[i].y && this.y > orangeTrees[i].y + orangeTrees[i].height) {
		// 			//if (this.x > orangeTrees[i].x - orangeTrees[i].width && this.x < orangeTrees[i].x + orangeTrees[i].width) {
		// 				return true;
		// 			//}
		// 		}
		// 	}
		// 	return false
		// }

		// this.bottomCollision = function() {
		// 	for (var i = 0; i < 50; i++) {
		// 		if (this.y > orangeTrees[i].y && this.y < orangeTrees[i].y + orangeTrees[i].height) {
		// 			if (this.x > orangeTrees[i].x - orangeTrees[i].width && this.x < orangeTrees[i].x + orangeTrees[i].width) {
		// 				return true;
		// 			}
		// 		}
		// 	}
		// 	return false
		// }

		// if (this.y < orangeTrees[i].y && this.y > orangeTrees[i].y + orangeTrees[i].height)

		// this.collisionDetected = function() {
		// 	for (var i = 0; i < 50; i ++) {
		// 		if (this.x > orangeTrees[i].x - orangeTrees[i].width && this.x < orangeTrees[i].x + orangeTrees[i].width)
		// 		// if (orangeTrees[i].x + orangeTrees[i].width > this.x && this.x > orangeTrees[i].x) {
		// 		// 	if (this.y + this.height) {

		// 		// 	}
		// 		// }
		// 	}
		// }

		this.update = function(triggered) {
			for (var i = 0; i < 50; i++) {
				if (orangeTrees[i].active && this.collidesWith(orangeTrees[i])) {
					alert("hi")
					if (Math.abs(this.x - orangeTrees[i].x) < orangeTrees[i].width)
					{
						if ((this.x < orangeTrees[i].x && velocityX > 0) || (this.x > orangeTrees[i].x && velocityX < 0))
						{
							velocityX = 0;
						}
					}
					if (Math.abs(this.y - orangeTrees[i].y) < orangeTrees[i].height)
					{
						if ((this.y < orangeTrees[i].y && velocityY > 0) || (this.y > orangeTrees[i].y && velocityY < 0))
						{
							velocityY = 0;
						}
					}

					if (this.settingFire) {
						orangeTrees[i].burn();
					}
				}
			}
			

			this.y += velocityY;
			this.x += velocityX;
			if (this.y < 0) {
				this.y = 0;
			}
			if (this.x < 0)
			{
				this.x = 0;
			}
			if (this.y > 568) {
				this.y = 568;
			}
			if (this.x > 768) {
				this.x = 768;
			}
			$("#player").css({'top': this.y, 'left': this.x})
		}
	}
	//end of player

	function OrangeTree(posX, posY, number) {
		this.width = 32;
		this.height = 32;
		this.active = false;
		this.x = posX;
		this.y = posY;
		this.active = false;
		this.number = number
		var burning = false;
		var burnTime = 10;

		this.burn = function() {
			burning = true;
		}

		this.update = function() {
			if (burning) {
				burnTime -= 1;
			}

			if (burnTime <= 0) {
				burning = false;
				this.active = false;
				$("#orange-tree-" + this.number).css({'visibility': "hidden"})
			}
		}

		this.spawn = function(x, y) {
			this.active = true;
			this.x = x;
			this.y = y;
			burning = false;
			burnTime = 10;
			$("#orange-tree-" + this.number).css({'visibility': "visible", 'top': this.y + "px", 'left': this.x + "px"})
		}
	}
	//end of orange tree

	function spawnTree() {
		// alert("i'm spawning a tree!")
		var y = Math.floor(Math.random() * 71);
		var x = Math.floor(Math.random() * 96);
		for (var i = 0; i < 50; i++) {
			if (!orangeTrees[i].active) {
				// alert("here i am")
				orangeTrees[i].spawn(x * 8, y * 8);
				break;
			}
		}
	}

	var field = document.getElementById("field");
	for (var i = 0; i < 50; i++) {
		var y = Math.floor(Math.random() * 568);
		var x = Math.floor(Math.random() * 768);
		orangeTrees[i] = new OrangeTree(x, y, i)
		var div = document.createElement("div");
		div.style.width = "32px";
		div.style.height = "32px";
		div.style.backgroundColor = "brown";
		div.style.position = "absolute";
		div.id = "orange-tree-" + i;

		field.appendChild(div);
	}

	$(document).on('keydown', function(event) {

		var movementKey = {
			87: function() {player.moveUp(true);},
			65: function() {player.moveLeft(true);},
			83: function() {player.moveDown(true);},
			68: function() {player.moveRight(true);},
			38: function() {player.moveUp(true);},
			37: function() {player.moveLeft(true);},
			40: function() {player.moveDown(true);},
			39: function() {player.moveRight(true);},
			32: function() {player.startFire(true);}
		}

		movementKey[event.which]();
	});

	$(document).on('keyup', function(event) {

		var movementKey = {
			87: function() {player.moveUp(false);},
			65: function() {player.moveLeft(false);},
			83: function() {player.moveDown(false);},
			68: function() {player.moveRight(false);},
			38: function() {player.moveUp(false);},
			37: function() {player.moveLeft(false);},
			40: function() {player.moveDown(false);},
			39: function() {player.moveRight(false);},
			32: function() {player.startFire(false);}
		}

		movementKey[event.which]();
	});

	var maxTimeUntilNextTree = 50;
	var timeUntilNextTree = maxTimeUntilNextTree;
	var player = new Player("bob", 0, 0);

	function gameCycle(){
		player.update();
		for (var i = 0; i < 50; i++) {
			orangeTrees[i].update();
		}
		if (timeUntilNextTree <= 0) {
			maxTimeUntilNextTree -= 1;	
			timeUntilNextTree = maxTimeUntilNextTree;	
			spawnTree();
		}
		timeUntilNextTree -= 1;
	}
});

// document.onkeydown = keyPressed;
// document.onkeyup = keyReleased;
