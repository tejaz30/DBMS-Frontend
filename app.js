// Default credentials
const validUsername = "admin";
const validPassword = "password123";

// Login functionality
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page

        // Get user input
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verify credentials
        if (username === validUsername && password === validPassword) {
            errorMessage.style.display = "none";
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        } else {
            errorMessage.style.display = "block";
            errorMessage.innerText = "Invalid username or password. Please try again.";
        }
    });
    // JavaScript to Handle Navigation Between Pages
    function navigateTo(link) {
    window.location.href = link;
}
}