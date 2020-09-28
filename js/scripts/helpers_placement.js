const checkTile = function (tile, player) {
  if (gameTiles[tile].role === 'target') {
    return true;
  } else {
    return false;
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
      return checkArray(arrayOfTiles);
    }).then((array) => {
      highlightTiles(array);
    }).catch((error) => {
      console.log(error);
    });
  } else if (gameData.gameMode === 'play') {
    let tile = document.getElementById(id);
    tile.style.border = '1px solid yellow';
  }
};

const unHover = function (id) {
  if (gameData.gameMode === 'place') {
    highlightNoMore();
  } else if (gameData.gameMode === 'play') {
    let tile = document.getElementById(id);
    tile.style.border = 'none';
  }

};

const setAssets = function (array) {
  let shipClass = gameData.checkFor;
  let axis = gameData.placement.axis;
  
  for (let x = 0; x < array.length; x++) {
    playGameInfo.player[array[x]].ship = shipClass;
    gameTiles[array[x]].role = 'target';
    if (x === 0) {
      playGameInfo.player[currentArray[x]] = { asset: `url('js/lib/images/game_assets/${shipClass}_rear_${axis}.png')`, role: 'void' };
    } else if (x === array.length - 1) {
      playGameInfo.player[currentArray[x]] = { asset: `url('js/lib/images/game_assets/${shipClass}_fore_${axis}.png')`, role: 'void' };
    } else {
      playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${shipClass}_${axis}.png')`;
    }
  }
}

const colorArray = function (array) {
  setAssets(currentArray);
    let axis = gameData.placement.axis;
    let ship = gameData.checkFor;
    for (let x = 0; x < array.length; x++) {
      let tile = document.getElementById(array[x]);
  
      if (x === 0) {
       
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_rear_${axis}.png')`;
        tile.style.backgroundImage = playGameInfo.player[array[x]].asset;
        tile.style.backgroundSize = "100% 100%";
      } else if (x === currentArray.length - 1) {
      
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_fore_${axis}.png')`;
        tile.style.backgroundImage = playGameInfo.player[array[x]].asset;
        tile.style.backgroundSize = "100% 100%";
      } else {
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_${axis}.png')`;
        tile.style.backgroundImage = playGameInfo.player[array[x]].asset;
        tile.style.backgroundSize = "100% 100%";
      }
    
  };
  
}



  const boatPlacement = function (id) {
    let currentArray = gameData.placement.currentSpot;
    for (let item of currentArray) {
      if (gameTiles[item].role === 'target') {
        console.log(`occupied`);
        return;
      }
    }

    for (let x = 0; x < currentArray.length; x++) {
      playGameInfo.player[currentArray[x]] = {};
      
    }
    

    // for (let item of currentArray) {
    //   let tile = document.getElementById(item);
    //   tile.style.backgroundColor = gameAssets.colors[gameData.checkFor];
    //   gameTiles[item].role = 'target';
    //   let shipClass = gameData.checkFor;
    //   gameTiles.ship = shipClass;
    //   playGameInfo.player[item] = { asset: 'red', role: 'void' };
    //   playGameInfo.player[item].ship = shipClass;
    // }
    let shipClass = gameData.checkFor;
    colorArray(currentArray);
    gameData.lastShip = shipClass;
    gameData.checkFor = 'void';
    gameData.placement[shipClass] = currentArray;
    
  };




  const sendPlayerGreeting = function () {
    let containerBlock = document.getElementById('playerDialogue');
    let playerCharacter = gameData.playerCharacter;
    let playerGreeting = classes[playerCharacter].phrases.greeting;
    containerBlock.innerHTML = playerGreeting;


  }
  const sendOpponentGreeting = function () {
    let containerBlock = document.getElementById('opponentDialogue');
    let opponentCharacter = gameData.opponentCharacter;
    let opponentGreeting = classes[opponentCharacter].phrases.greeting;
    containerBlock.innerHTML = opponentGreeting;


  }



  const shipPlacementButton = function (cla) {
    console.log(`This is the gameGata for this tile: ${gameData.placement[cla]}`)
    if (gameData.placement[cla] !== 'n') {

      let tileArray = gameData.placement[cla];
      for (let item of tileArray) {
        let tile = document.getElementById(item);
        console.log(tile);
        tile.style.backgroundImage = 'url("js/lib/images/game_assets/tile_water.png")';
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
            if (x === (id + length * 10)) {

              if (x !== (id + length * 10)) {

                resolve(false);
              }
            }


          } else if (id >= 100) {
            if (x > 199) {
              resolve(false);
            }
            if (x === (id + length * 10)) {

              if (x !== (id + length * 10)) {

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

    return new Promise((resolve, reject) => {
      for (let item of array) {

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
    let axis = gameData.placement.axis;
    let ship = gameData.checkFor;
    for (let x = 0; x < array.length; x++) {
      let tile = document.getElementById(array[x]);
  
      if (x === 0) {
       
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_rear_${axis}.png')`;
        tile.style.backgroundImage = gameAssets.colors[ship][axis].rear;
        tile.style.backgroundSize = "100% 100%";
      } else if (x === currentArray.length - 1) {
      
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_fore_${axis}.png')`;
        tile.style.backgroundImage = gameAssets.colors[ship][axis].fore;
        tile.style.backgroundSize = "100% 100%";
      } else {
        // playGameInfo.player[array[x]].asset = `url('js/lib/images/game_assets/${ship}_${axis}.png')`;
        tile.style.backgroundImage = gameAssets.colors[ship][axis].mid;
        tile.style.backgroundSize = "100% 100%";
      }
    
  };
    // let color = 'js/lib/images/game_assets/ship_01.png';
    // for (let item of array) {
    //   let tileToHighlight = document.getElementById(item);
    //   tileToHighlight.style.backgroundImage = `url(${color})`;
    // }
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
        tileToHighlight.style.backgroundImage = 'url("js/lib/images/game_assets/tile_water.png")';
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

  };








