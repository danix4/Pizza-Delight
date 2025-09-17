let cart = [];

function addToCart(pizza, price) {
    cart.push({ pizza, price });
    alert(`${pizza} added to cart!`);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');

    if (!cartItems) return;

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.pizza} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalEl.textContent = `Total: $${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    alert("Thank you for your order!");
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;
