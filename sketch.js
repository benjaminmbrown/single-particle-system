
var particle;

function setup() {
 createCanvas(640, 360);
 setFrameRate(60)
 particle = new Particle(width/2,20);


}

function draw(){
	background(51);
	var gravity = createVector(.0001,0);

	this.particle.applyForce(gravity);
	this.particle.run();
	if(this.particle.isDead()){
		this.particle = new Particle(createVector(width/2,20));
	}
}
