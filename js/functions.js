$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll / 40 +'%)'
  });

  if(wScroll > $('.clothes-picks').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-picks figure').each(function(i){
      setTimeout(function(){
        $('.clothes-picks figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

});
