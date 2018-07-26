import {drawModule} from './drawModule.js';

const mycanvas = document.getElementById('canvas-box');
const newGameButton = document.querySelector('.newGame__button');
const canvas = document.getElementById('canvas');
const form = document.getElementById('newGame');
const btn = document.getElementById('btn');

export const ctx = mycanvas.getContext('2d');

let labyrinth1 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 0, y: 1 }, { x: 0, y: 2}, { x: 0, y: 3}, { x: 0, y: 4 }, { x: 0, y: 5}, { x: 0, y: 6},
    { x: 0, y: 49 }, { x: 1, y: 49 }, { x: 2, y: 49 }, { x: 3, y: 49 }, { x: 4, y: 49 }, { x: 5, y: 49 }, { x: 6, y: 49 }, { x: 7, y: 49 },
    { x: 0, y: 48 }, { x: 0, y: 47 }, { x: 0, y: 46 }, { x: 0, y: 45 }, { x: 0, y: 44 }, { x: 0, y: 43 },
    { x: 49, y: 0 }, { x: 49, y: 1 }, { x: 49, y: 2}, { x: 49, y: 3}, { x: 49, y: 4 }, { x: 49, y: 5 }, { x: 49, y: 6}, { x: 49, y: 7},
    { x: 48, y: 0 }, { x: 47, y: 0 }, { x: 46, y: 0}, { x: 45, y: 0}, { x: 44, y: 0 }, { x: 43, y: 0 }, { x: 42, y: 0}, { x: 41, y: 0},
    { x: 49, y: 49 }, { x: 49, y: 48 }, { x: 49, y: 47}, { x: 49, y: 46}, { x: 49, y: 45 }, { x: 49, y: 44}, { x: 49, y: 43}, { x: 49, y: 42},
    { x: 48, y: 49 }, { x: 47, y: 49 }, { x: 46, y: 49 }, { x: 45, y: 49 }, { x: 44, y: 49 }, { x: 43, y: 49 }, { x: 42, y: 49 }, { x: 41, y: 49 },
  ];

let labyrinth2 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 0, y: 1 }, { x: 0, y: 2}, { x: 0, y: 3}, { x: 0, y: 4 }, { x: 0, y: 5}, { x: 0, y: 6},
    { x: 0, y: 49 }, { x: 1, y: 49 }, { x: 2, y: 49 }, { x: 3, y: 49 }, { x: 4, y: 49 }, { x: 5, y: 49 }, { x: 6, y: 49 }, { x: 7, y: 49 },
    { x: 0, y: 48 }, { x: 0, y: 47 }, { x: 0, y: 46 }, { x: 0, y: 45 }, { x: 0, y: 44 }, { x: 0, y: 43 },
    { x: 49, y: 0 }, { x: 49, y: 1 }, { x: 49, y: 2}, { x: 49, y: 3}, { x: 49, y: 4 }, { x: 49, y: 5 }, { x: 49, y: 6}, { x: 49, y: 7},
    { x: 48, y: 0 }, { x: 47, y: 0 }, { x: 46, y: 0}, { x: 45, y: 0}, { x: 44, y: 0 }, { x: 43, y: 0 }, { x: 42, y: 0}, { x: 41, y: 0},
    { x: 49, y: 49 }, { x: 49, y: 48 }, { x: 49, y: 47}, { x: 49, y: 46}, { x: 49, y: 45 }, { x: 49, y: 44}, { x: 49, y: 43}, { x: 49, y: 42},
    { x: 48, y: 49 }, { x: 47, y: 49 }, { x: 46, y: 49 }, { x: 45, y: 49 }, { x: 44, y: 49 }, { x: 43, y: 49 }, { x: 42, y: 49 }, { x: 41, y: 49 },

    { x: 20, y: 20 }, { x: 20, y: 21 }, { x: 20, y: 22 }, { x: 20, y: 23 }, { x: 20, y: 24 }, { x: 20, y: 25 }, { x: 20, y: 26 }, { x: 20, y: 27 }, { x: 20, y: 28 }, { x: 20, y: 29 },
  ];

