const angleToRad = (angle) => (angle * Math.PI) / 180;

class Pacman {
  constructor(initialPos, color = "yellow", maxSpeed = 1.5) {
    this.pacmanSize = 12;
    this.mouthOpen = 20;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: 0, y: 0 };
  }
  update(delta) {
    this.mouthOpen += 1.5*delta;
    let newPosX = this.origin.x + this.speed.x*(delta+0.2);
    let newPosY = this.origin.y + this.speed.y*(delta+0.2);
    if (newPosX < 950 && newPosX >= 15) {
      this.origin.x = newPosX;
    }
    if (newPosY < 975 && newPosY >= 50) {
      this.origin.y = newPosY;
    }
  }
  keyboard_event(key) {
    switch (key) {
      case `ArrowRight`:
        console.log("right");
        this.speed.x = this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowLeft`:
        console.log("left");
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowUp`:
        console.log("up");
        this.speed.y = -this.maxSpeed;
        this.speed.x = 0;
        break;
      case `ArrowDown`:
        console.log("down");
        this.speed.y = this.maxSpeed;
        this.speed.x = 0;
        break;
    }
  }
  draw(ctx,delta) {
    let origin = this.origin;
    let pacmanSize = this.pacmanSize;
    let mouthOpen = this.mouthOpen;

    let open = 20 * Math.sin(10 * this.mouthOpen) + 20;

    // Controlamos la dirección del PACMAN
    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }
    if (this.speed.y != 0 && this.speed.y < 0) {
      direction = 270;
    }
    if (this.speed.y != 0 && this.speed.y > 0) {
      direction = 90;
    }

    ctx.strokeStyle = "black";
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.arc(
      origin.x,
      origin.y,
      pacmanSize,
      angleToRad(-open + direction),
      angleToRad(open + direction),
      true
    );
    // ctx.lineTo(origin.x + pacmanSize, origin.y + mouthOpen);
    // ctx.moveTo(origin.x, origin.y);
    // ctx.lineTo(origin.x + pacmanSize, origin.y - mouthOpen);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}
