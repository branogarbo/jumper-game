function jumper() {
  this.radius = 25;
  this.x = winW/4;
  this.y = winH/2;
  this.gravity = 0.5; // force of gravity
  this.lift = -20; // force opposing gravity when i jump
  this.velocity = 0; // speed of gravity force
  this.invincible = false;

  // function to display on screen. this is where i put my values of what the jumper will look like
  this.display = () => {
    // invincibility toggle
    if (this.invincible) {
      fill('green');
      ellipse(this.x,this.y,this.radius*2);
      
      textSize(20);
      fill(0);
      textAlign(CENTER,CENTER);
      text('invincible',this.x,this.y);
    }
    else {
      fill('red');
      ellipse(this.x,this.y,this.radius*2);
    }
  }

  // this will continuously update the jumper
  this.update = () => {
    this.velocity += this.gravity;
    this.velocity *= 0.95; // air resistance
    this.y += this.velocity;
    
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

    // move jumper laterally
    keyIsDown(65) && this.x > 25 ? this.x -= 10 : {}; // a
    keyIsDown(68) && this.x < winW-25 ? this.x += 10 : {}; // d

    // gravity boost
    keyIsDown(83) ? this.gravity = 1.5 : this.gravity = 0.5;

    // check each barrier for collision
    barriers.forEach(barrier => {
      if (!this.invincible && collideRectCircle(barrier.x - barrier.width/2, barrier.y - barrier.height/2, barrier.width, barrier.height, this.x, this.y, 2*this.radius)) {
        barriers.forEach(barrier => barrier.slow());

        end = true;
      }
    });
  }

  // function that will take take initial velocity and modify by opposing gravity
  this.jump = () => {
    this.velocity += this.lift;    
  }
}