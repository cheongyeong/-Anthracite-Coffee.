var swiper = new Swiper(".blend-slide", {
  // slidesPerView: 4,
  // spaceBetween: 50,
  freeMode: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: { //반응형 가로폭 포인트를 변경할 수 있는 속성
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },


    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});