/* eslint-disable no-undef */
const myFunctions = require('../ship');

const { Ship } = myFunctions;

describe('Sunk', () => {
  test('Hit everywhere except for 1 block', () => {
    const ship = Ship(3);
    ship.hit(0);
    ship.hit(1);

    expect(ship.isSunk()).toBe(false);
  });

  test('Sunk', () => {
    const ship = Ship(4);
    for (let i = 0; i < 4; i += 1) {
      ship.hit(i);
    }

    expect(ship.isSunk()).toBe(true);
  });

  test('Not sunk', () => {
    const ship = Ship(3);
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
  });
});

describe('Hit and Display', () => {
  test('Hit no part of ship overextend', () => {
    const ship = Ship(3);
    expect(() => { ship.hit(4); }).toThrow(Error('Invalid location'));
  });

  test('Hit no part of ship underextend', () => {
    const ship = Ship(3);
    expect(() => { ship.hit(-1); }).toThrow(Error('Invalid location'));
  });

  test('No holes', () => {
    const ship = Ship(3);
    expect(ship.display()).toStrictEqual({
      horizontal: false,
      body: [0, 0, 0],
    });
  });

  test('Hole at front of ship', () => {
    const ship = Ship(3);
    ship.hit(0);
    expect(ship.display()).toStrictEqual({
      horizontal: false,
      body: [1, 0, 0],
    });
  });

  test('Hole in middle of ship', () => {
    const ship = Ship(3);
    ship.hit(1);
    expect(ship.display()).toStrictEqual({
      horizontal: false,
      body: [0, 1, 0],
    });
  });

  test('Hole at back of ship', () => {
    const ship = Ship(3);
    ship.hit(2);
    expect(ship.display()).toStrictEqual({
      horizontal: false,
      body: [0, 0, 1],
    });
  });
});

describe('Rotate', () => {
  test('Rotate once', () => {
    const ship = Ship(3);
    ship.setHorizontal(true);
    expect(ship.display()).toStrictEqual({
      horizontal: true,
      body: [0, 0, 0],
    });
  });

  test('Rotate twice', () => {
    const ship = Ship(3);
    ship.setHorizontal(true);
    ship.setHorizontal(false);
    expect(ship.display()).toStrictEqual({
      horizontal: false,
      body: [0, 0, 0],
    });
  });
});

describe('Coordinate', () => {
  test('Set coordinate (0,0)', () => {
    const ship = Ship(3);
    ship.setCoordinate(0, 0);
    expect(ship.getCoordinate()).toStrictEqual({ x: 0, y: 0 });
  });

  test('Set coordinate (300,300)', () => {
    const ship = Ship(3);
    ship.setCoordinate(300, 300);
    expect(ship.getCoordinate()).toStrictEqual({ x: 300, y: 300 });
  });

  test('Set coordinate (-1, 1)', () => {
    const ship = Ship(3);
    expect(() => { ship.setCoordinate(-1, 1); }).toThrow(Error('Invalid coordinates - no negative values'));
  });

  test('Set non-num cordinates', () => {
    const ship = Ship(3);
    expect(() => { ship.setCoordinate(['1', '1']); }).toThrow(Error('Invalid coordinates - not a number'));
  });
});