let labyrinth3 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 0, y: 1 }, { x: 0, y: 2}, { x: 0, y: 3}, { x: 0, y: 4 }, { x: 0, y: 5}, { x: 0, y: 6},
    { x: 0, y: 49 }, { x: 1, y: 49 }, { x: 2, y: 49 }, { x: 3, y: 49 }, { x: 4, y: 49 }, { x: 5, y: 49 }, { x: 6, y: 49 }, { x: 7, y: 49 },
    { x: 0, y: 48 }, { x: 0, y: 47 }, { x: 0, y: 46 }, { x: 0, y: 45 }, { x: 0, y: 44 }, { x: 0, y: 43 },
    { x: 49, y: 0 }, { x: 49, y: 1 }, { x: 49, y: 2}, { x: 49, y: 3}, { x: 49, y: 4 }, { x: 49, y: 5 }, { x: 49, y: 6}, { x: 49, y: 7},
    { x: 48, y: 0 }, { x: 47, y: 0 }, { x: 46, y: 0}, { x: 45, y: 0}, { x: 44, y: 0 }, { x: 43, y: 0 }, { x: 42, y: 0}, { x: 41, y: 0},
    { x: 49, y: 49 }, { x: 49, y: 48 }, { x: 49, y: 47}, { x: 49, y: 46}, { x: 49, y: 45 }, { x: 49, y: 44}, { x: 49, y: 43}, { x: 49, y: 42},
    { x: 48, y: 49 }, { x: 47, y: 49 }, { x: 46, y: 49 }, { x: 45, y: 49 }, { x: 44, y: 49 }, { x: 43, y: 49 }, { x: 42, y: 49 }, { x: 41, y: 49 },

    { x: 20, y: 20 }, { x: 20, y: 21 }, { x: 20, y: 22 }, { x: 20, y: 23 }, { x: 20, y: 24 }, { x: 20, y: 25 }, { x: 20, y: 26 }, { x: 20, y: 27 }, { x: 20, y: 28 }, { x: 20, y: 29 },

    { x: 19, y: 20 }, { x: 18, y: 20 }, { x: 17, y: 20 }, { x: 16, y: 20 }, { x: 15, y: 20 }, { x: 14, y: 20 }, { x: 13, y: 20 }, { x: 12, y: 20 }, { x: 11, y: 20 }, { x: 10, y: 20 },
  ];

let labyrinth4 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 0, y: 1 }, { x: 0, y: 2}, { x: 0, y: 3}, { x: 0, y: 4 }, { x: 0, y: 5}, { x: 0, y: 6},
    { x: 0, y: 49 }, { x: 1, y: 49 }, { x: 2, y: 49 }, { x: 3, y: 49 }, { x: 4, y: 49 }, { x: 5, y: 49 }, { x: 6, y: 49 }, { x: 7, y: 49 },
    { x: 0, y: 48 }, { x: 0, y: 47 }, { x: 0, y: 46 }, { x: 0, y: 45 }, { x: 0, y: 44 }, { x: 0, y: 43 },
    { x: 49, y: 0 }, { x: 49, y: 1 }, { x: 49, y: 2}, { x: 49, y: 3}, { x: 49, y: 4 }, { x: 49, y: 5 }, { x: 49, y: 6}, { x: 49, y: 7},
    { x: 48, y: 0 }, { x: 47, y: 0 }, { x: 46, y: 0}, { x: 45, y: 0}, { x: 44, y: 0 }, { x: 43, y: 0 }, { x: 42, y: 0}, { x: 41, y: 0},
    { x: 49, y: 49 }, { x: 49, y: 48 }, { x: 49, y: 47}, { x: 49, y: 46}, { x: 49, y: 45 }, { x: 49, y: 44}, { x: 49, y: 43}, { x: 49, y: 42},
    { x: 48, y: 49 }, { x: 47, y: 49 }, { x: 46, y: 49 }, { x: 45, y: 49 }, { x: 44, y: 49 }, { x: 43, y: 49 }, { x: 42, y: 49 }, { x: 41, y: 49 },

    { x: 20, y: 20 }, { x: 20, y: 21 }, { x: 20, y: 22 }, { x: 20, y: 23 }, { x: 20, y: 24 }, { x: 20, y: 25 }, { x: 20, y: 26 }, { x: 20, y: 27 }, { x: 20, y: 28 }, { x: 20, y: 29 },

    { x: 19, y: 20 }, { x: 18, y: 20 }, { x: 17, y: 20 }, { x: 16, y: 20 }, { x: 15, y: 20 }, { x: 14, y: 20 }, { x: 13, y: 20 }, { x: 12, y: 20 }, { x: 11, y: 20 }, { x: 10, y: 20 },

    { x: 30, y: 30 }, { x: 30, y: 31 }, { x: 30, y: 32 }, { x: 30, y: 33 }, { x: 30, y: 34 }, { x: 30, y: 35 }, { x: 30, y: 36 }, { x: 30, y: 37 }, { x: 30, y: 38 }, { x: 30, y: 39 },
  ];

