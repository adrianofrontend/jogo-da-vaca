// code to cars
let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3]
let lengthCar = 50;
let heightCar = 40;

function showCar() {
    for (let i = 0; i < imageCars.length; i++) {
        image(imageCars[i], xCars[i], yCars[i], lengthCar, heightCar);
    }
}

function moveCar() {
    for (let i = 0; i < imageCars.length; i++) {
        xCars[i] -= speedCars[i];
    }
}

function backPositionInitialCar() {
    for (let i = 0; i < imageCars.length; i++) {
        if (passedWholeScreen(xCars[i])) {
            xCars[i] = 600;
        }
    }
}


function passedWholeScreen(xCar) {
    return xCar < - 50
}

