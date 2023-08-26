
//code to actor
let xActor = 85;
let yActor = 366;
let collision = false;
let score = 0;

function showActor() {
    image(imageActor, xActor, yActor, 25, 25);
}

function moveActor() {
    if (keyIsDown(UP_ARROW)) {
        yActor -= 3
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (canMove()) {
            yActor += 3
        }

    }
}

function checkCollision() {
    for (let i = 0; i < imageCars.length; i++) {
        collision = collideRectCircle(xCars[i], yCars[i], lengthCar, heightCar, xActor, yActor, 15)
        if (collision) {
            backActorPositionInitial();
            soundCollision.play();
            if (pointsGreaterZero()) {
                score -= 1;
            }

        }
    }
}

function backActorPositionInitial() {
    yActor = 366;
}

function includePoints() {
    textAlign(CENTER);
    fill(color(255, 240, 60))
    textSize(25)
    text(score, width / 5, 27);
}

function scorePoints() {
    if (yActor < 15) {
        score += 1;
        soundPoints.play();
        backActorPositionInitial();
    }
}

function pointsGreaterZero() {
    return score > 0;
}

function canMove() {
    return yActor < 366;
}