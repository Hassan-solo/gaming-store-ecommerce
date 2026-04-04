

// swiper  hom page 
var swiper = new Swiper(".myHeroSwiper", {
  loop: true,
  effect: "fade", 
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
 
});


fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    
    const wrapper = document.querySelector(".productSwiper .swiper-wrapper");

    data.forEach((product) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "product-card");


      slide.innerHTML = `
        <span class="Badge">${product.badge}</span>
        <img src="${product.image}" class="main-product-img" />
        <h4>${product.title}</h4>
        <p>${product.price}</p>
        <div class="color-dots">
          ${product.colors
            .map(
              (c) => `
            <span class="dot"
              style="background-color:${c.color}"
              data-image="${c.image}">
            </span>
          `
            )
            .join("")}
        </div>
      `;

      wrapper.appendChild(slide);
    });
  });


new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    // loop: true,
    // autoplay: { delay: 0 },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});