
  var swiper = new Swiper(".mySwiper4", {
  autoplay: {
  delay: 3500,
  disableOnInteraction: false
},
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
   768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },

}
  });

