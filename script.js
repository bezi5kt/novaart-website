// Smooth scrolling for navigation links
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

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Update navigation based on login status
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('novaart_user');
    const navLogin = document.querySelector('.nav-login');
    
    if (user && navLogin) {
        const userData = JSON.parse(user);
        navLogin.textContent = userData.name.split(' ')[0];
        navLogin.href = '#';
        navLogin.onclick = (e) => {
            e.preventDefault();
            if (confirm('Log out?')) {
                localStorage.removeItem('novaart_user');
                window.location.reload();
            }
        };
    }
});
