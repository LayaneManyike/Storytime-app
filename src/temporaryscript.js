// Handle contact form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    
    // Check if the contact form exists
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form data
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            // Simulate form submission success
            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);

            // Clear the form fields
            contactForm.reset();
        });
    }
});

// Handle sign-up form submission
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('#signup-form');
    
    // Check if the sign-up form exists
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form data
            const name = document.querySelector('#signup-name').value;
            const email = document.querySelector('#signup-email').value;

            // Simulate sign-up success
            alert(`Thank you for signing up, ${name}! You will be notified at ${email} when we launch the app.`);

            // Clear the form fields
            signUpForm.reset();
        });
    }
});

