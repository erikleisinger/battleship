const classes = {
};


const opponentTiles = {

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
    carrier: {
      horz: {
        fore: `url('js/lib/images/game_assets/carrier_fore_horz.png')`,
        mid: `url('js/lib/images/game_assets/carrier_horz.png')`,
        rear: `url('js/lib/images/game_assets/carrier_rear_horz.png')`,
      },
      vert: {
        fore: `url('js/lib/images/game_assets/carrier_fore_vert.png')`,
        mid:`url('js/lib/images/game_assets/carrier_vert.png')`,
        rear: `url('js/lib/images/game_assets/carrier_rear_vert.png')`,
      },
    },
    battleship: {
      horz: {
        fore: `url('js/lib/images/game_assets/battleship_fore_horz.png')`,
        mid: `url('js/lib/images/game_assets/battleship_horz.png')`,
        rear: `url('js/lib/images/game_assets/battleship_rear_horz.png')`,
      },
      vert: {
        fore: `url('js/lib/images/game_assets/battleship_fore_vert.png')`,
        mid:`url('js/lib/images/game_assets/battleship_vert.png')`,
        rear: `url('js/lib/images/game_assets/battleship_rear_vert.png')`,
      },
    },
    cruiser: {
      horz: {
        fore: `url('js/lib/images/game_assets/cruiser_fore_horz.png')`,
        mid: `url('js/lib/images/game_assets/cruiser_horz.png')`,
        rear: `url('js/lib/images/game_assets/cruiser_rear_horz.png')`,
      },
      vert: {
        fore: `url('js/lib/images/game_assets/cruiser_fore_vert.png')`,
        mid:`url('js/lib/images/game_assets/cruiser_vert.png')`,
        rear: `url('js/lib/images/game_assets/cruiser_rear_vert.png')`,
      },
    },
    submarine: {
      horz: {
        fore: `url('js/lib/images/game_assets/submarine_fore_horz.png')`,
        mid: `url('js/lib/images/game_assets/submarine_horz.png')`,
        rear: `url('js/lib/images/game_assets/submarine_rear_horz.png')`,
      },
      vert: {
        fore: `url('js/lib/images/game_assets/submarine_fore_vert.png')`,
        mid:`url('js/lib/images/game_assets/submarine_vert.png')`,
        rear: `url('js/lib/images/game_assets/submarine_rear_vert.png')`,
      },
    },
    destroyer: {
      horz: {
        fore: `url('js/lib/images/game_assets/destroyer_fore_horz.png')`,
        mid: `url('js/lib/images/game_assets/destroyer_horz.png')`,
        rear: `url('js/lib/images/game_assets/destroyer_rear_horz.png')`,
      },
      vert: {
        fore: `url('js/lib/images/game_assets/destroyer_fore_vert.png')`,
        mid:`url('js/lib/images/game_assets/destroyer_vert.png')`,
        rear: `url('js/lib/images/game_assets/destroyer_rear_vert.png')`,
      },
    },
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
  },
  playerName: '',
  playerCharacter: 'virginia',
  opponentCharacter: 'andrea',
};



const gameTiles = {

};