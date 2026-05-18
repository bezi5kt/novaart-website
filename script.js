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

// File upload preview
const fileInput = document.getElementById('photo');
const fileNameDisplay = document.getElementById('fileName');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Update file name display
        fileNameDisplay.textContent = file.name;
        
        // Show image preview
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Form submission handler
const orderForm = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');

orderForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(orderForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        style: formData.get('style'),
        size: formData.get('size'),
        notes: formData.get('notes'),
        timestamp: new Date().toISOString()
    };
    
    // Get the uploaded file
    const photoFile = formData.get('photo');
    
    // In a real implementation, you would:
    // 1. Upload the image to a service like Uploadcare, Cloudinary, or your own server
    // 2. Send the form data to your backend/email service
    // 3. Store the order in a database
    
    // For now, we'll simulate a successful submission
    console.log('Order submitted:', data);
    console.log('Photo file:', photoFile.name, photoFile.size, 'bytes');
    
    // TEMPORARY: Show success message
    // In production, you'll want to actually send this data somewhere
    orderForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // IMPLEMENTATION NOTES:
    // To make this functional, you need to integrate one of these services:
    
    // Option 1: Netlify Forms (easiest if hosting on Netlify)
    // Just add data-netlify="true" to the form tag and Netlify handles it
    
    // Option 2: Formspree or similar service
    // Send POST request to Formspree endpoint
    
    // Option 3: Uploadcare for images + Email service for notifications
    // Use Uploadcare's widget to handle file uploads
    // Use EmailJS or similar to send order details to your email
    
    // Example with EmailJS (after setting up account):
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: data.name,
        email: data.email,
        style: data.style,
        size: data.size,
        notes: data.notes,
        image_url: uploadedImageUrl
    }).then(() => {
        orderForm.style.display = 'none';
        successMessage.style.display = 'block';
    });
    */
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

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.validateEmail(email);
}

// File size validation (max 10MB)
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB. Please choose a smaller file.');
        this.value = '';
        fileNameDisplay.textContent = 'Click to select or drag and drop your photo';
        imagePreview.style.display = 'none';
    }
});
