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

  // Smart attack (basic Finite State Machine)
  let isHorizontal = null;
  let state = 'left';
  const smartAttack = (opponentBoard) => {
    let posX;
    let posY;
    let hit;

    // Determine target position based on last successfull hit
    const hitList = opponentBoard.getHitList();
    const lastHit = hitList[hitList.length - 1];
    posX = lastHit.x;
    posY = lastHit.y;

    // Determine if target ship is positioned horizontally or vertically
    let secLastHit = null;
    if (hitList.length > 1) {
      secLastHit = hitList[hitList.length - 2];

      const xDelta = Math.abs(lastHit.x - secLastHit.x);
      const yDelta = Math.abs(lastHit.y - secLastHit.y);

      if (xDelta === 1 && yDelta === 0 && (state === 'left' || state === 'right')) {
        isHorizontal = true;
      } else if (xDelta === 0 && yDelta === 1) {
        isHorizontal = false;
      }
    }

    // Attack most left position. If not possible, transition to Right state
    if (state === 'left') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posX === 0) {
          state = 'right';
          break;
        }
        posX -= 1;
      }
    }

    // Attack most right position. If not possible, transition to Top state
    if (state === 'right') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posX === boardSize - 1) {
          state = 'top';
          break;
        }
        posX += 1;
      }
    }

    // Attack most top position. If not possible, transition to Bottom state
    if (state === 'top') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posY === 0) {
          state = 'bottom';
          break;
        }
        posY -= 1;
      }
    }

    // Attack most bottom position. If not possible, attack randomly
    if (state === 'bottom') {
      while (opponentBoard.alreadyHit(posX, posY)) {
        if (posY === boardSize - 1) {
          state = 'reset';
          break;
        }
        posY += 1;
      }
    }

    // Random attack if in reset state, else attack player based on posX and posY
    if (state === 'reset') {
      hit = randomAttack(opponentBoard);
    } else {
      hit = opponentBoard.receiveAttack(posX, posY);
    }

    // Transition to right state
    if (state === 'left' && !hit) {
      state = 'right';
      return true;
    }

    // Transition to top or reset state
    if ((state === 'right' && !hit)) {
      // Reset
      if (isHorizontal) {
        state = 'left';
        isHorizontal = null;
        return false;
      }

      isHorizontal = false;
      state = 'top';
      return true;
    }

    // Transition to bottom
    if (state === 'top' && !hit) {
      // Reset
      if (isHorizontal) {
        state = 'left';
        isHorizontal = null;
        return false;
      }

      state = 'bottom';
      return true;
    }

    if (state === 'bottom' && !hit) {
      // Reset
      state = 'left';
      isHorizontal = null;
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
