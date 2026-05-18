// Load and display order details
document.addEventListener('DOMContentLoaded', function() {
    const order = localStorage.getItem('novaart_last_order');
    
    if (!order) {
        alert('No order found.');
        window.location.href = 'index.html';
        return;
    }

    const orderData = JSON.parse(order);

    // Populate order details
    document.getElementById('orderNumber').textContent = '#' + orderData.orderNumber;
    document.getElementById('customerName').textContent = orderData.customer.name;
    document.getElementById('customerEmail').textContent = orderData.customer.email;
    document.getElementById('orderProduct').textContent = orderData.product;
    document.getElementById('orderStyle').textContent = orderData.style;
    document.getElementById('orderAddress').textContent = orderData.address;
    document.getElementById('orderTotal').textContent = '€' + orderData.total;

    // Optional: Send order data to backend or email service here
    // Example: sendOrderToBackend(orderData);
    
    console.log('Order confirmed:', orderData);
});

// Function to send order to backend (to be implemented)
function sendOrderToBackend(orderData) {
    // In production, you would POST this data to your server
    // Example with fetch:
    /*
    fetch('https://your-backend.com/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => console.log('Order sent:', data))
    .catch(error => console.error('Error:', error));
    */
}
