const products = [
  {
    image: "/images/products/africanDress1A.webp",
    name: "Canon Camera Lens",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 13400
  }
  ,
  {
    image: "/images/products/AfricanDress2C.jpg",
    name: "Oneodio Pro 10",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 7550
  },
  {
    image: "/images/products/africanDress3A.jpg",
    name: "Iphone 8 Plus",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 39900
  },
  {
    image: "/images/products/africanDress4A.jpg",
    name: "Canon Camera Lens",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 13400
  }
  ,
  {
    image: "/images/products/menAfrican1E.jpg",
    name: "Oneodio Pro 10",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 7550
  },
  {
    image: "/images/products/menAfrican2A.jpg",
    name: "Iphone 8 Plus",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 39900
  },
  {
    image: "/images/products/menAfrican3A.jpg",
    name: "Canon Camera Lens",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 13400
  }
  ,
  {
    image: "/images/products/menAfrican4A.jpg",
    name: "Oneodio Pro 10",
    description: `50 mm Dual dynamic drivers <br>Ergonomic design<br>Adaptor<br>Extra bass sound`,
    priceInCents: 7550
  }]


let search = document.querySelector('input');
let searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', searchProducts);

function searchProducts() {
  product = search.value
  console.log(product)
  search.value ='';
}
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
      <h5>$${((product.priceInCents)/100).toFixed(2)}</h5>
      <button class="btn add-to-cart">Add to Cart</button>
    </div>
  </section>`
});

document.querySelector(".products-container").innerHTML = productsHTML;