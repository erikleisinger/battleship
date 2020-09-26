const generateGameTiles = function () {
  for (let x = 0; x < 200; x++) {
    gameTiles[x] = { asset: 'red', role: 'void', ship: 'void' };
  }
  for (let x = 0; x < 200; x++) {
    gameTiles[x] = { asset: 'red', role: 'void', ship: 'void' };
  }
  console.log(gameTiles);
};
generateGameTiles();

const createGrid = function () {
  let board = document.getElementById("boardPlayer");
  console.log('a');
  for (let j = 0; j < 100; j++) {
    let blockToInsert = document.createElement('div');
    let containerBlock = board
    containerBlock.appendChild(blockToInsert);
    blockToInsert.id = j;
    blockToInsert.addEventListener('click', function () {
      move(this.id);
    });
    blockToInsert.addEventListener('mouseover', function () {
      hover(this.id);
    });
    blockToInsert.addEventListener('mouseout', function () {
      unHover();
    });
  }
  let boardOpp = document.getElementById("boardOpp");
  for (let j = 100; j < 200; j++) {
    let blockToInsert = document.createElement('div');
    let containerBlock = boardOpp
    containerBlock.appendChild(blockToInsert);
    blockToInsert.id = j;
    blockToInsert.addEventListener('click', function () {
      move(this.id);
    });
    blockToInsert.addEventListener('mouseover', function () {
      hover(this.id);
    });
    blockToInsert.addEventListener('mouseout', function () {
      unHover();
    });
  }

}
createGrid();

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
    console.log(gameTiles);
  });
  let placeButton = document.getElementsByClassName('place')[0];
  placeButton.addEventListener('click', function () {
    gameData.gameMode = 'place';
    console.log(gameData);
  });
  let testButton = document.getElementsByClassName('bigTestButton')[0];
  testButton.addEventListener('click', function () {
    playGameBoard();
  });

};
setButtons();