let labyrinth5 = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 },
    { x: 0, y: 1 }, { x: 0, y: 2}, { x: 0, y: 3}, { x: 0, y: 4 }, { x: 0, y: 5}, { x: 0, y: 6},
    { x: 0, y: 49 }, { x: 1, y: 49 }, { x: 2, y: 49 }, { x: 3, y: 49 }, { x: 4, y: 49 }, { x: 5, y: 49 }, { x: 6, y: 49 }, { x: 7, y: 49 },
    { x: 0, y: 48 }, { x: 0, y: 47 }, { x: 0, y: 46 }, { x: 0, y: 45 }, { x: 0, y: 44 }, { x: 0, y: 43 },
    { x: 49, y: 0 }, { x: 49, y: 1 }, { x: 49, y: 2}, { x: 49, y: 3}, { x: 49, y: 4 }, { x: 49, y: 5 }, { x: 49, y: 6}, { x: 49, y: 7},
    { x: 48, y: 0 }, { x: 47, y: 0 }, { x: 46, y: 0}, { x: 45, y: 0}, { x: 44, y: 0 }, { x: 43, y: 0 }, { x: 42, y: 0}, { x: 41, y: 0},
    { x: 49, y: 49 }, { x: 49, y: 48 }, { x: 49, y: 47}, { x: 49, y: 46}, { x: 49, y: 45 }, { x: 49, y: 44}, { x: 49, y: 43}, { x: 49, y: 42},
    { x: 48, y: 49 }, { x: 47, y: 49 }, { x: 46, y: 49 }, { x: 45, y: 49 }, { x: 44, y: 49 }, { x: 43, y: 49 }, { x: 42, y: 49 }, { x: 41, y: 49 },

    { x: 20, y: 20 }, { x: 20, y: 21 }, { x: 20, y: 22 }, { x: 20, y: 23 }, { x: 20, y: 24 }, { x: 20, y: 25 }, { x: 20, y: 26 }, { x: 20, y: 27 }, { x: 20, y: 28 }, { x: 20, y: 29 },

    { x: 19, y: 20 }, { x: 18, y: 20 }, { x: 17, y: 20 }, { x: 16, y: 20 }, { x: 15, y: 20 }, { x: 14, y: 20 }, { x: 13, y: 20 }, { x: 12, y: 20 }, { x: 11, y: 20 }, { x: 10, y: 20 },

    { x: 30, y: 30 }, { x: 30, y: 31 }, { x: 30, y: 32 }, { x: 30, y: 33 }, { x: 30, y: 34 }, { x: 30, y: 35 }, { x: 30, y: 36 }, { x: 30, y: 37 }, { x: 30, y: 38 }, { x: 30, y: 39 },

    { x: 31, y: 30 }, { x: 32, y: 30 }, { x: 33, y: 30 }, { x: 34, y: 30 }, { x: 35, y: 30 }, { x: 36, y: 30 }, { x: 37, y: 30 }, { x: 38, y: 30 }, { x: 39, y: 30 }, { x: 40, y: 30 },
  ];

export let snakeSize = 10,
  w = 500,
  h = 500,
  scoreInitial = 0,
  scoreLabyrinth,
  scoreSpeed,
  snakeInitial = [
    { x: 25, y: 25 },
    { x: 26, y: 25 },
    { x: 27, y: 25 },
    { x: 28, y: 25 },
  ],
  foodInitial = {
    x: '',
    y: '',
  },
  interval = '',
  walls,
  powerUp = {
    changeLenght: '',
    speed: '',
  },
  lenghtUpPositionInitial = {
    x: '',
    y: '',
  },
  lenghtDownPositionInitial = {
    x: '',
    y: '',
  },
  speedUpPositionInitial = {
    x: '',
    y: '',
  },
  speedDownPositionInitial = {
    x: '',
    y: '',
  };

 export const checkCollision = (x, y, array) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) return true;
    }
    return false;
  };

newGameButton.addEventListener('click',function(el) {
  el.preventDefault()
  const labyrinth = document.querySelector('input[name="labyrinth"]:checked').value;
  const powerUpTime = document.querySelector('input[name="powerUpTime"]:checked').value;
  const powerUpLenght = document.querySelector('input[name="powerUpLenght"]:checked').value;
  const speedScore = document.querySelector('input[name="speedScore"]:checked').value;
  
  canvas.style.setProperty('display', 'flex');
  form.style.setProperty('display', 'none');
  btn.style.setProperty('display', 'none');

  switch (labyrinth) {
    case 'labyrinth1':
      walls = labyrinth1;
      scoreLabyrinth = 1;
      break;
    case 'labyrinth2':
      walls = labyrinth2;
      scoreLabyrinth = 2;
      break;
    case 'labyrinth3':
      walls = labyrinth3;
      scoreLabyrinth = 3;
      break;
    case 'labyrinth4':
      walls = labyrinth4;
      scoreLabyrinth = 4;
      break;
    case 'labyrinth5':
      walls = labyrinth5;
      scoreLabyrinth = 5;
      break; 
  };

  switch (powerUpTime) {
    case '3000':
      powerUp.speed = 3;
      break;
    case '6000':
      powerUp.speed = 6;
      break;
    case '12000':
      powerUp.speed = 12;
      break;
  };

  switch (powerUpLenght) {
    case '2':
      powerUp.changeLenght = 3;
      break;
    case '3':
      powerUp.changeLenght = 3;
      break;
    case '4':
      powerUp.changeLenght = 4;
      break;
  };

  switch (speedScore) {
    case '1':
      interval = 200;
      scoreSpeed = 1;
      break;
    case '2':
      interval = 150;
      scoreSpeed = 2;
      break;
    case '3':
      interval = 100;
      scoreSpeed = 3;
      break;
    case '4':
      interval = 50;
      scoreSpeed = 4;
     break;
    case '5':
      interval = 25;
      scoreSpeed = 5;
      break; 
  };
  
  drawModule()
});
