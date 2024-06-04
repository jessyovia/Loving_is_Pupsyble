document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Simulate sending data to server (replace this with actual backend code)
            setTimeout(function() {
                formResponse.textContent = Thank you, ${name}! We have received your message and will get back to you at ${email} soon.;
                form.reset();
            }, 1000);
        } else {
            formResponse.textContent = 'Please fill in all fields.';
        }
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (const anchorLink of anchorLinks) {
        anchorLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});