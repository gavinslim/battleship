const myFunctions = require('./ship');

const { Ship } = myFunctions;

const Gameboard = () => {
  const size = 20;
  const shipList = [];
  const missedList = [];
  const hitList = [];

  const getBoardSize = () => size;

  const isBoardFull = () => {
    const totalHits = missedList.length + hitList.length;
    if (totalHits === size * size) return true;
    return false;
  };

  const placeShip = (input, length) => {
    if (shipList.length !== 0) {
      const repeat = shipList.some((ship) => ship.getLength() === length);
      if (repeat === true) throw new Error('Ship with same length already exists');
    }

    const ship = Ship(length);
    ship.setCoordinate(input);
    shipList.push(ship);
    return true;
  };

  const alreadyHit = (input) => {
    const missedFound = missedList.some((miss) => (miss.x === input.x) && (miss.y === input.y));
    const hitFound = hitList.some((hits) => (hits.x === input.x) && (hits.y === input.y));

    if (missedFound || hitFound) {
      return true;
    }
    return false;
  };

  const receiveAttack = (input) => {
    let isValid = false;
    const between = (x, min, max) => (x >= min && x <= max);

    if (shipList.length === 0) throw new Error('Empty ship list');

    // Iterate ship
    shipList.forEach((ship) => {
      const length = ship.getLength();
      const min = ship.getCoordinate();
      const max = ship.isHorizontal()
        ? { x: min.x + length - 1, y: min.y } : { x: min.x, y: min.y + length - 1 };

      if (between(input.x, min.x, max.x) && between(input.y, min.y, max.y)) {
        hitList.push(input);
        if (ship.isHorizontal() === true) {
          ship.hit(input.x - min.x);
        } else {
          ship.hit(input.y - min.y);
        }
        isValid = true;
      }
    });

    if (!isValid) { missedList.push(input); }
    return isValid;
  };

  const emptyShipList = () => {
    shipList.length = 0;
  };

  const isShipListEmpty = () => {
    if (shipList.length !== 0) return false;
    return true;
  };

  const checkAllShipsSunk = () => !(shipList.find((ship) => ship.isSunk() === false));

  return {
    getBoardSize,
    isBoardFull,
    placeShip,
    alreadyHit,
    receiveAttack,
    emptyShipList,
    isShipListEmpty,
    checkAllShipsSunk,
  };
};

module.exports = {
  Gameboard,
};
