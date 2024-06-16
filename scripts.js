document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate Name
        if (name === '') {
            isValid = false;
            setInvalidField('name', 'Please enter your name.');
        } else {
            setValidField('name');
        }

        // Validate Email
        if (email === '') {
            isValid = false;
            setInvalidField('email', 'Please enter your email address.');
        } else if (!validateEmail(email)) {
            isValid = false;
            setInvalidField('email', 'Please enter a valid email address.');
        } else {
            setValidField('email');
        }

        // Validate Subject
        if (subject === '') {
            isValid = false;
            setInvalidField('subject', 'Please enter a subject.');
        } else {
            setValidField('subject');
        }

        // Validate Message
        if (message === '') {
            isValid = false;
            setInvalidField('message', 'Please enter a message.');
        } else {
            setValidField('message');
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert('Message sent successfully!');
            // Here you would typically send the form data to your server

            // Clear the form
            contactForm.reset();
        }
    });

    
    function setInvalidField(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        field.classList.add('is-invalid');
        field.nextElementSibling.textContent = errorMessage;
        field.nextElementSibling.classList.add('invalid-feedback', 'show');
    }

   
    function setValidField(fieldId) {
        const field = document.getElementById(fieldId);
        field.classList.remove('is-invalid');
        field.nextElementSibling.textContent = '';
        field.nextElementSibling.classList.remove('invalid-feedback', 'show');
    }

   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
