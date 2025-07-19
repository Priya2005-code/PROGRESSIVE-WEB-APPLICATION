console.log('App loaded');
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    console.log("Notifications enabled");
  }
});
function addToCart(productName, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + " added to cart!");
}
