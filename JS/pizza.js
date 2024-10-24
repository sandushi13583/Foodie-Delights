// pizza.js

// Sample pizza data
const pizzas = [
  { id: 1, name: 'Margherita', category: 'vegetarian', price: 9.99, toppings: ['Cheese', 'Tomato', 'Basil'] },
  { id: 2, name: 'Pepperoni', category: 'meat', price: 11.99, toppings: ['Cheese', 'Pepperoni'] },
  { id: 3, name: 'BBQ Chicken', category: 'BBQ', price: 13.99, toppings: ['Cheese', 'red onion','BBQ sauce'] },
];

// Function to display pizzas
function displayPizzas(pizzaArray) {
  const pizzaList = document.getElementById('pizzaList');
  pizzaList.innerHTML = '';

  pizzaArray.forEach(pizza => {
    const pizzaItem = document.createElement('div');
    pizzaItem.classList.add('pizza-item');
    pizzaItem.innerHTML = `
      <h2>${pizza.name}</h2>
      <p>Category: ${pizza.category}</p>
      <p>Price: $${pizza.price}</p>
      <button onclick="showDetails(${pizza.id})">Details</button>
    `;
    pizzaList.appendChild(pizzaItem);
  });
}

// Function to filter pizzas by category
function filterPizzas(category) {
  if (category === 'all') {
    displayPizzas(pizzas);
  } else {
    const filteredPizzas = pizzas.filter(pizza => pizza.category === category);
    displayPizzas(filteredPizzas);
  }
}

// Function to show details of a pizza
function showDetails(pizzaId) {
  const pizza = pizzas.find(pizza => pizza.id === pizzaId);

  const modal = document.getElementById('detailsModal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${pizza.name} Details</h2>
      <p>Category: ${pizza.category}</p>
      <p>Price: $${pizza.price}</p>
      <p>Toppings: ${pizza.toppings.join(', ')}</p>
      <button onclick="addToCart(${pizza.id})"><a href="shopping.html">Add to Cart</a></button>
    </div>
  `;
  modal.style.display = 'block';
}

// Function to close the details modal
function closeModal() {
  const modal = document.getElementById('detailsModal');
  modal.style.display = 'none';
}


// Initial display of all pizzas
displayPizzas(pizzas);

// Event listener for category filter change
const categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', function() {
  filterPizzas(this.value);
});
