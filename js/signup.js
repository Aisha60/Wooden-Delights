document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMessage = document.getElementById('error-message');

    // Check if the email is already signed up
    var existingData = JSON.parse(localStorage.getItem('signupData')) || [];
    var isEmailExists = existingData.some(function(user) {
        return user.email === email;
    });

    if (isEmailExists) {
        errorMessage.textContent = 'This email address is already signed up. Please use a different email.';
        errorMessage.style.color = 'red';
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.color = 'red';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = '';
        // Store signup data in JSON format
        var userData = {
            name: name,
            email: email,
            password: password
        };
        // Add new data to the array
        existingData.push(userData);
        // Store the updated array back to localStorage
        localStorage.setItem('signupData', JSON.stringify(existingData));
        // Redirect the user to the login page
        window.location.href = "../Html/login.html";
        // For demonstration purposes, let's reset the form
        this.reset();
    }
});
