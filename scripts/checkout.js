import {cart, deleteFromCart} from '/scripts/cart.js';
import {products} from '/scripts/products.js';
import {formatPrice} from '/scripts/utils/price.js';

let cartHTML = '';

cart.forEach((item)=>{
  const productName = item.productName;
  
  let matchingProduct;
  
  products.forEach((product)=>{
    if(product.name === productName){
      matchingProduct = product;
    };
  });
  
console.log(matchingProduct);

cartHTML +=
`
<div class="cart-item-container js-cart-container-${matchingProduct.name}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatPrice(matchingProduct.priceInCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link"data-product-name="${matchingProduct.name}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-${matchingProduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${matchingProduct.name}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
`;
});

document.querySelector('.js-order-summary').innerHTML = cartHTML;

document.querySelectorAll('.js-delete-link').forEach((link)=>{
  link.addEventListener('click',()=>{
   const productName = link.dataset.productName;
   deleteFromCart(productName);
   
   const container = document.querySelector(
     `.js-cart-container-${productName}`
     );
   console.log(container);
  });
});