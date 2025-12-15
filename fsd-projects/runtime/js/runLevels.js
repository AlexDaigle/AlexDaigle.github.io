var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
   function createSawBlade(x, y){
    var hitZoneSize = 25;
    var damageFromObstcale = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstcale);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstcaleImage = draw.bitmap("img/sawbladeA.png");
    sawBladeHitZone.addChild(obstcaleImage);
    obstcaleImage.x = -30;
    obstcaleImage.y = -30;
    obstcaleImage.scaleX = 0.5
    obstcaleImage.scaleY = 0.5
   };
   createSawBlade(600, 370);
   createSawBlade(900, 370);
   createSawBlade(1200, 370);


  function createEnemy(x, y){
   var enemy = game.createGameItem("enemy", 25);
   var redSquare = draw.rect(50, 50, "red");
   redSquare.x = -25;
   redSquare.y = -25;
   enemy.addChild(redSquare);
   enemy.x = x;
   enemy.y = groundY - y;
   enemy.velocityX = -3
   enemy.rotationalVelocity = -30
   game.addGameItem(enemy);
  enemy.onPlayerCollision = function(){
    game.changeIntegrity(-10)
  }
  enemy.onProjectileCollision = function(){
    game.increaseScore(100);
    enemy.fadeOut();
  }
}
createEnemy(900, 50);
createEnemy(500, 50);
createEnemy(700, 50);

function createReward(x, y){
  var reward = game.createGameItem("reward", 25);
  var greenSquare = draw.rect(50, 50, "green");
  greenSquare.x = -25;
  greenSquare.y = -25;
  reward.addChild(greenSquare);
  reward.x = x;
  reward.y = groundY - y
  reward.velocityX = -1
  game.addGameItem(reward);
  reward.onPlayerCollision = function(){
  game.changeIntegrity(25)
  reward.fadeOut();
  };
  reward.onProjectileCollision = function(){
    reward.fadeOut()
    game.changeIntegrity(25)
  }
}
createReward(1500, 73);

function createMarker(x, y){
  var marker = game.createGameItem("marker", 25);
  var blueSquare = draw.rect(50, 50, "blue");
  blueSquare.x = -25
  blueSquare.y = -25
  marker.addChild(blueSquare)
  marker.x = x
  marker.y = groundY - y
  marker.velocityX = -.9
  game.addGameItem(marker);
  marker.onPlayerCollision = function(){
    startLevel()
  }
  marker.onProjectileCollision = function(){
    startLevel();
    marker.fadeOut();
  }
}
createMarker(1700, 75);
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level["gameItems"];
      for(var i = 0; i < levelObjects.length; i++){
        createSawBlade()
        createEnemy()
        createReward()
        createMarker()
      }
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
