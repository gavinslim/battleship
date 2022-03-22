const { Player } = require('./player');
const { Gameboard } = require('./gameboard');

// Initialize Players and Gameboards
const p1 = Player();
const p2 = Player();

const board1 = Gameboard();
const board2 = Gameboard();

// const playerTurn = 1;

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

function refreshGrid(board) {
  const missedList = board.getMissedList();
  const hitList = board.getHitList();
  console.log(hitList);

  missedList.forEach((miss) => {
    const cubes = document.querySelectorAll(`div[data-key="x${miss.x}-y${miss.y}"]`);
    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'player1-grid') {
        cube.classList.add('miss');
      }
    });
  });

  hitList.forEach((hit) => {
    const cubes = document.querySelectorAll(`div[data-key="x${hit.x}-y${hit.y}"]`);
    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'player1-grid') {
        cube.classList.add('hit');
        // cube.classList.add('set');
      }
    });
  });
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

  // Ignore click if previously clicked
  // if (cubeNode.classList.contains('hit') || cubeNode.classList.contains('miss')) {
  //   return;
  // }

  if (board2.alreadyHit(results.x, results.y)) {
    return;
  }

  if (p1.attack(board2, results.x, results.y)) {
    cubeNode.classList.add('hit');
    // console.log('Hit!');
  } else {
    cubeNode.classList.add('miss');
    // console.log('Miss!');
  }

  if (!p2.randomAttack(board1)) {
    console.log('No more option!');
  }

  refreshGrid(board1);
}

// Add grid functions
function runGame() {
  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    if (grid.getAttribute('id') === 'computer-grid') {
      const cubes = grid.childNodes;
      cubes.forEach((cube) => {
        cube.addEventListener('click', mouseClick, false);
      });
    }
  });
}

function displayShip() {
  if (shipyard.length === 0) { return; }
  const coordinate = getCubeCoordinate(this);

  const parentID = this.parentNode.getAttribute('id');
  const gridNode = document.querySelector(`#${parentID}`);
  gridNode.childNodes.forEach((cube) => {
    cube.classList.remove('miss');
  });

  const currentShip = shipyard[shipyard.length - 1];

  for (let i = 0; i < currentShip.length; i += 1) {
    const cubes = currentShip.horizontal
      ? document.querySelectorAll(`div[data-key="x${coordinate.x + i}-y${coordinate.y}"]`)
      : document.querySelectorAll(`div[data-key="x${coordinate.x}-y${coordinate.y + i}"]`);

    cubes.forEach((cube) => {
      if (cube.parentNode.getAttribute('id') === 'start-grid') {
        cube.classList.add('miss');
      }
    });
  }
}

function generateRandomCoord(currentShip) {
  let xPos;
  let yPos;
  let randomBoolean;
  let isConflicted;

  do {
    xPos = Math.floor(Math.random() * board2.getBoardSize());
    yPos = Math.floor(Math.random() * board2.getBoardSize());
    randomBoolean = Math.random() < 0.5;

    isConflicted = board2.isConflict(
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
      const cubes = currentShip.horizontal
        ? document.querySelectorAll(`div[data-key="x${coordinate.x + i}-y${coordinate.y}"]`)
        : document.querySelectorAll(`div[data-key="x${coordinate.x}-y${coordinate.y + i}"]`);

      cubes.forEach((cube) => {
        if (cube.parentNode.getAttribute('id') !== 'computer-grid') {
          cube.classList.add('set');
        }
      });
    }

    // Place ship on Player 1 board
    board1.placeShip(coordinate.x, coordinate.y, currentShip.length, currentShip.horizontal);
    shipyard.pop();

    // Place ship on Computer board randomly
    const compCoord = generateRandomCoord(currentShip);
    console.log(compCoord.x, compCoord.y, compCoord.horizontal);
    board2.placeShip(compCoord.x, compCoord.y, currentShip.length, compCoord.horizontal);

    // Remove UI once all Player 1 ships are placed
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
    if (!(cube.classList.contains('label'))) {
      cube.addEventListener('mouseover', displayShip, false);
      cube.addEventListener('click', placeShips, false);
    }
  });
}

function loadFeatures() {
  runGame();
  runSetup();
}

export default loadFeatures;
