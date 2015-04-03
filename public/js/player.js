var Player = function(){
	this.alive: true,
	this.direction: "down",
	this.velocityX: 0,
	this.velocityY: 0,

	var movementKey = {
	87: function() {this.moveUp();},
	65: function() {this.moveLeft();},
	83: function() {this.moveDown();},
	68: function() {this.moveRight();},
	38: function() {this.moveUp();},
	37: function() {this.moveLeft();},
	40: function() {this.moveDown();},
	39: function() {this.moveRight();},
	32: function() {this.startFire();}
	}

	this.moveUp = function(){

	}

	this.moveDown = function(){

	}

	this.moveLeft = function(){

	}

	this.moveRight = function(){

	}

	this.startFire = function(){

	}
}