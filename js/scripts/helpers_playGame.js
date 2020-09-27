const move = function (id) {
  if (gameData.gameMode === 'place') {
    placementTurn('player', id);
  } else if (gameData.gameMode === 'play') {
    gameTurn(id);
  }
};

const checkPlayTile = function (tile) {
  if (tile > 99) {
    return (tile in playGameInfo.opponent);
  } else {
    return (tile in playGameInfo.player)
  }
};

const changeTileAsset = function (tile, bool) {
  if (bool === true) {
    if (tile > 99) {
      let shipClass = playGameInfo.opponent[tile].ship;
      let color = gameAssets.colors[shipClass];
      document.getElementById(tile).style.backgroundColor = color;
    }
    if (tile < 99) {
      let shipClass = playGameInfo.player[tile].ship;
      let color = gameAssets.colors[shipClass];
      document.getElementById(tile).style.backgroundColor = color;
    }
  } else {
    let changeTile = document.getElementById(tile);
    changeTile.style.backgroundColor = 'black';
  }
  

}

const fireAtTile = function (tile, player) {
  if (checkPlayTile(tile) === true) {
    
    setTimeout(() => {
      sendMessage('player', 'hit');
    }, 1000)
    setTimeout(() => {
      changeTileAsset(tile, true);
    }, 1500);
    
  } else {
    setTimeout(() => {
      sendMessage('player', 'tried');
    }, 1000)
    setTimeout(() => {
      changeTileAsset(tile, null);
    }, 1500);
    gameTiles[tile].role = 'tried';
    
    
  }
};