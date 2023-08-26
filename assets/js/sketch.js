function setup() {
    createCanvas(500, 400);
    soundTrail.loop();
}

function draw() {
    background(imageRoad);
    showActor();
    showCar();
    moveCar();
    moveActor();
    backPositionInitialCar();
    checkCollision();
    includePoints();
    scorePoints();

}



