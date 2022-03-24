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

  // let current;
  // let next;
  // const state = () => {
  //   if (current === 'Attack left') {
  //     next = 'S2';
  //   } else if (current === 'S2') {
  //     next = 'S3';
  //   } else if (current === 'S3') {
  //     next = 'S4';
  //   }

  //   current = next;
  // };

  let horizontal = true;
  let state = 'left';

  const smartAttack = (opponentBoard) => {
    let posX;
    let posY;

    // Grab last two hit position
    const hitList = opponentBoard.getHitList();
    const missedList = opponentBoard.getMissedList();
    let secLastHit = null;
    const secLastMiss = null;

    const lastHit = hitList[hitList.length - 1];
    const lastMiss = missedList[missedList.length - 1];
    posX = lastHit.x;
    posY = lastHit.y;

    if (hitList.length > 1) {
      // Check if last hit is directional
      secLastHit = hitList[hitList.length - 2];
      if (Math.abs(lastHit.x - secLastHit.x) === 1 && state === 'left') {
        console.log('Horizontal placement!');
        horizontal = true;
      } else if (Math.abs(lastHit.y - secLastHit.y) === 1) {
        console.log('Vertical placement!');
        horizontal = false;
      }
    }

    // Attack right of last hit position
    if (state === 'left' && horizontal === true) {
      while (opponentBoard.alreadyHit(posX, posY)) {
        posX += 1;
      }
    } else if (state === 'right' && horizontal === true) {
      while (opponentBoard.alreadyHit(posX, posY)) {
        posX -= 1;
      }
    } else if (state === 'top' && horizontal === false) {
      while (opponentBoard.alreadyHit(posX, posY)) {
        posY += 1;
      }
    } else if (state === 'bottom' && horizontal === false) {
      while (opponentBoard.alreadyHit(posX, posY)) {
        posY -= 1;
      }
    }

    // // Get last missed attack
    // if (missedList.length >= 1) {
    //   missedHit = missedList[missedList.length - 1];
    //   if ((missedList.length > 1)) {
    //     secLastMiss = missedList[missedList.length - 2];
    //   }
    // }
    // if (hitList.length > 1) {
    //   secLastHit = hitList[hitList.length - 2];
    // }

    // if (hitList.length > 1) {

    //   // Check if last hit is directional
    //   const secLastHit = hitList[hitList.length - 2];
    //   if (Math.abs(lastHit.x - secLastHit.x) === 1) {
    //     posX = lastHit.x + 1;
    //     while (opponentBoard.alreadyHit(posX, posY)) {
    //       posX += 1;
    //     }
    //     console.log('Attacking right direction');
    //   } else if (Math.abs(lastHit.y - secLastHit.y) === 1) {
    //     posY = lastHit.y + 1;
    //     while (opponentBoard.alreadyHit(posX, posY)) {
    //       posY += 1;
    //     }
    //     console.log('Attacking top direction');
    //   }

    // // Attack right of last hit position
    // } else if (!opponentBoard.alreadyHit(lastHit.x + 1, lastHit.y)) {
    //   posX = lastHit.x + 1;
    //   posY = lastHit.y;

    // // Attack left of last hit position
    // } else if (!opponentBoard.alreadyHit(lastHit.x - 1, lastHit.y)) {
    //   posX = lastHit.x - 1;
    //   posY = lastHit.y;

    // // Attack top of last hit position
    // } else if (!opponentBoard.alreadyHit(lastHit.x, lastHit.y + 1)) {
    //   posX = lastHit.x;
    //   posY = lastHit.y + 1;

    // // Attack bottom of last hit position
    // } else if (!opponentBoard.alreadyHit(lastHit.x, lastHit.y - 1)) {
    //   posX = lastHit.x;
    //   posY = lastHit.y - 1;
    // }

    // Attack one of the surrounding cubes until the next hit
    // do {
    //   posX = lastHit.x + 1;
    //   posY = lastHit.y;
    //   console.log(posX, posY);
    // } while (opponentBoard.alreadyHit(posX, posY));

    // Attack next cube based on direction of last two hits

    // Keep hitting until attack misses

    // Attack opposite direction
    console.log(`Hit: ${posX}, ${posY}`);

    const hit = opponentBoard.receiveAttack(posX, posY);

    // Transition to right
    if (state === 'left' && !hit) {
      console.log('Go right!');
      state = 'right';
      return true;
    }

    // Transition to top or reset
    if (state === 'right' && !hit) {
      if (horizontal === true) {
        console.log('Go top!');
        horizontal = false;
        state = 'top';
        return true;
      }

      // Reset
      console.log('reset');
      state = 'left';
      horizontal = true;
      return false;
    }

    // Transition to bottom
    if (state === 'top' && !hit) {
      if (horizontal === true) {
        // Reset
        console.log('reset');
        state = 'left';
        horizontal = true;
        return false;
      }
      console.log('Go down');
      state = 'bottom';
      return true;
    }

    if (state === 'bottom' && !hit) {
      // Reset
      console.log('reset');
      state = 'left';
      horizontal = true;
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
