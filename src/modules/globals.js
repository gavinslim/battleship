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

  const boardSize = 14;

  const resetShipYard = () => {
    shipyard.push(
      { length: ship.destroyer, horizontal: true },
      { length: ship.submarine, horizontal: true },
      { length: ship.cruiser, horizontal: true },
      { length: ship.battleship, horizontal: true },
      { length: ship.carrier, horizontal: true },
    );
  };

  const delay = 300;

  return {
    ship,
    shipyard,
    boardSize,
    resetShipYard,
    delay,
  };
};

module.exports = {
  Global,
};
