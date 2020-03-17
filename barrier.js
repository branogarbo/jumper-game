function barrier() {
  this.width = 30;
  this.height = random(100,200);
  this.x = winW + random(this.width/2,winW);
  this.y = random(this.height/2,winH-this.height/2);
  this.velocity = random(7,12);
  this.slowing = false;
  this.passed = false;
  this.color = [random(100),100,50];

  this.display = () => {
    colorMode(HSL,100);
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }

  this.update = () => {
    if (this.x < -this.width/2) {
      this.x = winW + random(this.width/2,winW);
      this.y = random(winH);
      this.height = random(100,200);
      this.velocity += 0.25;
      this.passed = false;
      this.color = [random(100),100,50];
    }
    
    if (this.slowing) {
      this.velocity *= 19/20;
    }

    if (this.x < jumper.x) {
      if (!this.passed && !end) {
        score++;
      }
      this.passed = true;
    }

    this.x -= this.velocity;
  }

  this.slow = () => this.slowing = true;
}