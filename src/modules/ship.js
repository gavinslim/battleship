const Ship = (length) => {
  const body = new Array(length).fill(0);
  let horizontal = false;
  const coordinate = {
    x: null,
    y: null,
  };

  const hit = (location) => {
    if (location >= body.length || location < 0) {
      throw new Error('Invalid location');
    }
    body[location] = 1;
  };

  const isSunk = () => !!(body.reduce(
    (prev, curr) => prev * curr,
  ));

  const setHorizontal = (rotate) => {
    if (rotate) horizontal = true;
    else horizontal = false;
  };

  const display = () => ({ horizontal, body });

  const setCoordinate = (xPos, yPos) => {
    if (typeof (xPos) !== 'number' || typeof (yPos) !== 'number') {
      throw new Error('Invalid coordinates - not a number');
    }

    if (xPos < 0 || yPos < 0) {
      throw new Error('Invalid coordinates - no negative values');
    }
    coordinate.x = xPos;
    coordinate.y = yPos;
  };

  const getCoordinate = () => coordinate;
  const getLength = () => body.length;
  const isHorizontal = () => horizontal;

  return {
    hit,
    isSunk,
    display,
    setHorizontal,
    setCoordinate,
    getCoordinate,
    getLength,
    isHorizontal,
  };
};

module.exports = {
  Ship,
};
