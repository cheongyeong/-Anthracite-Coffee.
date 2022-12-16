var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  // spaceBetween: 50,
  freeMode: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: { //반응형 가로폭 포인트를 변경할 수 있는 속성
    1300: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".right_arrow",
    prevEl: ".left_arrow",
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  freeMode: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});



$(".popupVideo a").click(function () {
    $(".video-popup").addClass("reveal"),
      $(".video-popup .video-wrapper").remove(),
      $(".video-popup").append(
        "<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(
          this).data("video") +
        "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
  }),
  $(".video-popup-closer").click(function () {
    $(".video-popup .video-wrapper").remove(),
      $(".video-popup").removeClass("reveal")
  });