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
    sendMessage('place', 'player');
  }, 8000);
};

const placementTurn = function(player, id) {
    boatPlacement(id);
    clearMessage('player');
    sendMessage('player', 'shipPlace')
};