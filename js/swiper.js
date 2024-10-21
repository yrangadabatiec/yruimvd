var width = window.screen.width
console.log(width);
document.addEventListener('DOMContentLoaded', function () {
  if (width >= 1600) {
    console.log('1600');
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 32,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  else if (width < 1600 || width >= 800) {
    console.log('min800');
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});