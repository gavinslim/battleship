import loadFeatures from './features';

const { Global } = require('./globals');

const { boardSize } = Global();

const content = document.querySelector('.content');

document.documentElement.style.setProperty('--grid-size', boardSize);

function generateShipNode(name) {
  const shipNode = document.createElement('div');
  shipNode.classList.add('ship');
  shipNode.setAttribute('id', name.charAt(0).toLowerCase() + name.slice(1));

  const shipName = document.createElement('p');
  shipName.textContent = name;
  shipNode.appendChild(shipName);

  const icons = document.createElement('div');
  icons.classList.add('icons');

  // Check mark
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fa-solid', 'fa-circle-check');
  icons.appendChild(checkIcon);

  // X mark
  const xIcon = document.createElement('i');
  xIcon.classList.add('fa-solid', 'fa-circle-xmark', 'active');
  icons.appendChild(xIcon);

  shipNode.appendChild(icons);

  return shipNode;
}

// Ship list
function loadShipList() {
  const shipList = document.createElement('div');
  const hr1 = document.createElement('hr');
  shipList.appendChild(hr1);
  shipList.setAttribute('id', 'ship-list');
  shipList.appendChild(generateShipNode('Carrier'));
  shipList.appendChild(generateShipNode('Battleship'));
  shipList.appendChild(generateShipNode('Cruiser'));
  shipList.appendChild(generateShipNode('Submarine'));
  shipList.appendChild(generateShipNode('Destroyer'));
  const hr2 = document.createElement('hr');
  shipList.appendChild(hr2);
  return shipList;
}

function generateGrid(title, id) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  gridContainer.setAttribute('id', title);

  const gridTitle = document.createElement('div');
  gridTitle.classList.add('grid-container-title');
  gridTitle.textContent = title;
  gridContainer.appendChild(gridTitle);

  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.setAttribute('id', id);

  for (let y = -1; y < boardSize; y += 1) {
    for (let x = -1; x < boardSize; x += 1) {
      if (x === -1 && y === -1) {
        const label = document.createElement('div');
        label.classList.add('label');
        grid.appendChild(label);
      } else if (x !== -1 && y === -1) {
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = x;
        grid.appendChild(label);
      } else if (x === -1 && y !== -1) {
        const label = document.createElement('div');
        label.classList.add('label');
        label.textContent = y;
        grid.appendChild(label);
      } else {
        const cube = document.createElement('div');
        cube.setAttribute('data-key', `x${x}-y${y}`);
        cube.classList.add('cube');
        grid.appendChild(cube);
      }
    }
  }
  gridContainer.appendChild(grid);

  gridContainer.appendChild(loadShipList());

  return gridContainer;
}

// Header
function loadHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const headerTitle = document.createElement('div');
  headerTitle.textContent = 'BATTLESHIP';
  headerTitle.setAttribute('id', 'title');
  header.appendChild(headerTitle);

  content.appendChild(header);
}

// Main
function addGridPage() {
  const gridPage = document.createElement('div');
  gridPage.setAttribute('id', 'grid-page');

  gridPage.appendChild(generateGrid('Player', 'player-grid'));
  gridPage.appendChild(generateGrid('Computer', 'computer-grid'));
  return gridPage;
}

function loadMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');

  main.appendChild(addGridPage());
  content.appendChild(main);
}

function addRotateButton() {
  const parent = document.querySelector('#setup-grid').parentNode;
  const shipList = parent.querySelector('#ship-list');

  const rotateInstruct = document.createElement('p');
  rotateInstruct.textContent = 'To rotate, press \'R\' or the Rotate button below';
  parent.insertBefore(rotateInstruct, shipList);

  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', 'rotate-btn');
  button.textContent = 'Rotate';

  parent.insertBefore(button, shipList);
}

// Starting overlay for ship placement
function loadStartPage() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'setup-overlay');
  overlay.classList.add('active');
  content.appendChild(overlay);

  // Create start page to place ships
  const setup = document.createElement('div');
  setup.setAttribute('id', 'setup');
  setup.classList.add('active');

  // Create grid
  setup.appendChild(generateGrid('Setup', 'setup-grid'));

  content.appendChild(setup);
  addRotateButton();
}

// Result overlay for announcing winner
function loadEndPage() {
  // Overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'end-overlay');
  content.appendChild(overlay);

  // Result element
  const end = document.createElement('div');
  end.setAttribute('id', 'end');

  // Ending message in result element
  const message = document.createElement('div');
  message.setAttribute('id', 'message');
  end.appendChild(message);

  // Reset button
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', 'reset-btn');
  button.textContent = 'Reset';
  end.appendChild(button);

  content.appendChild(end);
}

function loadPage() {
  loadHeader();
  loadMain();
  loadStartPage();
  loadEndPage();
  loadFeatures();
}

export default loadPage;
