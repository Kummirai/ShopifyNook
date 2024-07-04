import {cart, addToCart} from '/scripts/cart.js';
import {products} from '/scripts/products.js';
import {formatPrice} from '/scripts/utils/price.js';

/*let search = document.querySelector('input');
let searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', searchProducts);

function searchProducts() {
  product = search.value
  search.value ='';
}*/
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <section class="products-container">
    <div class="product-column">
      <img class='products-image' src="${product.image}">
      <h4 class="product-name">${product.name}</h4>
      <p>${product.description}</p>
      <div class = "product-quantity-container" >
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
      </div>
      <h5>$${formatPrice(product.priceInCents)}</h5>
      <button class="btn add-to-cart" data-product-name="${product.name}">Add to Cart</button>
    </div>
  </section>`
});

document.querySelector(".products-container").innerHTML = productsHTML;


function cartQuantityUpdate() {
  let cartQuantity = 0;
  
  cart.forEach((item) => {
    cartQuantity += item.quantity
  });

document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    
    addToCart(productName);
    
    cartQuantityUpdate();
    
    });
  });