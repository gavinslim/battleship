const { Global } = require('../globals');

const global = Global();

// Refresh ship status
function refreshShipStatus(board, id) {
  const gridContainer = document.querySelector(`#${id}`);

  const ships = board.getShipList();
  ships.forEach((ship) => {
    const shipLabelNode = gridContainer.querySelector(`#${ship.getName()}`);
    const checkmark = shipLabelNode.querySelector('.fa-circle-check');
    const xmark = shipLabelNode.querySelector('.fa-circle-xmark');

    if (ship.isSunk()) {
      checkmark.classList.remove('active');
      xmark.classList.add('active');
    } else {
      checkmark.classList.add('active');
      xmark.classList.remove('active');
    }
  });
}

// Reset ship status
function resetShipStatus(id) {
  const gridContainer = document.querySelector(`#${id}`);
  global.shipyard.forEach((ship) => {
    const shipLabelNode = gridContainer.querySelector(`#${ship.name}`);
    const checkmark = shipLabelNode.querySelector('.fa-circle-check');
    const xmark = shipLabelNode.querySelector('.fa-circle-xmark');
    checkmark.classList.remove('active');
    xmark.classList.add('active');
  });
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

// Display setup page
function displaySetupOverlay() {
  const overlay = document.querySelector('#setup-overlay');
  const setup = document.querySelector('#setup');
  overlay.classList.add('active');
  setup.classList.add('active');
}

// Remove setup page
function removeSetupOverlay() {
  const overlay = document.querySelector('#setup-overlay');
  const setup = document.querySelector('#setup');
  overlay.classList.remove('active');
  setup.classList.remove('active');
}

// Display result page
function displayEndOverlay() {
  const endOverlay = document.querySelector('#end-overlay');
  const end = document.querySelector('#end');
  endOverlay.classList.add('active');
  end.classList.add('active');
}

// Remove result page
function removeEndOverlay() {
  const endOverlay = document.querySelector('#end-overlay');
  const end = document.querySelector('#end');
  endOverlay.classList.remove('active');
  end.classList.remove('active');
}

// Display win page
function displayWinPage() {
  const message = document.querySelector('#message');
  message.textContent = 'VICTORY';
  message.style.setProperty('color', 'green');
  displayEndOverlay();
}

// Display loss page
function displayLossPage() {
  const message = document.querySelector('#message');
  message.textContent = 'DEFEAT';
  message.style.setProperty('color', 'red');
  displayEndOverlay();
}

module.exports = {
  refreshShipStatus,
  resetShipStatus,
  refreshGrid,
  displaySetupOverlay,
  removeSetupOverlay,
  displayEndOverlay,
  removeEndOverlay,
  displayWinPage,
  displayLossPage,
};
