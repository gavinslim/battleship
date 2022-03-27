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
    { name: 'destroyer', length: ship.destroyer, horizontal: true },
    { name: 'submarine', length: ship.submarine, horizontal: true },
    { name: 'cruiser', length: ship.cruiser, horizontal: true },
    { name: 'battleship', length: ship.battleship, horizontal: true },
    { name: 'carrier', length: ship.carrier, horizontal: true },
  ];

  const boardSize = 14;

  const resetShipYard = () => {
    shipyard.push(
      { name: 'destroyer', length: ship.destroyer, horizontal: true },
      { name: 'submarine', length: ship.submarine, horizontal: true },
      { name: 'cruiser', length: ship.cruiser, horizontal: true },
      { name: 'battleship', length: ship.battleship, horizontal: true },
      { name: 'carrier', length: ship.carrier, horizontal: true },
    );
  };

  // Computer delay in ms
  const delay = 0;

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
