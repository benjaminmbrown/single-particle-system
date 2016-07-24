function ParticleSystem(){

	this.position = createVector();
	this.acceleration = l_;
	this.velocity = createVector();
	this.k = 0.2;
	this.display = function(){
		stroke(255);
		fill(127);
		strokeWeight(2);
		rectMode(CENTER);
		rect(this.anchor.x, this.anchor.y, 10,10);
	}

	this.displayLine = function(bob){
		strokeWeight(2);
		stroke(255);
		line(bob.position.x, bob.position.y, this.anchor.x, this.anchor.y);
	}
	
}