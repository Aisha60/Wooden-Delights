document.addEventListener("DOMContentLoaded", function() {
    // Toggle dropdown visibility
    document.querySelector(".dropbtn").addEventListener("click", function() {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn img')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }

    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.card button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const card = event.target.closest('.card');
            const product = {
                image: card.querySelector('img').src,
                name: card.querySelector('h3:nth-of-type(1)').textContent,
                price: card.querySelector('h3:nth-of-type(2)').textContent,
                description: card.querySelector('p') ? card.querySelector('p').textContent : '',
                quantity: 1 // Initial quantity is set to 1
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        // Retrieve existing cart data from localStorage or initialize an empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            alert(`${product.name} is already in your cart!`);
        } else {
            // Add the new product to the cart
            cart.push(product);

            // Store the updated cart back in localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${product.name} has been added to your cart!`);
        }
    }
});