document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartItemsElement = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let cartItems = [];
    let totalPrice = 0;
  
    addToCartBtn.addEventListener('click', function () {
      // Simulate adding an item to the cart
      const newItem = {
        name: 'Product Name',
        price: 19.99,
      };
  
      // Update the cart and total price
      cartItems.push(newItem);
      totalPrice += newItem.price;
  
      // Update the UI
      updateCartUI();
    });
  
    function updateCartUI() {
      cartItemsElement.innerHTML = ''; // Clear the cart items
  
      // Add items to the cart
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
      });
  
      // Update the total price
      totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }
  });
  