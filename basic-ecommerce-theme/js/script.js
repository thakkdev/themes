// Shopping cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sample product data
const products = {
    1: { id: 1, name: 'Premium Wireless Headphones', price: 99.99, image: '📦' },
    2: { id: 2, name: 'Smart Watch Pro', price: 199.99, image: '📦' },
    3: { id: 3, name: 'Leather Backpack', price: 79.99, image: '📦' },
    4: { id: 4, name: 'Coffee Maker Deluxe', price: 129.99, image: '📦' },
    5: { id: 5, name: 'Wireless Keyboard', price: 59.99, image: '📦' },
    6: { id: 6, name: 'Designer Sunglasses', price: 149.99, image: '📦' },
    7: { id: 7, name: 'Yoga Mat Premium', price: 39.99, image: '📦' },
    8: { id: 8, name: 'Portable Speaker', price: 89.99, image: '📦' },
    9: { id: 9, name: 'Classic Novel Collection', price: 49.99, image: '📦' },
    10: { id: 10, name: 'Stainless Steel Water Bottle', price: 29.99, image: '📦' },
    11: { id: 11, name: 'Desk Lamp LED', price: 44.99, image: '📦' },
    12: { id: 12, name: 'Running Shoes Pro', price: 119.99, image: '📦' }
};

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // If on cart page, display cart items
    if (document.getElementById('cartItems')) {
        displayCartItems();
    }

    // Newsletter form handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});

// Add item to cart
function addToCart(productId) {
    const product = products[productId];
    
    if (!product) {
        console.error('Product not found');
        return;
    }

    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showNotification('Item added to cart!');
}

// Update cart count in header
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Display cart items on cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        updateCartSummary(0, 0, 0, 0);
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    
    let cartHTML = '';
    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    ${item.image}
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;
    calculateCartSummary();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
    showNotification('Item removed from cart');
}

// Calculate cart summary
function calculateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    updateCartSummary(subtotal, shipping, tax, total);
}

// Update cart summary display
function updateCartSummary(subtotal, shipping, tax, total) {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 && subtotal > 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Checkout functionality coming soon! This is a demo theme.');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification && notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}

// Filter products (for products page)
function clearFilters() {
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    showNotification('Filters cleared');
}

// Sort products (for products page)
function sortProducts(sortBy) {
    showNotification(`Sorting by: ${sortBy}`);
    // In a real application, this would re-arrange the products
}
