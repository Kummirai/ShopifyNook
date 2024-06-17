let search = document.querySelector('input');
let searchBtn = document.querySelector('.search');

searchBtn.addEventListener('click', searchProducts);

function searchProducts() {
  product = search.value
  console.log(product)
  search.value ='';
}