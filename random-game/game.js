const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let box = 32;
let score = 0;

const background = new Image();
background.src = './img/background.png';

background.onload = function() {
    drawGame();
};

const foodImages = [
    './img/apple.png',
    './img/cupcake.png',
    './img/donut.png',
    './img/egg.png',
    './img/lemon.png'
];

function getRandomFoodImage() {
    const randomIndex = Math.floor(Math.random() * foodImages.length);
    return foodImages[randomIndex];
}

const food = new Image();
food.src = getRandomFoodImage();

function drawGame() {
    ctx.drawImage(background, 0, 0);
}

let game = setInterval(drawGame, 100);