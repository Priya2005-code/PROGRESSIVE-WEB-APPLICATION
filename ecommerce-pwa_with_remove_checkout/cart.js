window.onload = function () {
  const cartContainer = document.getElementById('cart-container');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    let total = 0;
    let output = '<ul>';
    cart.forEach((item, index) => {
      output += `<li>${item.name} - $${item.price} 
        <button onclick="removeItem(${index})">Remove</button>
      </li>`;
      total += item.price;
    });
    output += '</ul>';
    output += `<p><strong>Total:</strong> $${total}</p>`;
    output += '<button onclick="checkout()">Checkout</button>';
    cartContainer.innerHTML = output;
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  };

  window.checkout = function() {
    alert('Checkout complete! Thank you for shopping.');
    cart = [];
    localStorage.removeItem('cart');
    renderCart();
  };

  renderCart();
}
