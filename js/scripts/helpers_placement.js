

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

const unHover = function (id) {
  if (gameData.gameMode === 'place') {
    highlightNoMore()
  };
};

const boatPlacement = function (id) {
  let currentArray = gameData.placement.currentSpot;
  for (let item of currentArray) {
    if (gameTiles[item].role === 'target') {
      console.log(`occupied`);
      return;
    }
  }
  for (let item of currentArray) {
    let tile = document.getElementById(item);
    tile.style.backgroundColor = gameAssets.colors[gameData.checkFor];
    gameTiles[item].role = 'target';
    let shipClass = gameData.checkFor;
    gameTiles.ship = shipClass;
    playGameInfo.player[item] = {asset: 'red', role: 'void'};
    playGameInfo.player[item].ship = shipClass;
    console.log(playGameInfo.player)
  }
  let shipClass = gameData.checkFor;
  gameData.checkFor = 'void';
  gameData.placement[shipClass] = currentArray;
};

const sendMessage = function(event) {
  
  
  
  let containerBlock = document.getElementById('dialogue');
  containerBlock.innerHTML = grawl.getPhrase(event);
}


const move = function (id) {
  
  if (gameData.gameMode === 'place') {
    boatPlacement(id);
  } else if (gameData.gameMode === 'play') {
    let data = gameTiles[id];
    let tile = document.getElementById(id);
    console.log(gameData.state);
    let e = 'hit'
    sendMessage(e);
    let newColor = gameAssets.colors[gameData.state];
    tile.style.backgroundColor = newColor;
  }
};

const shipPlacementButton = function (cla) {
  console.log('hi there');
  console.log(gameData.placement[cla]);
  if (gameData.placement[cla] !== 'n') {

    let tileArray = gameData.placement[cla];
    for (let item of tileArray) {
      let tile = document.getElementById(item);
      tile.style.backgroundColor = 'white';
      gameTiles[item].role = 'void';
      gameTiles.ship = 'void';
      playGameInfo.player[item].ship = '';
    }
    gameData.checkFor = cla;
  } else {
    gameData.checkFor = cla;
  }
};



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
  console.log(`checkArray: ${array}`)
  return new Promise((resolve, reject) => {
    for (let item of array) {
      console.log(gameTiles[item].role);
      if (gameTiles[item].role === 'target') {
        resolve(false);
      }
    }
    gameData.placement.currentSpot = array;
    resolve(array);
  });

};

let currentArray = '';

const highlightTiles = function (array) {
  currentArray = array;
  let color = gameAssets.colors[gameData.checkFor];
  for (let item of array) {
    let tileToHighlight = document.getElementById(item);
    tileToHighlight.style.backgroundColor = color;
  }
  return array;
};

const extractArray = function (array) {
  return array;
};

const highlightNoMore = function () {
  let array = currentArray;
  for (let item of array) {
    if (gameTiles[item].role === 'target') {
    } else {
      let tileToHighlight = document.getElementById(item);
      tileToHighlight.style.backgroundColor = 'white';
    }

  }
};

const getBounds = function (tile) {

};

const playGameBoard = function() {
  for (let item in gameTiles) {
    if (gameTiles[item].role === 'target') {
    };
  };
  for (let item in playGameInfo.opponent) {
    gameTiles[item].role = 'target';
    let ship = playGameInfo.opponent[item].ship;
    
    let color = gameAssets.colors[ship];
    console.log(color);
    let tile = document.getElementById(item);
    tile.style.backgroundColor = color;
  }
  console.log(playGameInfo);
};








