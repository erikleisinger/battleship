const addClasses = function () {
  classes.grawl = grawl;
  classes.virginia = virginia;
  classes.sadhguru = sadhguru;
  classes.kamala = kamala;
  classes.corey = corey;
};
addClasses();

const configureClassPicker = function () {
  let array = document.getElementsByClassName('characterPick');
  for (let item of array) {
    item.addEventListener('mouseover', () => {
      let child =  item.childNodes[3].style.display = "flex";
      child.addEventListener('mouseover', () => {
        this.style.display = 'block';
      })
    })
    item.addEventListener('mouseout', () => {
     item.childNodes[3].style.display = "none";
    })
  }
};
configureClassPicker();

const pickRandomOpponent = function () {
  let num = Math.floor(Math.random() * 5);
  console.log(num);
    if (num === 0) {
      gameData.opponentCharacter = 'grawl';
    }
    if (num === 1) {
      gameData.opponentCharacter = 'kamala';
    }
    if (num === 2) {
      gameData.opponentCharacter = 'virginia';
    }
    if (num === 3) {
      gameData.opponentCharacter = 'sadhguru';
    }
    if (num === 4) {
      gameData.opponentCharacter = 'corey';
    }
    if (gameData.opponentCharacter === gameData.playerCharacter) {
      pickRandomOpponent();
    }
}

const endCharSelect = function () {
  document.getElementsByClassName('pickYourClass')[0].style.display = 'none';
  document.getElementsByClassName('intro')[0].style.display = 'none';
  gameData.gameMode = 'play';
  console.log(gameData);
};

const setCharPictures = function () {
  let playerClass = gameData.playerCharacter;
  let playerFrame = document.getElementsByClassName('characterLeft')[0];
  let playerPic = classes[playerClass].images.rest;
  playerFrame.style.backgroundImage =  `url(${playerPic})`;

  let oppClass = gameData.opponentCharacter;
  let oppFrame = document.getElementsByClassName('character')[0];
  let oppPic = classes[oppClass].images.rest;
  oppFrame.style.backgroundImage =  `url(${oppPic})`;
};

const chooseCharacter = function(choice) {
  gameData.playerCharacter = choice;
  console.log(`chosen character: ${gameData.playerCharacter}`)
  let window = document.getElementsByClassName('intro')[0];
  window.style.display = 'none';
  pickRandomOpponent();
   endCharSelect();
    setCharPictures();
    gameData.gameMode = 'place';
    loadPlacement();

}

const characterSelectButtons = function () {
  let virginia = document.getElementById('virginiaSelect');
  virginia.addEventListener('click', () => {
    chooseCharacter('virginia');
    
  });
  let sadhguru = document.getElementById('sadhguruSelect');
  sadhguru.addEventListener('click', () => {
    chooseCharacter('sadhguru');
    
  });
  let grawl = document.getElementById('grawlSelect');
  grawl.addEventListener('click', () => {
    chooseCharacter('grawl');
    
  });
  let kamala = document.getElementById('kamalaSelect');
  kamala.addEventListener('click', () => {
    chooseCharacter('kamala');
   
  });
  let corey = document.getElementById('coreySelect');
  corey.addEventListener('click', () => {
    chooseCharacter('corey');
  });

};
characterSelectButtons();


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
    playGameBoard();
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