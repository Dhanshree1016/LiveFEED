document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseMessage = document.getElementById('responseMessage');

    if (name && email && message) {
        responseMessage.style.color = 'green';
        responseMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
    } else {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill out all fields before submitting.';
    }
});
