import { insertBoard } from './script.js';
import {
  ctx,
  snakeSize,
  w,
  h,
  walls,
  powerUp,
  scoreInitial,
  foodInitial,
  interval,
  snakeInitial,
  lenghtUpPositionInitial,
  lenghtDownPositionInitial,
  speedUpPositionInitial,
  speedDownPositionInitial,
  scoreLabyrinth,
  scoreSpeed,
  checkCollision
} from './dataModule.js';

import {
  bodySnake,
  apple,
  changeLenghtUp,
  changeLenghtDown,
  speedUp,
  speedDown,
  drawWalls,
  scoreText
} from './drawElementsModule.js';

const btn = document.getElementById('btn');
const canvas = document.getElementById('canvas');

export let direction,
  tail,
  gameloop,
  scoreTemp = scoreInitial,
  score = scoreTemp,
  snake = snakeInitial,
  food = foodInitial,
  lenghtUpPosition = lenghtUpPositionInitial,
  lenghtDownPosition = lenghtDownPositionInitial,
  speedUpPosition = speedUpPositionInitial,
  speedDownPosition = speedDownPositionInitial,
  scoreBoard;

let snakeX = snake[0].x,
    snakeY = snake[0].y;

const restart = () => {
  tail;
  gameloop;
  scoreTemp = scoreInitial;
  score = scoreTemp;
  snake = [
    { x: 25, y: 25 },
    { x: 26, y: 25 },
    { x: 27, y: 25 },
    { x: 28, y: 25 },
  ];
  food = foodInitial;
  lenghtUpPosition = lenghtUpPositionInitial;
  lenghtDownPosition = lenghtDownPositionInitial;
  speedUpPosition = speedUpPositionInitial;
  speedDownPosition = speedDownPositionInitial;
  snakeX = snake[0].x;
  snakeY = snake[0].y;
};

const updateScoreBoards = () => {
  if (sessionStorage.getItem('saveScoreBoard') == null) {
    scoreBoard = [];
  } else {
    scoreBoard = [...JSON.parse(sessionStorage.getItem('saveScoreBoard'))];
  }
};

const scoreToBoard = () => {
  console.log(scoreBoard.length);
  if (scoreBoard.length >= 5) {
    scoreBoard.pop();
    scoreBoard = [score, ...scoreBoard];
  } else {
    scoreBoard = [...scoreBoard, score];
  }
};

const drawGameBox = () => {
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);
};

const moveDirection = () => {
  switch (direction) {
    case 'right':
      snakeX++;
      break;
    case 'left':
      snakeX--;
      break;
    case 'up':
      snakeY--;
      break;
    case 'down':
      snakeY++;
      break;
  }
};

const moveBorderBox = () => {
  if (snakeX == -1) {
    snakeX = w / snakeSize;
  } else if (snakeX == w / snakeSize) {
    snakeX = 0;
  } else if (snakeY == -1) {
    snakeY = h / snakeSize;
  } else if (snakeY == h / snakeSize) {
    snakeY = 0;
  }
};

const collisionConditions = () => {
  updateScoreBoards();
  //restart game
  btn.style.setProperty('display', 'block');
  canvas.style.setProperty('display', 'none');
  ctx.clearRect(0, 0, w, h);
  gameloop = clearInterval(gameloop);
  scoreToBoard();
  console.log(scoreBoard);
  sessionStorage.setItem('saveScoreBoard', JSON.stringify(scoreBoard));
  insertBoard();
};

const collision = () => {
  if (
    checkCollision(snakeX, snakeY, snake) ||
    checkCollision(snakeX, snakeY, walls)
  ) {
    collisionConditions();
    return;
  };
  moveBorderBox();
};

const randomElements = element => {
  element.x = Math.floor(Math.random() * 50 + 1);
  element.y = Math.floor(Math.random() * 50 + 1);
};

const createFood = () => {
  function foodInWall() {
    if (checkCollision(food.x, food.y, walls)) {
      randomElements(food);
    };
  };
  randomElements(food);
  foodInWall();

  snake.map(el => {
    if (food.x === el.x && food.y === el.y) {
      randomElements(food);
    };
  });
};

const createPowerUp = () => {
  const createLenghtUp = () => {
    if (checkCollision(lenghtUpPosition.x, lenghtUpPosition.y, walls)) {
      randomElements(lenghtUpPosition);
    };
    randomElements(lenghtUpPosition);

    snake.map(el => {
      if (lenghtUpPosition.x === el.x && lenghtUpPosition.y === el.y) {
        randomElements(lenghtUpPosition);
      };
    });
  };

  const createLenghtDown = () => {
    if (checkCollision(lenghtDownPosition.x, lenghtDownPosition.y, walls)) {
      randomElements(lenghtDownPosition);
    };
    randomElements(lenghtDownPosition);

    snake.map(el => {
      if (lenghtDownPosition.x === el.x && lenghtDownPosition.y === el.y) {
        randomElements(lenghtDownPosition);
      };
    });
  };

  const createSpeedUp = () => {
    if (checkCollision(speedUpPosition.x, speedUpPosition.y, walls)) {
      randomElements(speedUpPosition);
    };
    randomElements(speedUpPosition);

    snake.map(el => {
      if (speedUpPosition.x === el.x && speedUpPosition.y === el.y) {
        randomElements(speedUpPosition);
      };
    });
  };

  const createSpeedDown = () => {
    if (checkCollision(speedDownPosition.x, speedDownPosition.y, walls)) {
      randomElements(speedDownPosition);
    };
    randomElements(speedDownPosition);

    snake.map(el => {
      if (speedDownPosition.x === el.x && speedDownPosition.y === el.y) {
        randomElements(speedDownPosition);
      };
    });
  };
  return [createLenghtUp, createLenghtDown, createSpeedUp, createSpeedDown];
};

