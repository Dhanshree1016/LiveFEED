document.getElementById('logout-button').addEventListener('click', function () {
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      // Redirect to the logout route or homepage
      window.location.href = 'index.html'; // Replace '/logout' with your logout URL
    }
  });
  