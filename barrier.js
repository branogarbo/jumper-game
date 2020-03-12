function barrier() {
  this.width = 30;
  this.height = random(130,170);
  this.x = winW + random(winW);
  this.y = random(winH);
  this.velocity = random(7,12);
  this.slowing = false;
  this.passed = false;

  this.display = () => {
    fill('blue');
    rect(this.x,this.y,this.width,this.height);
  }

  this.update = () => {
    if (this.x < 0) {
      this.x = winW + random(winW);
      this.y = random(winH);
      this.height = random(120,180);
      this.velocity += 0.1;
      this.passed = false;
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