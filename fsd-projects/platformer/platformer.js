$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();
    // TODO 2 - Create Platforms
createPlatform(260, 640, 100, 10, "grey");
createPlatform(50, 0, 0.1, 600, "black");
createPlatform(100, 0, 0.1, 600, "black");
createPlatform(100, 530, 100, 10, "grey");
createPlatform(500, 580, 100, 10, "grey");
createPlatform(700, 500, 100, 10, "grey");
createPlatform(1000,500, 100, 10, "grey");
createPlatform(500, 400, 100, 10, "grey");
createPlatform(300, 330, 50, 10, "grey");
createPlatform(500, 250, 100, 10, "grey");
createPlatform(700, 250, 100, 10, "grey");
createPlatform(900, 250, 100, 10, "grey");
createPlatform(1100, 250, 100, 10, "grey");
createPlatform(1300, 250, 100, 10, "grey");

    // TODO 3 - Create Collectables
createCollectable("heart", 130, 480, .03, 1);
createCollectable("heart", 530, 200, .03, 1);
createCollectable("open", 1030, 450, .03, 1);
createCollectable("orb", 1330, 200, .005, 1);
    
    // TODO 4 - Create Cannons
createCannon("left", 150, 3500);
createCannon("bottom", 800, 2000,);
createCannon("top", 1300, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
