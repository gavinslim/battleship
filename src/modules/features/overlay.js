function displaySetupOverlay() {
  const overlay = document.querySelector('#setup-overlay');
  const setup = document.querySelector('#setup');
  overlay.classList.add('active');
  setup.classList.add('active');
}

function removeSetupOverlay() {
  const overlay = document.querySelector('#setup-overlay');
  const setup = document.querySelector('#setup');
  overlay.classList.remove('active');
  setup.classList.remove('active');
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
  displaySetupOverlay,
  removeSetupOverlay,
  displayEndOverlay,
  removeEndOverlay,
};
