function Particle(x_,y_){
	this.position = createVector(x_,y_);
	this.acceleration = createVector(0,0.05);
	this.velocity = createVector(random(-1,1),random(-1,0));
	this.mass=.04
	this.lifespan = 255;

	this.run = function(){
		this.update();
		this.display();
	}

	this.display = function(){
		stroke(255,this.lifespan); //gets more transparent as it dies
		strokeWeight(2);
		fill(127,this.lifespan);

		ellipse(this.position.x,this.position.y,7,7);
	}

	this.update = function(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.lifespan -= 2;
	}

	this.applyForce = function(force){
		var f = force.copy();
		f.div(this.mass);
		this.acceleration.add(f);
	}

	this.isDead = function(){
		return this.lifespan < 0.0 ? true : false;
	}
	
}