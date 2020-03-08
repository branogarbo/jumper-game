function jumper() {
  this.color = 'red';
  this.radius = 25;
  this.x = winW/2;
  this.y = winH/2;
  this.gravity = 0.5; // force of gravity
  this.lift = -20; // force opposing gravity when i jump
  this.velocity = 0; // speed of gravity force

  // function to display on screen. this is where i put my values of what the jumper will look like
  this.display = () => {
    fill(color(this.color));
    ellipse(this.x,this.y,this.radius*2);
  }

  // this will continuously update the jumper
  this.update = () => {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.95; // air resistance
    
    // this prevents jumper from falling through ground
    if (this.y > winH - this.radius) {
      this.y = winH - this.radius;
      this.velocity = 0;
    }
    
    // this prevents jumper from going through ceiling
    if (this.y < this.radius) {
      this.y = this.radius;
      this.velocity = 0;
    }
  }

  // function that will take take initial velocity and modify by opposing gravity
  this.up = () => {
    this.velocity += this.lift;
  }
}