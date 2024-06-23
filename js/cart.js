document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalCostElement = document.getElementById('total-cost');
    const clearCartBtn = document.querySelector('.clear-cart-btn');

    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalCost = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <h3>${item.price}</h3>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <input type="number" value="${item.quantity}" min="1" max="12" data-index="${index}">
                    </div>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);

            // Parse the price and calculate the total cost
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
            totalCost += price * item.quantity;
        });

        totalCostElement.textContent = totalCost.toFixed(2) + ' PKR';
    }

    // Event listener for updating quantity and removing items
    cartItemsContainer.addEventListener('change', (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'number') {
            const index = event.target.getAttribute('data-index');
            const newQuantity = Math.max(1, Math.min(12, parseInt(event.target.value)));
            cart[index].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    // Event listener for clearing the cart
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        localStorage.removeItem('cart');
        updateCart();
    });

    // Initial cart update
    updateCart();
});
