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

const clearMessage = function (user) {
  let id = `${user}Dialogue`;
  console.log(id);
  let containerBlock = document.getElementById(id);
  containerBlock.innerHTML = '';
};

const randomInterval = function () {
  return Math.floor(Math.random() * 1000);
}