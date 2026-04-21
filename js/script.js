



// swiper Hom page 
var swiper = new Swiper(".myHeroSwiper", {
  loop: true,
  effect: "fade", 
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
 
});



new Swiper(".productSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});


