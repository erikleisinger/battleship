


const opponentTiles = {

};
const userCharacters = {
  player: 'grawl',
};

const playGameInfo = {
  player: {},
  opponent: {
    110: { asset: "red", role: "void", ship: "carrier" },
120: { asset: "red", role: "void", ship: "carrier" },
130: { asset: "red", role: "void", ship: "carrier" },
136: { asset: "red", role: "void", ship: "battleship" },
137: { asset: "red", role: "void", ship: "battleship" },
138: { asset: "red", role: "void", ship: "battleship" },
139: { asset: "red", role: "void", ship: "battleship" },
140: { asset: "red", role: "void", ship: "carrier" },
150: { asset: "red", role: "void", ship: "carrier" },
157: { asset: "red", role: "void", ship: "cruiser" },
167: { asset: "red", role: "void", ship: "cruiser" },
170: { asset: "red", role: "void", ship: "destroyer" },
177: { asset: "red", role: "void", ship: "cruiser" },
180: { asset: "red", role: "void", ship: "destroyer" },
197: { asset: "red", role: "void", ship: "submarine" },
198: { asset: "red", role: "void", ship: "submarine" },
199: { asset: "red", role: "void", ship: "submarine" }
  }
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



const gameTiles = {

};

class Character {

  constructor() {
    this.phrases = {
      hit: [`wow`]
    };
    this.attribute = 'holy';
  }
  getPhrase(event) {
    let library = this.phrases[event];
    let length = library.length;
    let randomNumber = Math.floor(Math.random() * length);
    return this.phrases[event][randomNumber];
  }
};




class Grawl extends Character {

  constructor() { 
    super()
    this.phrases = {
      hit: [
        `Fantastic. There is nothing better than a cabbage soup`,
        `You hit their ${gameData.checkFor}. Why? Is the rustling of the fields and birdsong not enough for you? Will you ever find rest?`
      ]
    }
  }
};

const char = new Character();

const grawl = new Grawl();
console.log(grawl.getPhrase('hit'));

// module.exports = {
//   gameAssets,
//   gameData,
//   gameTiles
// };