const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },

  navigation: {
    nextEl: '.projects__arrow-next',
    prevEl: '.projects__arrow-prev',
  },
});