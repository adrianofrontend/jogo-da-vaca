// images and som to play

let imageRoad;
let imageActor;
let imageCar;
let imageCar2;
let imageCar3;

let soundTrail;
let soundCollision;
let soundPoints;

function preload() {
    imageRoad = loadImage("./assets/imagens/estrada.png");
    imageActor = loadImage("./assets/imagens/ator-1.png");
    imageCar = loadImage("./assets/imagens/carro-1.png");
    imageCar2 = loadImage("./assets/imagens/carro-2.png");
    imageCar3 = loadImage("./assets/imagens/carro-3.png");
    imageCars = [imageCar, imageCar2, imageCar3,
        imageCar, imageCar2, imageCar3]

    soundTrail = loadSound("./assets/sons/trilha.mp3");
    soundCollision = loadSound("./assets/sons/colidiu.mp3");
    soundPoints = loadSound("./assets/sons/pontos.wav");
}