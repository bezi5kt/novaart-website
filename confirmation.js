// Load and display order details
document.addEventListener('DOMContentLoaded', function() {
    const order = localStorage.getItem('novaart_last_order');
    
    if (!order) {
        alert('No order found.');
        window.location.href = 'index.html';
        return;
    }

    const orderData = JSON.parse(order);

    document.getElementById('orderNumber').textContent = '#' + orderData.orderNumber;
    document.getElementById('customerName').textContent = orderData.customer.name;
    document.getElementById('customerEmail').textContent = orderData.customer.email;
    document.getElementById('orderProduct').textContent = orderData.product;
    document.getElementById('orderStyle').textContent = orderData.style;
    document.getElementById('orderAddress').textContent = orderData.address;
    document.getElementById('orderTotal').textContent = '€' + orderData.total;

    console.log('Order confirmed:', orderData);
});
