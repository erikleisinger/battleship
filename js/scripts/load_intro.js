$(document).ready(() => {
  setTimeout(() => {
    $('.intro').css({display: 'block'});
    $('.intro').animate({height: '85vh'});
  }, 1);
  setTimeout(() => {
    $('.intro').animate({width: '80vw'});
  }, 2);
    setTimeout(() => {
      $('.greeting').css({display: 'none'});
      $('.pickYourClass').css({display: 'flex'});
      $('.characterPick').css({display: 'flex'});
      $('.pickYourClass').animate({width: '80vw'})
      $('.nameWrapper').css({fontSize: '5vh'})
    }, 500);
    setTimeout(() => {
      $('.systemText').text('choose your class');
      $('.systemText').css({display: 'block'});
      $('.systemText').css({opacity: '1'});
    }, 1500);

    $('.selectChar').on('click', () => {
     $('.systemText').css({display: 'none'});
    })
  });