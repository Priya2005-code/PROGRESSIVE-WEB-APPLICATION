function addToCart(name, price) {
  const product = {
    name: name,
    price: price
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
