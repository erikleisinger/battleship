const gameTiles = {

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

