// Sample products
const products = [
    { id: 1, name: 'Margherita', price: 9.99 },
    { id: 2, name: 'Pepperoni', price: 11.99 },
    { id: 3, name: 'BBQ Chicken', price: 13.99 },
    { id: 4, name: 'Carbonara', price: 10.99 },
    { id: 5, name: 'Alfredo', price: 12.99 },
    { id: 6, name: 'Arrabbiata', price: 11.99 },
    { id: 7, name: 'Cola', price: 1.99 },
    { id: 8, name: 'Lemonade', price: 2.49 },
    { id: 9, name: 'Bubble Tea', price: 3.99 },
    { id: 10, name: 'Burger', price: 8.99 },
    { id: 11, name: 'Hotdog', price: 12.99},
    { id: 12, name: 'Crispy Chicken', price: 9.49}
];

let cartItems = [];

// Function to display products
function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add items to cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cartItems.push({ ...product, quantity: 1 });
        displayCart();
    }
}

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.querySelector('#cart-items');
    cartItemsDiv.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        const totalPrice = item.price * item.quantity;
        total += totalPrice;

        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity} = $${totalPrice}</p>
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
}

// Function to update item quantity in cart
function updateQuantity(productId, quantity) {
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity = parseInt(quantity);
        displayCart();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    displayCart();
}

// Function to initiate checkout (can be updated as needed)
function checkout() {
    // Implement checkout logic here
    console.log('Initiating checkout:', cartItems);
}

// Display products when the page loads
displayProducts();
