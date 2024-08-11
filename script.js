// const swiper = document.querySelector(".slider-container");

// function mobileSlider() {
//   if (window.innerWidth <= 767.98 && swiper.dataset.mobile == "false") {
//     const mySwiper = new Swiper(".swiper", {
//       slidesPerView: 1.3,
//       direction: "vertical",
//       loop: true,
//       slideClass: "slider-slide",
//     });

//     swiper.dataset.mobile = "true";
//   } else {
//     swiper.dataset.mobile = "false";
//     mySwiper.destroy();
//   }
// }

// mobileSlider();

// window.addEventListener("resize", () => {
//   mobileSlider();
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
