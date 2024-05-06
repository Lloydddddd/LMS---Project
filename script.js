document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all links with hash (#) in href attribute
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top when clicking on the "Home" link in the navbar
    document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Open modal or perform other actions for specific buttons
    // Example: Toggle modal when clicking on "Sign in" button
    document.querySelector('.btn.signin').addEventListener('click', function() {
        // Add your modal toggle code here
        console.log('Sign in button clicked');
    });

    // Example: Submit form when clicking on "Submit" button
    document.querySelector('.btn.submit').addEventListener('click', function() {
        // Add your form submission code here
        console.log('Form submitted');
    });

    // Add event listeners for other buttons and links as needed
});



