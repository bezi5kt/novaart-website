// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('novaart_user');
    if (!user) {
        // Redirect to login if not authenticated
        alert('Please log in or create an account to place an order.');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Update navigation based on auth status
function updateNav() {
    const user = localStorage.getItem('novaart_user');
    const navAuth = document.getElementById('navAuth');
    
    if (user && navAuth) {
        const userData = JSON.parse(user);
        navAuth.textContent = userData.name.split(' ')[0];
        navAuth.href = '#';
        navAuth.onclick = (e) => {
            e.preventDefault();
            if (confirm('Log out?')) {
                localStorage.removeItem('novaart_user');
                window.location.href = 'index.html';
            }
        };
    }
}

// File upload and preview
const fileInput = document.getElementById('photo');
const fileNameDisplay = document.getElementById('fileName');
const imagePreview = document.getElementById('imagePreview');
const removeBtn = document.getElementById('removeImageBtn');

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB. Please choose a smaller file.');
            this.value = '';
            return;
        }

        // Update file name display
        fileNameDisplay.textContent = file.name;
        
        // Show image preview
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            imagePreview.style.display = 'block';
            removeBtn.style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }
});

// Remove image button
removeBtn.addEventListener('click', function() {
    fileInput.value = '';
    fileNameDisplay.textContent = 'Click to select or drag and drop your photo';
    imagePreview.style.display = 'none';
    imagePreview.innerHTML = '';
    removeBtn.style.display = 'none';
    updateOrderSummary();
});

// Price calculation
const productSizeSelect = document.getElementById('productSize');
const customDesignCheckbox = document.getElementById('customDesign');
const styleSelect = document.getElementById('style');

function updateOrderSummary() {
    const selectedOption = productSizeSelect.options[productSizeSelect.selectedIndex];
    const basePrice = selectedOption.dataset.price ? parseFloat(selectedOption.dataset.price) : 0;
    const designFee = customDesignCheckbox.checked ? 20 : 0;
    const total = basePrice + designFee;

    // Update summary sidebar
    document.getElementById('summaryProduct').textContent = 
        selectedOption.value ? selectedOption.text.split('—')[0].trim() : 'Not selected';
    
    document.getElementById('summaryStyle').textContent = 
        styleSelect.options[styleSelect.selectedIndex].text || 'Not selected';
    
    document.getElementById('customDesignRow').style.display = 
        customDesignCheckbox.checked ? 'flex' : 'none';
    
    document.getElementById('summaryTotal').textContent = `€${total.toFixed(2)}`;
    document.getElementById('totalPrice').textContent = `€${total.toFixed(2)}`;
}

productSizeSelect.addEventListener('change', updateOrderSummary);
customDesignCheckbox.addEventListener('change', updateOrderSummary);
styleSelect.addEventListener('change', updateOrderSummary);

// Form submission
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Check authentication
    if (!checkAuth()) return;

    // Validate all required fields
    const formData = new FormData(orderForm);
    const photo = formData.get('photo');
    
    if (!photo || photo.size === 0) {
        alert('Please upload a photo.');
        return;
    }

    const style = formData.get('style');
    const productSize = formData.get('productSize');
    const street = formData.get('street');
    const city = formData.get('city');
    const postalCode = formData.get('postalCode');
    const country = formData.get('country');

    if (!style || !productSize || !street || !city || !postalCode || !country) {
        alert('Please fill in all required fields.');
        return;
    }

    // Get user data
    const user = JSON.parse(localStorage.getItem('novaart_user'));

    // Calculate total
    const selectedOption = productSizeSelect.options[productSizeSelect.selectedIndex];
    const basePrice = parseFloat(selectedOption.dataset.price);
    const designFee = customDesignCheckbox.checked ? 20 : 0;
    const total = basePrice + designFee;

    // Create order object
    const order = {
        orderNumber: 'NA-' + Date.now().toString().slice(-5),
        customer: {
            name: user.name,
            email: user.email,
            phone: user.phone
        },
        product: selectedOption.text.split('—')[0].trim(),
        style: styleSelect.options[styleSelect.selectedIndex].text,
        address: `${street}, ${city}, ${postalCode}, ${country}`,
        notes: formData.get('notes'),
        customDesign: customDesignCheckbox.checked,
        total: total.toFixed(2),
        timestamp: new Date().toISOString()
    };

    // Store order in localStorage (in production, send to backend)
    localStorage.setItem('novaart_last_order', JSON.stringify(order));

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    updateNav();
    updateOrderSummary();
});
