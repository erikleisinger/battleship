const move = function (id) {
  if (gameData.gameMode === 'place') {
    placementTurn('player', id);
  } else if (gameData.gameMode === 'play') {
    gameTurn(id);
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