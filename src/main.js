import Phaser from "phaser";

var config = {
  type: Phaser.WEBGL,
  parent: "phaser-example",
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet("slimeIdle", "/home/swiss/game/src/scenes/slime.png", {
    frameWidth: 32,
    frameHeight: 24,
  });
}

function create() {
  this.add.image(0, 0, "slimeIdle", 0);
  // this.add.image(64, 0, "slimeIdle", 1);
  //   this.add.image(128, 0, "diamonds", 2);
  //   this.add.image(32, 32, "diamonds", 3);
  //   this.add.image(96, 32, "diamonds", 4);
  //
}
