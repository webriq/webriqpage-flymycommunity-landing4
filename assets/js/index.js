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
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 20,
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
  });

});
