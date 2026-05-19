// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update navigation based on login status
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('novaart_user');
    const navAuth = document.querySelector('.nav-login, #navAuth');
    
    if (user && navAuth) {
        const userData = JSON.parse(user);
        navAuth.textContent = userData.name.split(' ')[0];
        navAuth.href = 'account.html';
    }
});
