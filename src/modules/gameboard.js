const { Ship } = require('./ship');
const { Global } = require('./globals');

const Gameboard = () => {
  const { boardSize } = Global();
  let shipList = [];
  let missedList = [];
  let hitList = [];

  // Initialize board as 2D array
  const board = [];
  for (let row = 0; row < boardSize; row += 1) {
    board[row] = new Array(boardSize).fill(0);
  }

  const getMissedList = () => missedList;
  const getHitList = () => hitList;
  const getBoardSize = () => boardSize;

  const isBoardFull = () => {
    const totalHits = missedList.length + hitList.length;
    if (totalHits === boardSize * boardSize) return true;
    return false;
  };

  const isConflict = (xPos, yPos, length, horizontal = false) => {
    if (horizontal && (xPos + length > boardSize)) { return true; }
    if (!horizontal && (yPos + length > boardSize)) { return true; }

    for (let i = 0; i < length; i += 1) {
      if (horizontal) {
        if (board[xPos + i][yPos] === 1) {
          return true;
        }
      } else if (board[xPos][yPos + i] === 1) {
        return true;
      }
    }
    return false;
  };

  const placeShip = (xPos, yPos, length, horizontal = false) => {
    // Check that input coordinates don't conflict with existing ship location
    if (typeof (xPos) !== 'number' || typeof (yPos) !== 'number') {
      throw new Error('Invalid coordinates - not a number');
    }

    if (xPos < 0 || yPos < 0) {
      throw new Error('Invalid coordinates - no negative values');
    }

    // Check if ship placement conflicts with existing ships
    if (isConflict(xPos, yPos, length, horizontal)) { return false; }

    // Initialize ship
    const ship = Ship(length);
    ship.setHorizontal(horizontal);
    ship.setCoordinate(xPos, yPos);

    // Place ship on board
    for (let i = 0; i < length; i += 1) {
      if (horizontal) {
        board[xPos + i][yPos] = 1;
      } else {
        board[xPos][yPos + i] = 1;
      }
    }

    shipList.push(ship);
    return true;
  };

  // Print out ships
  const displayShips = () => shipList.forEach((ship) => {
    console.log(ship.getCoordinate(), `Length: ${ship.getLength()}`);
  });

  // Check if position has already been hit
  const alreadyHit = (xPos, yPos) => {
    const missedFound = missedList.some((miss) => (miss.x === xPos) && (miss.y === yPos));
    const hitFound = hitList.some((hits) => (hits.x === xPos) && (hits.y === yPos));

    if (missedFound || hitFound) {
      return true;
    }
    return false;
  };

  // Receive attack at position
  const receiveAttack = (xPos, yPos) => {
    let isValid = false;
    const between = (x, min, max) => (x >= min && x <= max);

    if (shipList.length === 0) throw new Error('Empty ship list');

    // Iterate ship
    shipList.forEach((ship) => {
      const length = ship.getLength();
      const min = ship.getCoordinate();
      const max = ship.isHorizontal()
        ? { x: min.x + length - 1, y: min.y } : { x: min.x, y: min.y + length - 1 };

      if (between(xPos, min.x, max.x) && between(yPos, min.y, max.y)) {
        hitList.push({ x: xPos, y: yPos });
        if (ship.isHorizontal() === true) {
          ship.hit(xPos - min.x);
        } else {
          ship.hit(yPos - min.y);
        }
        isValid = true;
      }
    });

    if (!isValid) { missedList.push({ x: xPos, y: yPos }); }
    return isValid;
  };

  const emptyShipList = () => {
    shipList.length = 0;
  };

  const isShipListEmpty = () => {
    let isEmpty = true;
    if (shipList.length !== 0) isEmpty = false;
    return isEmpty;
  };

  const checkAllShipsSunk = () => !(shipList.find((ship) => ship.isSunk() === false));

  const reset = () => {
    shipList = [];
    missedList = [];
    hitList = [];
  };

  return {
    displayShips,
    getBoardSize,
    isBoardFull,
    isConflict,
    placeShip,
    alreadyHit,
    receiveAttack,
    emptyShipList,
    isShipListEmpty,
    checkAllShipsSunk,
    getMissedList,
    getHitList,
    reset,
  };
};

module.exports = {
  Gameboard,
};
