const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let square = 32;
let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * square,
    y: Math.floor(Math.random() * 15 + 3) * square
};

const background = new Image();
background.src = './img/background.png';
const imgScore = new Image();
imgScore.src = './img/scoreImg.png';

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

const foodImage = new Image();
foodImage.src = getRandomFoodImage();

function drawGame() {
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(foodImage, food.x, food.y);
    ctx.drawImage(imgScore, square, square);

    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, square, square);
    }

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText(score, square * 2.5, square * 2);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    snake.pop();

    if(dir === 'left') snakeX -= square;
    if(dir === 'right') snakeX += square;
    if(dir === 'up') snakeY -= square;
    if(dir === 'down') snakeY += square;

    let snakeHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(snakeHead);
}



let game = setInterval(drawGame, 100);

let snake = [];
snake[0] = {
    x: 9 * square,
    y: 10 * square
};

//обработчик событий для передвижения змейки
document.addEventListener('keydown', direction);
let dir;
function direction(ev) {
    if(ev.keyCode === 37 && dir != 'right')
        dir = 'left';
    else if(ev.keyCode === 38 && dir != 'down')
        dir = 'up';
    else if(ev.keyCode === 39 && dir != 'left')
        dir = 'right';
    else if(ev.keyCode === 40 && dir != 'up')
        dir = 'down';
}