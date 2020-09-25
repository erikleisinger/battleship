const gameTiles = {

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


const createGrid = function () {
  {
    let board = document.getElementsByClassName("board")[0];
    console.log('a');
    for (var j = 0; j < 100; j++) {
      let blockToInsert = document.createElement('div');
      let containerBlock = board
      containerBlock.appendChild(blockToInsert);
      blockToInsert.id = j;
    }

  }
  {
    let board = document.getElementsByClassName("board")[1];
    console.log('a');
    for (var j = 100; j < 200; j++) {
      let blockToInsert = document.createElement('div');
      let containerBlock = board
      containerBlock.appendChild(blockToInsert);
      blockToInsert.id = j;
    }

  }
}
createGrid();

const generateGameTiles = function () {
  for (let x = 0; x < 200; x++) {
    gameTiles[x] = { asset: 'red', role: 'void', };
  }
  console.log(gameTiles);
};
generateGameTiles();

const shipPlacementButton = function (cla) {
  console.log('hi there');
  console.log(gameData.placement[cla]);
  if (gameData.placement[cla] !== 'n') {
    
    let tileArray = gameData.placement[cla];
    for (let item of tileArray) {
      let tile = document.getElementById(item);
      tile.style.backgroundColor = 'white';
    }
    gameData.checkFor = cla;
  } else {
    gameData.checkFor = cla;
  }
};


const setButtons = function () {
  let targButton = document.getElementsByClassName('target')[0];
  targButton.addEventListener('click', function () {
    gameData.state = 'target';
    console.log(gameData);
  });
  let voidButton = document.getElementsByClassName('void')[0];
  voidButton.addEventListener('click', function () {
    gameData.state = 'void';
    console.log(gameData);
  });
  let triedButton = document.getElementsByClassName('tried')[0];
  triedButton.addEventListener('click', function () {
    gameData.state = 'tried';
    console.log(gameData);
  });
  let carrierButton = document.getElementsByClassName('carrier')[0];
  carrierButton.addEventListener('click', function () {
    gameData.checkFor = 'carrier';
    shipPlacementButton('carrier');
  });
  let battleshipButton = document.getElementsByClassName('battleship')[0];
  battleshipButton.addEventListener('click', function () {
    gameData.checkFor = 'battleship';
    shipPlacementButton('battleship');
  });
  let cruiserButton = document.getElementsByClassName('cruiser')[0];
  cruiserButton.addEventListener('click', function () {
    gameData.checkFor = 'cruiser';
    shipPlacementButton('cruiser');
  });
  let submarineButton = document.getElementsByClassName('submarine')[0];
  submarineButton.addEventListener('click', function () {
    gameData.checkFor = 'submarine';
    shipPlacementButton('submarine');
  });
  let destroyerButton = document.getElementsByClassName('destroyer')[0];
  destroyerButton.addEventListener('click', function () {
    shipPlacementButton('destroyer');
    console.log(gameData);
  });
  let horzButton = document.getElementsByClassName('horz')[0];
  horzButton.addEventListener('click', function () {
    gameData.placement.axis = 'horz';
    console.log(gameData);
  });
  let vertButton = document.getElementsByClassName('vert')[0];
  vertButton.addEventListener('click', function () {
    gameData.placement.axis = 'vert';
    console.log(gameData);
  });
  let playButton = document.getElementsByClassName('play')[0];
  playButton.addEventListener('click', function () {
    gameData.gameMode = 'play';
    console.log(gameData);
  });
  let placeButton = document.getElementsByClassName('place')[0];
  placeButton.addEventListener('click', function () {
    gameData.gameMode = 'place';
    console.log(gameData);
  });

};
setButtons();

const checkBounds = function (idee) {
  return new Promise((resolve, reject) => {
    let id = Number(idee);
    let axis = gameData.placement.axis;
    let length = gameAssets.shipData[gameData.checkFor];
    let newArray = [];
    

    if (axis === 'horz') {
      for (let x = id; x < id + length; x++) {
        
        if ((x - 9) % 10 === 0 && x !== id + (length - 1)) {
          console.log('array is out of bounds')
        resolve(false);
      }
    }
    
    for (let x = id; x < id + length; x++) {
    newArray.push(x);
    }
    } else if (axis === 'vert') {
      for (let x = id; x < id + (length * 10); x += 10) {
        console.log(x);
        if (x - 90 > 0 && x !== (id + length * 10) - 1) {
          console.log('array is out of bounds')
        resolve(false);
      }
    }
   
    for (let x = id; x < id + (length * 10); x += 10) {
      newArray.push(x);
    }
  }
  resolve(newArray);
  });
};

const checkArray = function (array) {
  return new Promise((resolve, reject) => {
    for (let item of array) {
      console.log(gameTiles[item].role);
      if (gameTiles[item].role === 'target') {
        resolve(false);
      }
    }
    gameData.placement.currentSpot = array;
    resolve(array);
  })
  
};

let currentArray = '';

const highlightTiles = function(array) {
  currentArray = array;
  let color = gameAssets.colors[gameData.checkFor];
  for (let item of array) {
    let tileToHighlight = document.getElementById(item);
    tileToHighlight.style.backgroundColor = color;
  }
};

const hover = function (id) {
  if (gameData.gameMode === 'place') {
    checkBounds(id).then((arrayOfTiles) => {
      console.log(arrayOfTiles)
      return checkArray(arrayOfTiles);
    }).then((array) => {
        highlightTiles(array);
    }).catch((error) => {
      console.log(error);
    });
  } else if (gameData.gameMode === 'play') {
  }
};

