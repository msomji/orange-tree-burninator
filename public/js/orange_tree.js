var OrangeTree = function(posX, posY){
	this.burning: false,
	this.locationX: posX,
	this.locationY: posY,
	this.burnTimer: 10,

	this.spawn = function(){
		this.locationX = Math.float(Math.random() * 800)
		this.locationX = Math.float(Math.random() * 600)

		view.draw()
	}
}