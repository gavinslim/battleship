function displayStartOverlay() {
  const overlay = document.querySelector('#start-overlay');
  const start = document.querySelector('#start');
  overlay.classList.add('active');
  start.classList.add('active');
}

function removeStartOverlay() {
  const overlay = document.querySelector('#start-overlay');
  const start = document.querySelector('#start');
  overlay.classList.remove('active');
  start.classList.remove('active');
}

function displayEndOverlay() {
  const endOverlay = document.querySelector('#end-overlay');
  const end = document.querySelector('#end');
  endOverlay.classList.add('active');
  end.classList.add('active');
}

function removeEndOverlay() {
  const endOverlay = document.querySelector('#end-overlay');
  const end = document.querySelector('#end');
  endOverlay.classList.remove('active');
  end.classList.remove('active');
}

module.exports = {
  displayStartOverlay,
  removeStartOverlay,
  displayEndOverlay,
  removeEndOverlay,
};
