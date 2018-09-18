$(function() {
  $(".phone_number").text(function(i, text) {
    text = text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    return text;
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 63) /* .header-top height */ {
      $('#menu').addClass('fixed');
    } else {
      $('#menu').removeClass('fixed');
    }
  });
});


$(document).ready(function(){

  TweenMax.from('#slider-content span', 1.25, {opacity: "0", y: -20} )
  TweenMax.from('#slider-content h1', 2, {x:30, opacity: "0", delay: 1.5})

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

});

