export let cart = [{
  productName: 'African Dress',
  quantity: 2
  },
  {
    productName : 'Man African Attire',
    quantity: 1
  }];
  
export function addToCart(productName) {
  
  let existingItem;
  
  cart.forEach((item) => {
    if (productName === item.productName) {
      existingItem = item;
    }
  });
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      quantity: 1
    });
  }
}

export function deleteFromCart(productName) {
  let newCart = [];
  cart.forEach((item) =>{
    if(item.productName !== productName){
      newCart.push(item);
    };
  });
  cart = newCart
};