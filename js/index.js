document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-us-button").addEventListener("click", function() {
        window.location.href = "contact.html";
    });

    document.getElementById("shop-now-button").addEventListener("click", function() {
        document.getElementById("shop-by-category").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("shop-featured").addEventListener("click", function() {
        window.location.href = "living.html";
    });

    document.getElementById("email-signup-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Check if the email input is valid
        var emailInput = document.getElementById("email-input");
        if (emailInput.checkValidity()) {
            alert("Thank you for signing up!");
            window.location.reload(); // Reload the page on successful form submission
        } else {
            emailInput.reportValidity(); // Display validation message
        }
    });

    // Add event listeners for the category shop now buttons
    var categoryButtons = document.querySelectorAll('.shop-now-button[data-category]');
    categoryButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var categoryPage = button.getAttribute('data-category');
            window.location.href = categoryPage;
        });
    });

    function redirectToCart() {
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        if (loggedInEmail) {
            // User is logged in, redirect to cart page
            window.location.href = 'cart.html';
        } else {
            // User is not logged in, redirect to login page
            window.location.href = 'login.html';
        }
    }

});