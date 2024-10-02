const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let square = 32;
let score = 0;
let time = 0;
let gameActive = false;
let pause;
let gameOver = false;

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
    const foodImage = new Image();
    foodImage.src = foodImages[randomIndex];
    return foodImage;
}

let foodImage = getRandomFoodImage();

function drawGame() {
    if (gameOver) {
        return;
    }

    // настройки фона
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(foodImage, food.x, food.y);
    ctx.drawImage(imgScore, square, square);

    // настройки змейки
    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? '#0e500c' : '#368225';
        ctx.beginPath();
        ctx.arc(snake[i].x + square / 2, snake[i].y + square / 2, square / 2 + 4, 0, Math.PI * 2);
        ctx.fill();
    }

    //настройки табло
        //счет
    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText(score, square * 2.5, square * 2);
        //время
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.fillText(`Время: ${time}s`, square * 13, square * 2);
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 17 + 1) * square,
            y: Math.floor(Math.random() * 15 + 3) * square
        };
        foodImage = getRandomFoodImage();
    } else {
        snake.pop();
    }

    if(snakeX < square || snakeX > square * 17 || snakeY < 3 * square || snakeY > square * 17) {
        endGame();
        return;
    }

    function endGame() {
        clearInterval(game);
        clearInterval(timer);
        gameActive = false;
        gameOver = true;
        showGameOver();
    }

    function showGameOver() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText('Конец игры', canvas.width / 2 - 130, canvas.height / 2 - 150);
    
        ctx.font = '30px Arial';
        ctx.fillText(`Ваш счет: ${score}`, canvas.width / 2 - 70, canvas.height / 2 - 100);
        ctx.fillText(`Время игры: ${time} сек`, canvas.width / 2 - 120, canvas.height / 2 - 60);
    
        // перезапуск игры
        const buttonRestart = document.createElement('button');
        buttonRestart.innerText = 'Еще раз!';
        buttonRestart.style.position = 'absolute';
        buttonRestart.style.left = canvas.width / 2 + 170 + 'px';
        buttonRestart.style.top = canvas.height / 2 + 60 + 'px';
        buttonRestart.style.width = '150px';
        buttonRestart.style.height = '50px';
        buttonRestart.style.fontSize = '24px';
        buttonRestart.style.backgroundColor = '#368225';
        buttonRestart.style.color = '#fff';
        buttonRestart.style.border = '#fff';
        buttonRestart.style.cursor = 'pointer'; 

        document.body.appendChild(buttonRestart);
    
        buttonRestart.addEventListener('click', () => {
            location.reload();
        });
    }


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


let timer;
function startTimer() {
    if (!gameActive) {
        timer = setInterval(() => {
            if (gameActive) {
                time++;
            }
        }, 1000);
    gameActive = true;
    }
}

let game = setInterval(drawGame, 120);

let snake = [];
snake[0] = {
    x: 9 * square,
    y: 10 * square
};

//обработчик событий для передвижения змейки
document.addEventListener('keydown', direction);
let dir;
function direction(ev) {
    startTimer();

    if(ev.keyCode === 37 && dir != 'right')
        dir = 'left';
    else if(ev.keyCode === 38 && dir != 'down')
        dir = 'up';
    else if(ev.keyCode === 39 && dir != 'left')
        dir = 'right';
    else if(ev.keyCode === 40 && dir != 'up')
        dir = 'down';
}