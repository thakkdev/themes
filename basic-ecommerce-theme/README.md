# Basic E-Commerce Theme

A clean, modern, and responsive static website theme for e-commerce applications. This theme provides a complete foundation for building an online store with a professional look and feel.

## Features

### 🎨 Modern Design
- Clean and minimalist interface
- Responsive layout that works on all devices
- Smooth animations and transitions
- Professional color scheme with CSS variables for easy customization

### 📱 Pages Included
1. **Home Page (index.html)** - Landing page with hero section, category cards, and featured products
2. **Products Page (products.html)** - Full product catalog with filtering and sorting
3. **Shopping Cart (cart.html)** - Cart management with quantity controls

### 🛒 E-Commerce Features
- Product grid layout with cards
- Shopping cart functionality with localStorage
- Add to cart with visual feedback
- Quantity controls (increase/decrease)
- Cart summary with subtotal, shipping, and tax calculation
- Remove items from cart
- Persistent cart (saves to browser localStorage)
- Product categories and filtering interface
- Product sorting options
- Newsletter subscription form

### 💻 Technical Features
- Pure HTML, CSS, and JavaScript (no dependencies)
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Local storage for cart persistence
- Smooth animations and transitions
- Accessible markup
- SEO-friendly structure

## File Structure

```
basic-ecommerce-theme/
├── index.html          # Home page
├── products.html       # Products listing page
├── cart.html          # Shopping cart page
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # Cart and interaction logic
├── images/            # Product images folder (empty - add your own)
├── assets/            # Additional assets folder (empty)
└── README.md          # This file
```

## Getting Started

### Installation
1. Clone or download this theme
2. Open `index.html` in your web browser
3. No build process or dependencies required!

### Viewing the Theme
Simply open any of the HTML files in a web browser:
- `index.html` - Home page
- `products.html` - Products page
- `cart.html` - Shopping cart

Or use a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors
The theme uses CSS variables for easy color customization. Edit these in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --secondary-color: #64748b;    /* Secondary elements */
    --text-color: #1e293b;         /* Main text */
    --text-light: #64748b;         /* Light text */
    --border-color: #e2e8f0;       /* Borders */
    --bg-light: #f8fafc;           /* Light backgrounds */
    --success-color: #10b981;      /* Success messages */
    --warning-color: #f59e0b;      /* Warnings */
    --danger-color: #ef4444;       /* Errors/danger */
}
```

### Adding Products
Edit the `products` object in `js/script.js`:

```javascript
const products = {
    1: { id: 1, name: 'Product Name', price: 99.99, image: '📦' },
    // Add more products...
};
```

### Adding Product Images
1. Place images in the `images/` folder
2. Replace the placeholder emoji in HTML with:
```html
<div class="product-image">
    <img src="images/your-product.jpg" alt="Product Name">
</div>
```

3. Update the CSS for proper image styling:
```css
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Branding
1. Change "ShopHub" to your store name in all HTML files
2. Update the logo in the header section
3. Modify footer content and links
4. Update meta tags for SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Shopping Cart
- Stores cart data in browser's localStorage
- Persists across page refreshes
- Auto-calculates totals, shipping, and tax
- Free shipping for orders over $100
- 8% tax rate (customizable)

### Responsive Design
- Desktop: Full-featured layout with sidebar filters
- Tablet: Adapted layout with stacked elements
- Mobile: Single-column layout with touch-friendly controls

### Notifications
- Visual feedback when adding items to cart
- Smooth slide-in animations
- Auto-dismiss after 3 seconds

## Future Enhancements

This theme can be extended with:
- Product detail pages
- User authentication
- Checkout process
- Payment gateway integration
- Product search functionality
- Product reviews and ratings
- Wishlist feature
- Order history
- Backend integration (Node.js, PHP, etc.)
- Database integration
- Real image gallery with zoom
- Product variants (size, color)
- Related products section

## License

This theme is free to use for personal and commercial projects. No attribution required.

## Support

For issues, questions, or contributions, please refer to the main repository documentation.

## Credits

Created as part of the themes repository collection. Each theme is designed to be a starting point for your web projects.

---

**Note**: This is a static theme demonstration. For a production e-commerce site, you'll need to integrate with a backend service, payment processor, and proper database.
