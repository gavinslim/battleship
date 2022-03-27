const { Global } = require('./globals');
const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

const displayModule = require('./features/display');

// Initialize Players and Gameboards
const player = Player();
const computer = Player();
const playerBoard = Gameboard();
const computerBoard = Gameboard();
const global = Global();

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

// ============
// Result Phase
// ============
// Check for Winner
function checkWinner() {
  if (computerBoard.checkAllShipsSunk()) {
    displayModule.displayWinPage();
  } else if (playerBoard.checkAllShipsSunk()) {
    displayModule.displayLossPage();
  }
}

// ==========
// Game Phase
// ==========
// Player attack
function playerAttack(position) {
  player.attack(computerBoard, position.x, position.y);
  displayModule.refreshGrid(computerBoard, 'computer-grid');
}

// Computer attack
let smartMove = false;
function computerAttack() {
  if (smartMove) {
    smartMove = computer.smartAttack(playerBoard);
  } else if (computer.randomAttack(playerBoard)) {
    smartMove = true;
  }
  displayModule.refreshGrid(playerBoard, 'player-grid');
}

// Attack round
function attackRound() {
  const position = getCubePosition(this);
  if (computerBoard.alreadyHit(position.x, position.y)) return;

  // Player's turn
  playerAttack(position);
  displayModule.refreshShipStatus(computerBoard, 'Computer');

  // Computer's turn with delay
  setTimeout(() => {
    computerAttack();
    displayModule.refreshShipStatus(playerBoard, 'Player');
    checkWinner();
  }, global.delay);
}

// Add user attack function to each cube on the computer's grid
function startGame() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    if (grid.getAttribute('id') === 'computer-grid') {
      const cubes = grid.childNodes;
      cubes.forEach((cube) => {
        if (!(cube.classList.contains('label'))) {
          cube.addEventListener('click', attackRound, false);
        }
      });
    }
  });
}

// ==========
// Setup Game
// ==========
// Display ship on setup grid
function displayShip() {
  if (global.shipyard.length === 0) { return; }
  const position = getCubePosition(this);

  const parentID = this.parentNode.getAttribute('id');
  const gridNode = document.querySelector(`#${parentID}`);
  gridNode.childNodes.forEach((cube) => {
    cube.classList.remove('highlight');
  });

  const currentShip = global.shipyard[global.shipyard.length - 1];

  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${position.x + i}-y${position.y}"]`)
      : document.querySelectorAll(`div[data-key="x${position.x}-y${position.y + i}"]`);

    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'setup-grid') {
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
    xPos = Math.floor(Math.random() * global.boardSize);
    yPos = Math.floor(Math.random() * global.boardSize);
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
  if (global.shipyard.length === 0) { return; }

  // Initialize
  const currentShip = global.shipyard[global.shipyard.length - 1];
  const position = getCubePosition(this);

  // Ignore placement if conflicting with existing ships
  const isConflicted = playerBoard.isConflict(
    position.x,
    position.y,
    currentShip.length,
    currentShip.horizontal,
  );
  if (isConflicted) return;

  // Place ship on player grid
  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${position.x + i}-y${position.y}"]`)
      : document.querySelectorAll(`div[data-key="x${position.x}-y${position.y + i}"]`);

    cubes.forEach((cube) => {
      const grid = cube.parentNode.getAttribute('id');
      if (grid === 'player-grid' || grid === 'setup-grid') {
        cube.classList.add('placed');
      }
    });
  }

  // Place ship on Player and Computer board
  playerBoard.placeShip(
    currentShip.name,
    position.x,
    position.y,
    currentShip.length,
    currentShip.horizontal,
  );

  // Place ship on Computer board randomly
  const randPosition = genRandomPosition(currentShip);
  computerBoard.placeShip(
    currentShip.name,
    randPosition.x,
    randPosition.y,
    currentShip.length,
    randPosition.horizontal,
  );

  displayModule.refreshShipStatus(computerBoard, 'Computer');
  displayModule.refreshShipStatus(playerBoard, 'Player');
  displayModule.refreshShipStatus(playerBoard, 'Setup');
  console.log(randPosition.x, randPosition.y);

  // Remove current ship
  global.shipyard.pop();

  // Remove UI once all Player ships are placed
  if (global.shipyard.length === 0) {
    displayModule.removeSetupOverlay();
  }
}

// Rotate button
function activateRotateBtn() {
  // Rotate ship
  function rotate() {
    if (global.shipyard.length === 0) { return; }

    const currentShip = global.shipyard[global.shipyard.length - 1];
    currentShip.horizontal = !currentShip.horizontal;

    // Refresh highlighted cubes on grid
    const cube = document.querySelectorAll('.highlight')[0];
    const mouseEvent = new Event('mouseover');
    cube.dispatchEvent(mouseEvent);
  }

  // Clicking Rotate button
  const button = document.querySelector('#rotate-btn');
  button.addEventListener('click', rotate);

  // Press 'R' key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') rotate();
  });
}

function clearGrid(id) {
  const grid = document.querySelector(`#${id}`);
  const cubes = grid.childNodes;
  cubes.forEach((cube) => {
    cube.classList.remove('miss');
    cube.classList.remove('highlight');
    cube.classList.remove('placed');
    cube.classList.remove('hit');
  });
}

// Reset button
function activateResetBtn() {
  const reset = document.querySelector('#reset-btn');
  reset.addEventListener('click', () => {
    // Clear grids
    clearGrid('setup-grid');
    clearGrid('computer-grid');
    clearGrid('player-grid');

    // Reset variables
    global.resetShipYard();
    playerBoard.reset();
    computerBoard.reset();
    smartMove = false;

    // Refresh visuals
    displayModule.resetShipStatus('Setup');
    displayModule.refreshShipStatus(computerBoard, 'Computer');
    displayModule.refreshShipStatus(playerBoard, 'Player');
    displayModule.refreshShipStatus(playerBoard, 'Setup');

    displayModule.removeEndOverlay();
    displayModule.displaySetupOverlay();
  });
}

// Add setup functions for initial ship placement
function setupGame() {
  activateRotateBtn();
  activateResetBtn();

  const grid = document.querySelector('#setup-grid');
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
