document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (!email || !password) {
        errorMessage.textContent = '    Please enter both email and password.';
        errorMessage.style.color = 'red';
        return;
    }

    // Check if the user is already registered
    var existingData = JSON.parse(localStorage.getItem('signupData')) || [];
    var user = existingData.find(function (userData) {
        return userData.email === email && userData.password === password;
    });

    if (user) {
        errorMessage.textContent = '';
        // Store login status
        localStorage.setItem('loggedInEmail', email);
        alert('Logged in successfully!');
        // Redirect to cart page or any other desired page
        window.location.href = "../Html/cart.html";
        // For demonstration purposes, let's reset the form
        this.reset();
    } else {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        errorMessage.style.color = 'red';
    }
});