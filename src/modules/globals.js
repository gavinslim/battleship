const Global = () => {
  const ship = {
    destroyer: 2,
    submarine: 3,
    cruiser: 3,
    battleship: 4,
    carrier: 5,
  };

  // Ships to be placed on Player's board
  const shipyard = [
    { length: ship.destroyer, horizontal: true },
    { length: ship.submarine, horizontal: true },
    { length: ship.cruiser, horizontal: true },
    { length: ship.battleship, horizontal: true },
    { length: ship.carrier, horizontal: true },
  ];

  const boardSize = 15;

  return {
    ship,
    shipyard,
    boardSize,
  };
};

module.exports = {
  Global,
};
