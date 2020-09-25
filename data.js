const gameTiles = {

};

const gameAssets = {
  colors: {
    target: 'red',
    void: 'white',
    tried: 'black',
    carrier: 'red',
    battleship: 'orange',
    cruiser: 'yellow',
    submarine: 'green',
    destroyer: 'blue'
  },
    shipData: {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2
    }
};
const gameData = {
  state: 'void',
  gameMode: 'place',
  checkFor: 'battleship',
  placement: {
    axis: 'horz',
    currentSpot: [],
    carrier: 'n',
    battleship: 'n',
    cruiser: 'n',
    submarine: 'n',
    destroyer: 'n'
}
};