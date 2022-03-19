const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

// Initialize Players and Gameboards
const p1 = Player();
const p2 = Player();

const board1 = Gameboard();
const board2 = Gameboard();

const ship = {
  destroyer: 2,
  submarine: 3,
  cruiser: 3,
  battleship: 4,
  carrier: 5,
};

// Ships to be placed on player 1's board
const shipyard = [
  { length: ship.destroyer, horizontal: true },
  { length: ship.submarine, horizontal: true },
  { length: ship.cruiser, horizontal: true },
  { length: ship.battleship, horizontal: true },
  { length: ship.carrier, horizontal: true },
];

function getCubeCoordinate(doc) {
  const childID = doc.getAttribute('data-key');
  const regex = /x([0-9]+)-y([0-9]+)/;
  const results = {
    x: parseInt(regex.exec(childID)[1], 10),
    y: parseInt(regex.exec(childID)[2], 10),
  };

  return results;
}

function mouseClick() {
  const childID = this.getAttribute('data-key');
  const parentID = this.parentNode.getAttribute('id');

  const regex = /x([0-9]+)-y([0-9]+)/;
  const results = {
    x: parseInt(regex.exec(childID)[1], 10),
    y: parseInt(regex.exec(childID)[2], 10),
  };

  const gridNode = document.querySelector(`#${parentID}`);
  const cubeNode = gridNode.querySelector(`div[data-key="${childID}"]`);
  cubeNode.classList.add('active');

  console.log(p1.attack(p2.board, results.x, results.y));
}

// Add grid functions
function runGame() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    if (grid.getAttribute('id') !== 'start-grid') {
      const cubes = grid.childNodes;
      cubes.forEach((cube) => {
        cube.addEventListener('click', mouseClick, false);
      });
    }
  });
}

function getCoordinateRange(currCoordinate) {
  const currentShip = shipyard[shipyard.length - 1];
  const xmax = currentShip.horizontal
    ? parseInt(currCoordinate.x, 10) + parseInt(currentShip.length, 10)
    : parseInt(currCoordinate.x, 10);

  const ymax = currentShip.horizontal
    ? parseInt(currCoordinate.y, 10)
    : parseInt(currCoordinate.y, 10) + parseInt(currentShip.length, 10);

  return {
    x: xmax,
    y: ymax,
  };
}

function displayShip() {
  if (shipyard.length === 0) { return; }
  const coordinate = getCubeCoordinate(this);

  const parentID = this.parentNode.getAttribute('id');
  const gridNode = document.querySelector(`#${parentID}`);
  gridNode.childNodes.forEach((cube) => {
    cube.classList.remove('active');
  });

  const currentShip = shipyard[shipyard.length - 1];

  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${coordinate.x + i}-y${coordinate.y}"]`)
      : document.querySelectorAll(`div[data-key="x${coordinate.x}-y${coordinate.y + i}"]`);

    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'start-grid') {
        cube.classList.add('active');
      }
    });
  }
}

function placeShip() {
  // Ignore if no ships left to place
  if (shipyard.length === 0) { return; }

  // Initialize
  const currentShip = shipyard[shipyard.length - 1];
  const coordinate = getCubeCoordinate(this);

  const isConflicted = board1.isConflict(
    coordinate.x,
    coordinate.y,
    currentShip.length,
    currentShip.horizontal,
  );

  // If ship placement is not conflicing with existing ship, place on board
  if (!isConflicted) {
    for (let i = 0; i < currentShip.length; i += 1) {
      console.log(i);
      const cubes = currentShip.horizontal
        ? document.querySelectorAll(`div[data-key="x${coordinate.x + i}-y${coordinate.y}"]`)
        : document.querySelectorAll(`div[data-key="x${coordinate.x}-y${coordinate.y + i}"]`);

      cubes.forEach((cube) => {
        if (cube.parentNode.getAttribute('id') !== 'player2-grid') {
          cube.classList.add('set');
        }
      });
    }

    // Place ship on board
    board1.placeShip(coordinate.x, coordinate.y, currentShip.length, currentShip.horizontal);

    shipyard.pop();

    if (shipyard.length === 0) {
      const overlay = document.querySelector('#overlay');
      const start = document.querySelector('#start');

      overlay.classList.remove('active');
      start.classList.remove('active');
    }
  }
}

function addRotateFeature() {
  const button = document.querySelector('#rotate-button');
  button.addEventListener('click', () => {
    if (shipyard.length === 0) { return; }
    const currentShip = shipyard[shipyard.length - 1];
    currentShip.horizontal = !currentShip.horizontal;
  });
}

// Add start functions for initial ship placement
function runSetup() {
  addRotateFeature();

  const grid = document.querySelector('#start-grid');
  const cubes = grid.childNodes;
  cubes.forEach((cube) => {
    cube.addEventListener('mouseover', displayShip, false);
    cube.addEventListener('click', placeShip, false);
  });
}

function loadFeatures() {
  runGame();
  runSetup();
}

export default loadFeatures;
