const placementTurn = function(player, id) {
    boatPlacement(id);
    clearMessage('player');
    sendMessage('player', 'shipPlace')
}