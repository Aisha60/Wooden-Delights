document.addEventListener("DOMContentLoaded", function() {
    // Contact form validation
    var emailInput = document.getElementById("email");
    var billingForm = document.getElementById("billing-form");
    var cashRadioButton = document.getElementById("cash");
    var button = document.getElementById("order");

    billingForm.addEventListener("submit", function(event) {
        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            event.preventDefault();
        }
        if (!cashRadioButton.checked) {
            alert("Please check payment method.");
            event.preventDefault(); 
        }
        else {
            alert("Thank you for placing your order!");
            button.disabled = true;
            billingForm.reset(); // Reset the form on successful submission

        }
    });
});

