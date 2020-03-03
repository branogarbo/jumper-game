var jumper = new jumper(); // declare object constructor

function jumper() {
  this.x = 100;
  this.y = 100;
  this.gravity = 0.5; // force of gravity
  this.lift = -20; // force opposing gravity when i jump
  this.velocity = 0; // speed of gravity force

  // function to display on screen. this is where i put my values of what the jumper will look like
  this.show = () => {
    fill(255,0,0);
    ellipse(this.x,this.y,50,50);
  }

  // function that will take take initial velocity and modify by opposing gravity
  this.up = () => {
    this.velocity += this.lift;
  }

  // this will continuously update the jumper
  this.update = () => {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.95; // air resistance

    // this prevents jumper from falling through ground
    if (this.y > windowHeight-25) {
      this.y = windowHeight-25;
      this.velocity = 0;
    }
    
    // this prevents jumper from going through ceiling
    if (this.y < 25) {
      this.y = 25;
      this.velocity = 0;
    }
  }
}