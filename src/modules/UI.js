import loadFeatures from './features';

const content = document.querySelector('.content');
const gridSize = 16;

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

  // for (let i = 0; i < gridSize; i += 1) {
  //   const row = document.createElement('div');
  //   row.textContent = i;
  //   grid.appendChild(row);
  // }

  for (let y = -1; y < gridSize; y += 1) {
    for (let x = -1; x < gridSize; x += 1) {
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

  gridPage.appendChild(generateGrid('Player', 'player1-grid'));
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

  // Add rotate button
  const button = document.createElement('button');
  button.setAttribute('id', 'rotate-button');
  button.textContent = 'Rotate';
  start.appendChild(button);

  content.appendChild(start);
}

function loadPage() {
  loadHeader();
  loadMain();
  loadStartPage();
  loadFeatures();
}

export default loadPage;
