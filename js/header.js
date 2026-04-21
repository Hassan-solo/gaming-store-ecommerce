


// creat acitve in click user 
let cartIcon=document.querySelector('#cart');
let cart=document.querySelector(".carts");
let cartClose=document.querySelector("#cart-close");


cartIcon.addEventListener("click" ,() =>
    cart.classList.toggle("active")
);

cartClose.addEventListener("click", () => 
  cart.classList.remove("active")
);
