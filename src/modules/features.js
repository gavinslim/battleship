const { Global } = require('./globals');
const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

const overlay = require('./features/overlay');

// Initialize Players and Gameboards
const player = Player();
const computer = Player();
const playerBoard = Gameboard();
const computerBoard = Gameboard();
const setupBoard = Gameboard();

const { shipyard } = Global();

// Get x-y position of selected cube
function getCubePosition(doc) {
  const cube = doc.getAttribute('data-key');
  const regex = /x([0-9]+)-y([0-9]+)/;
  const results = {
    x: parseInt(regex.exec(cube)[1], 10),
    y: parseInt(regex.exec(cube)[2], 10),
  };
  return results;
}

// ==========
// Game Phase
// ==========
function displayWinPage() {
  console.log('You win!');
  overlay.displayEndOverlay();
}

function displayLossPage() {
  console.log('You loss!');
  overlay.displayEndOverlay();
}

// Refresh grid and display hit and miss results
function refreshGrid(board, id) {
  const missedList = board.getMissedList();
  const hitList = board.getHitList();

  missedList.forEach((miss) => {
    const cubes = document.querySelectorAll(`div[data-key="x${miss.x}-y${miss.y}"]`);
    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === id) {
        cube.classList.add('miss');
      }
    });
  });

  hitList.forEach((hit) => {
    const cubes = document.querySelectorAll(`div[data-key="x${hit.x}-y${hit.y}"]`);
    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === id) {
        cube.classList.add('hit');
      }
    });
  });
}

// User attacking Computer's board
function userAttack() {
  const position = getCubePosition(this);
  if (computerBoard.alreadyHit(position.x, position.y)) return;

  player.attack(computerBoard, position.x, position.y);
  computer.randomAttack(playerBoard);

  refreshGrid(computerBoard, 'computer-grid');
  refreshGrid(playerBoard, 'player-grid');

  // Check for Winner
  if (computerBoard.checkAllShipsSunk()) {
    displayWinPage();
  } else if (playerBoard.checkAllShipsSunk()) {
    displayLossPage();
  }
}

function startGame() {
  // Add user attack function to each cube on the computer's grid
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    if (grid.getAttribute('id') === 'computer-grid') {
      const cubes = grid.childNodes;
      cubes.forEach((cube) => {
        if (!(cube.classList.contains('label'))) {
          cube.addEventListener('click', userAttack, false);
        }
      });
    }
  });
}

// ==========
// Setup Game
// ==========
// Display ship on starting grid
function displayShip() {
  console.log(shipyard.length);
  if (shipyard.length === 0) { return; }
  const position = getCubePosition(this);

  const parentID = this.parentNode.getAttribute('id');
  const gridNode = document.querySelector(`#${parentID}`);
  gridNode.childNodes.forEach((cube) => {
    cube.classList.remove('highlight');
  });

  const currentShip = shipyard[shipyard.length - 1];

  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${position.x + i}-y${position.y}"]`)
      : document.querySelectorAll(`div[data-key="x${position.x}-y${position.y + i}"]`);

    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'start-grid') {
        cube.classList.add('highlight');
      }
    });
  }
}

// Generate random position for computer
function genRandomPosition(currentShip) {
  let xPos;
  let yPos;
  let randomBoolean;
  let isConflicted;

  do {
    xPos = Math.floor(Math.random() * computerBoard.getBoardSize());
    yPos = Math.floor(Math.random() * computerBoard.getBoardSize());
    randomBoolean = Math.random() < 0.5;

    isConflicted = computerBoard.isConflict(
      xPos,
      yPos,
      currentShip.length,
      randomBoolean,
    );
  } while (isConflicted);

  return {
    x: parseInt(xPos, 10),
    y: parseInt(yPos, 10),
    horizontal: randomBoolean,
  };
}

function placeShips() {
  // Ignore if no ships left to place
  if (shipyard.length === 0) { return; }

  // Initialize
  const currentShip = shipyard[shipyard.length - 1];
  const position = getCubePosition(this);

  // Ignore placement if conflicts with existing ships
  const isConflicted = playerBoard.isConflict(
    position.x,
    position.y,
    currentShip.length,
    currentShip.horizontal,
  );
  if (isConflicted) return;

  // Highlight cube on starting grid
  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${position.x + i}-y${position.y}"]`)
      : document.querySelectorAll(`div[data-key="x${position.x}-y${position.y + i}"]`);

    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') !== 'computer-grid') {
        cube.classList.add('placed');
      }
    });
  }

  // Place ship on Player and Computer board
  playerBoard.placeShip(
    position.x,
    position.y,
    currentShip.length,
    currentShip.horizontal,
  );

  // Place ship on Computer board randomly
  const randPosition = genRandomPosition(currentShip);
  computerBoard.placeShip(
    randPosition.x,
    randPosition.y,
    currentShip.length,
    randPosition.horizontal,
  );

  console.log(randPosition.x, randPosition.y);

  // Remove current ship
  shipyard.pop();

  // Remove UI once all Player ships are placed
  if (shipyard.length === 0) {
    overlay.removeStartOverlay();
  }
}

// Rotate button
function activateRotateBtn() {
  const button = document.querySelector('#rotate-btn');
  button.addEventListener('click', () => {
    if (shipyard.length === 0) { return; }
    const currentShip = shipyard[shipyard.length - 1];
    currentShip.horizontal = !currentShip.horizontal;
  });
}

// Reset button
function activateResetBtn() {
  const reset = document.querySelector('#reset-btn');
  reset.addEventListener('click', () => {
    playerBoard.reset();
    computerBoard.reset();
    overlay.removeEndOverlay();
    overlay.displayStartOverlay();
  });
}

// Add start functions for initial ship placement
function setupGame() {
  activateRotateBtn();
  activateResetBtn();

  const grid = document.querySelector('#start-grid');
  const cubes = grid.childNodes;
  cubes.forEach((cube) => {
    if (!(cube.classList.contains('label'))) {
      cube.addEventListener('mouseover', displayShip, false);
      cube.addEventListener('click', placeShips, false);
    }
  });
}

function loadFeatures() {
  setupGame();
  startGame();
}

export default loadFeatures;
