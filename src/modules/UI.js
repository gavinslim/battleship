import loadFeatures from './features';

const { Global } = require('./globals');

const { boardSize } = Global();

const content = document.querySelector('.content');

document.documentElement.style.setProperty('--grid-size', boardSize);

function generateGrid(title, id) {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

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

  return gridContainer;
}

function addGridPage() {
  const gridPage = document.createElement('div');
  gridPage.setAttribute('id', 'grid-page');

  gridPage.appendChild(generateGrid('Player', 'player-grid'));
  gridPage.appendChild(generateGrid('Computer', 'computer-grid'));

  return gridPage;
}

function loadHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  header.textContent = 'BATTLESHIP';

  content.appendChild(header);
}

function loadMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');

  main.appendChild(addGridPage());
  content.appendChild(main);
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

  // Add grid
  setup.appendChild(generateGrid('Setup', 'setup-grid'));

  // Add rotate button
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('id', 'rotate-btn');
  button.textContent = 'Rotate';
  setup.appendChild(button);

  content.appendChild(setup);
}
// Ending overlay for announcing winner
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
  message.textContent = 'YOU WIN!';
  end.appendChild(message);

  // Rotating button
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