const printElement = () => {
  for (var i = 0; i < snake.length; i++) {
    bodySnake(snake[i].x, snake[i].y);
  }
  for (var i = 0; i < walls.length; i++) {
    drawWalls(walls[i].x, walls[i].y);
  }

  apple(food.x, food.y);
  if (lenghtUpPosition.x !== '') {
    changeLenghtUp(lenghtUpPosition.x, lenghtUpPosition.y);
  }
  if (lenghtDownPosition.x !== '') {
    changeLenghtDown(lenghtDownPosition.x, lenghtDownPosition.y);
  }
  if (speedUpPosition.x !== '') {
    speedUp(speedUpPosition.x, speedUpPosition.y);
  }
  if (speedDownPosition.x !== '') {
    speedDown(speedDownPosition.x, speedDownPosition.y);
  }
};

export const drawModule = () => {
  restart();
  const paint = () => {
    drawGameBox();
    moveDirection();
    collision();

    const bodySpeedPowerUp = intervalTemp => {
      gameloop = clearInterval(gameloop);
      gameloop = setInterval(paint, intervalTemp);
      setTimeout(() => {
        gameloop = clearInterval(gameloop);
        gameloop = setInterval(paint, interval);
      }, powerUp.speed * 1000);
    };

    const snakeStep = () => {
      snake.pop();
      tail = { x: snakeX, y: snakeY };
      snake = [tail, ...snake];
    };

    const snakeEatApple = () => {
      tail = { x: snakeX, y: snakeY };
      scoreTemp++;
      score = scoreTemp * scoreLabyrinth * scoreSpeed;
      createFood(); //Create new food
      snake = [tail, ...snake];
      if (scoreTemp % 3 == 0) {
        let powerUpArray = createPowerUp();
        let temp =
          powerUpArray[Math.floor(Math.random() * powerUpArray.length)];
        temp();
      };
    };

    const snakeEatLenghtUpPower = () => {
      tail = [];
      for (let i = 0; i < powerUp.changeLenght; i++) {
        tail = [{ x: snakeX, y: snakeY }, ...tail];
      };
      snake = [...tail, ...snake];
      lenghtUpPosition.x = '';
      lenghtUpPosition.y = '';
    };

    const snakeEatLenghtDownPower = () => {
      if (snake.length > powerUp.changeLenght) {
        for (let i = 0; i < powerUp.changeLenght; i++) {
          snake.pop();
        };
      };
      lenghtDownPosition.x = '';
      lenghtDownPosition.y = '';
    };

    const snakeEatSpeedUpPower = () => {
      let intervalTemp = interval / powerUp.speed;
      bodySpeedPowerUp(intervalTemp);
      snakeStep();
      speedUpPosition.x = '';
      speedUpPosition.y = '';
    };

    const snakeEatSpeedDownPower = () => {
      let intervalTemp = interval * powerUp.speed;
      bodySpeedPowerUp(intervalTemp);
      snakeStep();
      speedDownPosition.x = '';
      speedDownPosition.y = '';
    };

    if (snakeX == food.x && snakeY == food.y) {
      snakeEatApple();
    } else if (snakeX == lenghtUpPosition.x && snakeY == lenghtUpPosition.y) {
      snakeEatLenghtUpPower();
    } else if (
      snakeX == lenghtDownPosition.x &&
      snakeY == lenghtDownPosition.y
    ) {
      snakeEatLenghtDownPower();
    } else if (snakeX == speedUpPosition.x && snakeY == speedUpPosition.y) {
      snakeEatSpeedUpPower();
    } else if (snakeX == speedDownPosition.x && snakeY == speedDownPosition.y) {
      snakeEatSpeedDownPower();
    } else {
      snakeStep();
    }

    printElement();
    scoreText();
  };

  const init = () => {
    direction = 'down';
    createFood();
    gameloop = setInterval(paint, interval);
  };

  return init();
};

document.onkeydown = function(event) {
  let keyCode1 = event.keyCode;

  switch (keyCode1) {
    case 37:
      if (direction != 'right') {
        //te ify są konieczne, zeby grani nie kończyła się jak głowa dotknie ciała poruszając sie w prawo po nacisenięciu w lewo
        direction = 'left';
      };
      break;

    case 39:
      if (direction != 'left') {
        direction = 'right';
      };
      break;

    case 38:
      if (direction != 'down') {
        direction = 'up';
      };
      break;

    case 40:
      if (direction != 'up') {
        direction = 'down';
      };
      break;
  }
};
