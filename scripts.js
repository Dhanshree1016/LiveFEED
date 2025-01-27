document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation logic
    if (username === 'admin' && password === '1234') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'team.html'; // Redirect to the home page
        }, 1000);
    } else {
        message.textContent = 'Invalid username or password. Please try again.';
    }
});