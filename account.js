// Check authentication
function checkAuth() {
    const user = localStorage.getItem('novaart_user');
    if (!user) {
        alert('Please log in to access your account.');
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(user);
}

// Load account data
function loadAccountData() {
    const user = checkAuth();
    if (!user) return;

    document.getElementById('accountName').value = user.name || '';
    document.getElementById('accountEmail').value = user.email || '';
    document.getElementById('accountPhone').value = user.phone || '';
    document.getElementById('accountStreet').value = user.address?.street || '';
    document.getElementById('accountCity').value = user.address?.city || '';
    document.getElementById('accountPostal').value = user.address?.postal || '';
    document.getElementById('accountCountry').value = user.address?.country || 'Slovenia';

    // Display member info
    const memberDate = new Date(user.created).toLocaleDateString('en-GB');
    document.getElementById('memberSince').textContent = memberDate;
    
    // Count orders (placeholder)
    document.getElementById('totalOrders').textContent = '0';
}

// Save account changes
const accountForm = document.getElementById('accountForm');
if (accountForm) {
    accountForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = checkAuth();
        if (!user) return;

        user.name = document.getElementById('accountName').value;
        user.email = document.getElementById('accountEmail').value;
        user.phone = document.getElementById('accountPhone').value;
        user.address = {
            street: document.getElementById('accountStreet').value,
            city: document.getElementById('accountCity').value,
            postal: document.getElementById('accountPostal').value,
            country: document.getElementById('accountCountry').value
        };

        localStorage.setItem('novaart_user', JSON.stringify(user));
        alert('Account updated successfully!');
    });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to log out?')) {
            localStorage.removeItem('novaart_user');
            window.location.href = 'index.html';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadAccountData);
