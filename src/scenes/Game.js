export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("slimeIdle", "./slimeIdle-Sheet-sheet.png");
  }

  create() {
    const { width, height } = this.scale;
    this.add.sprite(width * 0.5, height * 0.5, "slimeIdle", 1);

    // //create an object in our scene that is a circle (ball)
    // const ball = this.add.circle(400, 250, 10, 0xffffff);
    // //this looks at the physics of the scene and adds them to the object you put in the ()
    // this.physics.add.existing(ball);
    // //this makes it so that it will collide with the world borders (boolean, x-axis, y-axis)
    // ball.body.setCollideWorldBounds(true, 1, 1);
    // ball.body.setBounce(1, 1);
    // ball.body.setVelocity(200, 200);
    // this.paddleLeft = this.add.rectangle(50, 250, 10, 125, 0xffffff);
    // this.physics.add.existing(this.paddleLeft, true);
    // this.physics.add.collider(this.paddleLeft, ball);
    // this.cursors = this.input.keyboard.createCursorKeys();
    // this.paddleRight = this.add.rectangle(750, 250, 10, 125, 0xffffff);
    // this.physics.add.existing(this.paddleRight, true);
    // this.physics.add.collider(this.paddleRight, ball);
  }
}
