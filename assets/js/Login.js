document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        // Normally, you would send username and password to the server here for verification
        // For demonstration, let's assume it's always successful
        // Use a placeholder function to simulate server validation
        checkCredentials(username, password, function(isValid) {
            if (isValid) {
                window.location.href = 'Dashboard.html';
            } else {
                alert('Login failed! Incorrect username or password.');
            }
        });
    });
});

// Placeholder for actual authentication function
function checkCredentials(username, password, callback) {
    // Simulate a server response where credentials are always invalid for demo
    var isValid = true; // This should be the result of server-side validation
    callback(isValid);
}
