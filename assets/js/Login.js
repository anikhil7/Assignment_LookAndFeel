document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var storedUsername = 'sasank';
    var storedPassword = 'password123';

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'Dashboard.html';
    } else {
        alert('Login failed! Incorrect username or password.');
    }
});