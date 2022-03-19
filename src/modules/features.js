const playerFuncs = require('./player');

const { Player } = playerFuncs;

const p1 = Player();
const p2 = Player();

const ship = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

// Ship list for initial placement
const initialShipList = [
  ship.carrier,
  ship.battleship,
  ship.cruiser,
  ship.submarine,
  ship.destroyer,
];

function getCubeCoordinate(doc) {
  const childID = doc.getAttribute('data-key');
  const regex = /x([0-9]+)-y([0-9]+)/;
  const results = {
    x: regex.exec(childID)[1],
    y: regex.exec(childID)[2],
  };

  return results;
}

function mouseClick() {
  const childID = this.getAttribute('data-key');
  const parentID = this.parentNode.getAttribute('id');

  const regex = /x([0-9]+)-y([0-9]+)/;
  const results = {
    x: regex.exec(childID)[1],
    y: regex.exec(childID)[2],
  };

  const gridNode = document.querySelector(`#${parentID}`);
  const cubeNode = gridNode.querySelector(`div[data-key="${childID}"]`);
  cubeNode.classList.add('active');

  console.log(p1.attack(p2.board, results.x, results.y));
}

// Add grid functions
function addGridPlayFeature() {
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

function displayShip() {
  if (initialShipList.length === 0) { return; }
  const coordinate = getCubeCoordinate(this);
  console.log(initialShipList.length, initialShipList[initialShipList.length - 1]);
}

function placeShip() {
  if (initialShipList.length === 0) { return; }
  const coordinate = getCubeCoordinate(this);
  // console.log(`Click! ${coordinate.x}, ${coordinate.y}`);
  // p1.board.placeShip({ x: coordinate.x, y: coordinate.y }, ship.destroyer);
  initialShipList.pop();
}

// Add start functions for initial ship placement
function addGridPlacementFeature() {
  const grid = document.querySelector('#start-grid');
  const cubes = grid.childNodes;
  cubes.forEach((cube) => {
    cube.addEventListener('mouseover', displayShip, false);
    cube.addEventListener('click', placeShip, false);
  });
}

function loadFeatures() {
  addGridPlayFeature();
  addGridPlacementFeature();
}

export default loadFeatures;
