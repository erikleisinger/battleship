const checkTile = function (tile, player) {
  if (gameTiles[tile].role === 'target') {
    return true;
  } else {
    return false;
  }
};

const changeTileAsset = function (tile) {
  let tileRole = gameTiles[tile].role;
  if (tileRole === 'target') {
  }
  let color = gameAssets.colors[tileRole];
  let changeTile = document.getElementById(tile);
  changeTile.style.backgroundColor = color;

}

const fireAtTile = function (tile, player) {
  if (checkTile(tile) === true) {
    changeTileAsset(tile);
    sendMessage(player, 'hit');

  } else {
    gameTiles[tile].role = 'tried';
    changeTileAsset(tile);
    sendMessage(player, 'tried');
  }
};

function getInputValue() {
  // Selecting the input element and get its value 
  let inputVal = document.getElementById("myInput").value;
  gameData.playerName = inputVal;
  console.log(gameData.playerName);
}

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
    playGameInfo.player[item] = { asset: 'red', role: 'void' };
    playGameInfo.player[item].ship = shipClass;
    console.log(playGameInfo.player)
  }
  let shipClass = gameData.checkFor;
  gameData.lastShip = shipClass;
  gameData.checkFor = 'void';
  gameData.placement[shipClass] = currentArray;
};


const sendMessage = function (player, event) {
  clearMessage(player);

  let getter = `${player}Character`;
  console.log(getter);
  let userClass = gameData[getter];
  console.log(userClass);
  let classClass = classes[userClass];
  console.log(classClass);
  let blockGetter = `${player}Dialogue`;
  let containerBlock = document.getElementById(blockGetter);
  if (event === 'shipPlace') {
    let currentShip = gameData.lastShip;
    containerBlock.innerHTML = classClass.shipPlace(currentShip);

    console.log(`heres the dialogue: ${classClass.shipPlace(currentShip)}`);
  } else {
    containerBlock.innerHTML = classClass.getPhrase(event);
  }
}

const sendPlayerGreeting = function () {
  let containerBlock = document.getElementById('playerDialogue');
  let playerCharacter = gameData.playerCharacter;
  let playerGreeting = classes[playerCharacter].phrases.greeting;
  console.log(playerGreeting);
  containerBlock.innerHTML = playerGreeting;


}
const sendOpponentGreeting = function () {
  let containerBlock = document.getElementById('opponentDialogue');
  let opponentCharacter = gameData.opponentCharacter;
  let opponentGreeting = classes[opponentCharacter].phrases.greeting;
  console.log(opponentGreeting);
  containerBlock.innerHTML = opponentGreeting;


}
const clearMessage = function (user) {
  let id = `${user}Dialogue`;
  console.log(id);
  let containerBlock = document.getElementById(id);
  console.log(containerBlock.innerText);
  containerBlock.innerText = '';
};


const move = function (id) {

  if (gameData.gameMode === 'place') {
    boatPlacement(id);
    clearMessage('player');
    sendMessage('player', 'shipPlace')
  } else if (gameData.gameMode === 'play') {
    userTurn(id);
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
        if (id < 100) {
          if (x > 99) {
            resolve(false);
          }
          if (x === (id + length *10)) {
            console.log('ALERT: THIS IS THE TILE:', x)
            if (x !== (id + length * 10)) {
              console.log('array is out of bounds')
              resolve(false);
            }
          }


        } else if (id >= 100) {
          if (x > 199) {
            resolve(false);
          }
          if (x === (id + length *10)) {
            console.log('ALERT: THIS IS THE TILE:', x)
            if (x !== (id + length * 10)) {
              console.log('array is out of bounds')
              resolve(false);
            }
          }

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

const playGameBoard = function () {
  for (let item in gameTiles) {
    if (gameTiles[item].role === 'target') {
    };
  };
  for (let item in playGameInfo.opponent) {
    gameTiles[item].role = 'target';
    // let ship = playGameInfo.opponent[item].ship;

    // let color = gameAssets.colors[ship];
    // console.log(color);
    // let tile = document.getElementById(item);
    // tile.style.backgroundColor = color;
  }
  console.log(playGameInfo);
};







