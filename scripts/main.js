const products = [
  {
    image: "images/products/Camera Lens.jpg",
    name: "Canon Camera Lens",
    description: `Capture an astoundingly wide field - of - view <br>Perspective and create a sense of depth.<br>Keeping more of the scene in sharp focus. < br >Deep focus`,
    priceInCents: 13400
  }
  ,
  {
    image: "images/products/Headphones.jpg",
    name: "Oneodio Pro 10",
    description: `50 mm Dual dynamic drivers < br >Ergonomic design < br >Adaptor < br >Extra bass sound`,
    priceInCents: 7550
  },
  {
    image: "images/products/Mobile Phone.jpg",
    name: "Iphone 8 Plus",
    description: `Retina HD display < br >5.5 - inch(diagonal) widescreen LCD < br >Multi - Touch display with IPS technology < br >1920 - by - 1080 - pixel resolution at 401 ppi`,
    priceInCents: 39900
  }]

console.log(products)

let search = document.querySelector('input');
let searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', searchProducts);

function searchProducts() {
  product = search.value
  console.log(product)
  search.value ='';
}