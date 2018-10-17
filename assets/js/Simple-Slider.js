$(function() {
  // Initializing the swiper plugin for the slider.
  // Read more here: http://idangero.us/swiper/api/
  var mySwiper = new Swiper('#bioraphy .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: '#bioraphy .swiper-pagination',
    paginationClickable: true,
    nextButton: '#bioraphy .swiper-button-next',
    prevButton: '#bioraphy .swiper-button-prev',
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
});
