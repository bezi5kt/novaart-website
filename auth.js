// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Get stored user
        const storedUser = localStorage.getItem('novaart_user');
        
        if (!storedUser) {
            alert('No account found. Please register first.');
            return;
        }

        const user = JSON.parse(storedUser);

        // Simple validation (in production, this would be server-side)
        if (user.email === email && user.password === password) {
            alert('Login successful!');
            window.location.href = 'order.html';
        } else {
            alert('Invalid email or password.');
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const phone = document.getElementById('regPhone').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Validate email is Gmail (optional requirement)
        if (!email.toLowerCase().includes('gmail.com') && !email.toLowerCase().includes('@')) {
            alert('Please use a valid email address.');
            return;
        }

        // Validate phone number format
        const phoneRegex = /^\+?[\d\s\-()]+$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Create user object
        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password, // In production, NEVER store plain passwords!
            created: new Date().toISOString()
        };

        // Store in localStorage (in production, send to backend)
        localStorage.setItem('novaart_user', JSON.stringify(user));

        alert('Account created successfully! You can now place orders.');
        window.location.href = 'order.html';
    });
}

// Check if already logged in
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('novaart_user');
    const currentPage = window.location.pathname.split('/').pop();
    
    // If on login/register page and already logged in, redirect to order page
    if (user && (currentPage === 'login.html' || currentPage === 'register.html')) {
        if (confirm('You are already logged in. Go to order page?')) {
            window.location.href = 'order.html';
        }
    }
});
