import loadFeatures from './features';

const content = document.querySelector('.content');
const gridSize = 20;

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

  for (let x = 0; x < gridSize; x += 1) {
    for (let y = 0; y < gridSize; y += 1) {
      const cube = document.createElement('div');
      cube.setAttribute('data-key', `x${x}-y${y}`);
      cube.classList.add('cube');
      grid.appendChild(cube);
    }
  }
  gridContainer.appendChild(grid);

  return gridContainer;
}

function addGridPage() {
  const gridPage = document.createElement('div');
  gridPage.setAttribute('id', 'grid-page');

  gridPage.appendChild(generateGrid('Player 1', 'player1-grid'));
  gridPage.appendChild(generateGrid('Player 2', 'player2-grid'));

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

function loadStartPage() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  overlay.classList.add('active');
  content.appendChild(overlay);

  // Create start page to place ships
  const start = document.createElement('div');
  start.setAttribute('id', 'start');
  start.classList.add('active');

  // Add grid
  start.appendChild(generateGrid('', 'start-grid'));
  content.appendChild(start);
}

function loadPage() {
  loadHeader();
  loadMain();
  loadStartPage();
  loadFeatures();
}

export default loadPage;
