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

  const rotate = () => {
    horizontal = !horizontal;
  };

  const display = () => ({ horizontal, body });

  const setCoordinate = (input) => {
    if (typeof (input.x) !== 'number' || typeof (input.y) !== 'number') {
      throw new Error('Invalid coordinates - not a number');
    }

    if (input.x < 0 || input.y < 0) {
      throw new Error('Invalid coordinates - no negative values');
    }
    coordinate.x = input.x;
    coordinate.y = input.y;
  };

  const getCoordinate = () => coordinate;
  const getLength = () => body.length;
  const isHorizontal = () => horizontal;

  return {
    hit,
    isSunk,
    display,
    rotate,
    setCoordinate,
    getCoordinate,
    getLength,
    isHorizontal,
  };
};

module.exports = {
  Ship,
};
