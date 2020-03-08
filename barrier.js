function barrier() {
  this.width = 30;
  this.height = 150;
  this.velocity = 20;
  this.x = winW;
  this.y = winH/2;

  this.display = () => {
    fill('blue');
    rect(this.x,this.y,this.width,this.height);
  }

  this.update = () => {
    if (this.x < 0) {
      this.x = winW + random(winW);
      this.y = random(winH);
    }

    this.x -= this.velocity;
  }
}