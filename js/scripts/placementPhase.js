
const loadPlacement = function () {
  setTimeout(() => {
    sendPlayerGreeting();
  }, 1000);
  setTimeout(() => {
    sendOpponentGreeting();
  }, 4000);
  setTimeout(() => {
    clearMessage('player');
  }, 5000);
  setTimeout(() => {
    clearMessage('opponent');
  }, 6000);
  setTimeout(() => {
    sendMessage('player', 'place');
  }, 8000);
  
};


// window.setInterval(() => {
//   sendMessage('player', 'resting')
//   setTimeout(() => {
//     clearMessage('player');
//   }, 8000)
// }, getRandomInterval());
// window.setInterval(() => {
//   sendMessage('opponent', 'resting')
//     setTimeout(() => {
//       clearMessage('opponent');
//     }, 8000)
// }, getRandomInterval());

const placementTurn = function(player, id) {
    boatPlacement(id);
    clearMessage('player');
    sendMessage('player', 'shipPlace')
};