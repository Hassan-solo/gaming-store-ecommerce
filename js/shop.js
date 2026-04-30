// 1. Get the Product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// 2. Fetch the data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // 3. Find the product that matches the ID
    const product = data.find(p => p.id == productId);

    if (product) {
      renderProductDetails(product);
    } else {
      console.error("Product not found");
    }
  });

function renderProductDetails(product) {
  // Update the UI with product data
  document.querySelector('.product-name').innerText = product.name;
  document.querySelector('.product-brand').innerText = product.brand;
  document.querySelector('.product-price').innerText = `${product.price} ${product.currency}`;
  document.querySelector('.main-image').src = product.main_image;
  document.querySelector('.description').innerText = product.description;

  // Render Gallery images
  const galleryContainer = document.querySelector('.gallery-container');
  galleryContainer.innerHTML = product.gallery.map(img => 
    `<img src="${img}" onclick="changeMainImage('${img}')">`
  ).join('');
}