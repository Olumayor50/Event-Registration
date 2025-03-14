// Handle login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (password === user.password) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid password!";
        }
    } else {
        errorMessage.textContent = "User not found!";
    }
});

// Handle registration
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const regMessage = document.getElementById("reg-message");

    if (localStorage.getItem(username)) {
        regMessage.textContent = "Username already exists!";
    } else {
        localStorage.setItem(username, JSON.stringify({ email, password }));
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html";
    }
});

// Handle forgot password
document.getElementById("forgot-password-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("forgot-email").value;
    const forgotMessage = document.getElementById("forgot-message");

    let foundUser = null;
    Object.keys(localStorage).forEach((key) => {
        const user = JSON.parse(localStorage.getItem(key));
        if (user.email === email) {
            foundUser = key;
        }
    });

    if (foundUser) {
        forgotMessage.textContent = "Password reset link sent to your email! (Simulated)";
    } else {
        forgotMessage.textContent = "Email not found!";
    }
});
