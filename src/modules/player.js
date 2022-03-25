const { Global } = require('./globals');

const { boardSize } = Global();

const Player = () => {
  const attack = (opponentBoard, posX, posY) => {
    if (!opponentBoard.alreadyHit(posX, posY)) {
      if (opponentBoard.receiveAttack(posX, posY)) {
        return true;
      }
    }
    return false;
  };

  // Randomly target a spot
  const randomAttack = (opponentBoard) => {
    let posX;
    let posY;

    // Check there are still spots to hit
    do {
      if (opponentBoard.isBoardFull()) return false;
      posX = Math.floor(Math.random() * boardSize);
      posY = Math.floor(Math.random() * boardSize);
    } while (opponentBoard.alreadyHit(posX, posY));

    return opponentBoard.receiveAttack(posX, posY);
  };

  let horizontal = null;
  let state = 'left';

  const smartAttack = (opponentBoard) => {
    let posX;
    let posY;
    let hit;

    // Grab last two hit position
    const hitList = opponentBoard.getHitList();
    const missedList = opponentBoard.getMissedList();
    let secLastHit = null;
    // const secLastMiss = null;

    const lastHit = hitList[hitList.length - 1];
    // const lastMiss = missedList[missedList.length - 1];
    // console.log(lastHit);
    posX = lastHit.x;
    posY = lastHit.y;

    if (hitList.length > 1) {
      // Check if last hit is directional
      secLastHit = hitList[hitList.length - 2];

      const xDelta = Math.abs(lastHit.x - secLastHit.x);
      const yDelta = Math.abs(lastHit.y - secLastHit.y);

      if (xDelta === 1 && yDelta === 0 && (state === 'left' || state === 'right')) {
        console.log('Horizontal placement!');
        horizontal = true;
      } else if (xDelta === 0 && yDelta === 1) {
        console.log('Vertical placement!');
        horizontal = false;
      }
    }

    // Avoid exceeding grid border
    // if (posX === 0 && state === 'left') state = 'right';
    // else if ((posX === boardSize - 1) && (state === 'right')) state = 'top';
    // else if ((posY === 0) && (state === 'top')) state = 'bottom';
    // else if ((posY === boardSize - 1) && (state === 'bottom')) state = 'left';

    // Attack right of last hit position
    if (state === 'left') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posX === 0) {
          state = 'right';
          console.log('Exceed: Transition to Right state');
          break;
        }
        posX -= 1;
      }
      // console.log('skip bottom');
    }

    if (state === 'right') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posX === boardSize - 1) {
          state = 'top';
          console.log('Exceed: Transition to Top state');
          break;
        }
        posX += 1;
      }
      // state = 'top';
      // console.log('1 Exceed: Transition to Top state');
    }

    if (state === 'top') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posY === 0) {
          state = 'bottom';
          console.log('Exceed: Transition to Bottom state');
          break;
        }
        posY -= 1;
      }
      // state = 'bottom';
      // console.log('1 Exceed: Transition to Bottom state');
    }

    if (state === 'bottom') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posY === boardSize - 1) {
          state = 'reset';
          console.log('Exceed: Transition to Reset state');
          break;
        }
        posY += 1;
      }
      // state = 'reset';
      // console.log('1 Exceed: Transition to Reset state');
    }

    if (state === 'reset') {
      hit = randomAttack(opponentBoard);
    } else {
      hit = opponentBoard.receiveAttack(posX, posY);
    }

    // Attack opposite direction
    if (hit) {
      console.log(`Hit: ${posX}, ${posY} | State: ${state} | Hit? ${hit} | Hori? ${horizontal}`);
    } else {
      console.log(`Miss: ${posX}, ${posY} | State: ${state} | Hit? ${hit} | Hori? ${horizontal}`);
    }

    // Transition to right state
    if (state === 'left' && !hit) {
      console.log('Transition to Right state');
      state = 'right';
      return true;
    }

    // Transition to top or reset state
    if ((state === 'right' && !hit)) {
      if (horizontal === true) {
        // Reset
        console.log('Transition to Reset state');
        state = 'left';
        horizontal = null;
        return false;
      }

      console.log('Transition to Top state!');
      horizontal = false;
      state = 'top';
      return true;
    }

    // Transition to bottom
    if (state === 'top' && !hit) {
      if (horizontal === false) {
        console.log('Transition to Bottom state');
        state = 'bottom';
        return true;
      }

      // Reset
      console.log('Transition to Reset state');
      state = 'left';
      horizontal = null;
      return false;
    }

    if (state === 'bottom' && !hit) {
      // Reset
      console.log('Transition to Reset state');
      state = 'left';
      horizontal = null;
      return false;
    }

    return hit;
  };

  return {
    attack,
    randomAttack,
    smartAttack,
  };
};

module.exports = {
  Player,
};
