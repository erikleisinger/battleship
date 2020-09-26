$(document).ready(() => {
  setTimeout(() => {
    $('.intro').css({display: 'block'});
    $('.intro').animate({height: '80vh'});
  }, 1);
  setTimeout(() => {
    $('.intro').animate({width: '80vw'});
  }, 2);
  setTimeout(() => {
    $('.greeting').fadeTo(100, 1);
  }, 1000);
  setTimeout(() => {
    $('.greeting').fadeTo(100, 0);
  }, 2000);
  setTimeout(() => {
    $('.greeting').text(`Welcome to`);
    $('.greeting').fadeTo(100, 1);
  }, 4000);
  setTimeout(() => {
    $('.greeting').append(` BATTLESHIP`);
  }, 6000);
  setTimeout(() => {
    $('.greeting').text(`BATTLESHIP`);
    $(`.greeting`).animate({height: '75vh'});
    // $('.greeting').fadeTo(100, 0);
  }, 10000);
  setTimeout(() => {
    $('#query').css({opacity: '0'});
    $('#query').text('Whats your name?');
    $('.queryBox').css({display: 'block'});
   
  }, 12000);
  setTimeout(() => {
    $('#query').fadeTo(100, 1);
    $('.greeting').fadeTo(100, 0);
    $('.greeting').css({display: 'none'});
  }, 13000);

  $('#myButton').on('click', () => {
    setTimeout(() => {
        $('#query').text('Great!');
    }, 200);
    setTimeout(() => {
      $('#query').fadeTo(100, 0);
    }, 1000)
   
    setTimeout(() => {
      let name = gameData.playerName;
      $('#query').text(`Nice to meet you, ${name}`);
      $('#query').fadeTo(100, 1);
    }, 1400)
    setTimeout(() => {
      $('.queryBox').fadeTo(100, 0);

    }, 3000)
    setTimeout(() => {
      $('.queryBox').css({display: 'none'});
    }, 3500)
  })
});