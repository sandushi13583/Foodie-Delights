// Sample trendy fast food data
const trendyFoods = [
    { id: 1, name: 'Burger', category: 'Burgers', price: 8.99, ingredients: ['Beef Patty', 'Cheese', 'Lettuce', 'Tomato'] },
    { id: 2, name: 'Hotdog', category: 'Hotdog', price: 12.99, toppings: ['Pepperoni', 'Sausage', 'Peppers', 'Onions'] },
    { id: 3, name: 'Crispy Chicken', category: 'Crispy Chicken', price: 9.49, ingredients: ['Chicken wings', 'Tomato source'] },
  ];
  
  // Function to display trendy fast foods
  function displayTrendyFoods(foodArray) {
    const foodList = document.getElementById('fastFoodList');
    foodList.innerHTML = '';
  
    foodArray.forEach(food => {
      const foodItem = document.createElement('div');
      foodItem.classList.add('fastfood-item');
      foodItem.innerHTML = `
        <h2>${food.name}</h2>
        <p>Category: ${food.category}</p>
        <p>Price: $${food.price}</p>
        <button class="details-btn" data-id="${food.id}">Details</button>
      `;
      foodList.appendChild(foodItem);
    });
  
    // Add event listeners to the dynamically created buttons
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
      button.addEventListener('click', () => {
        const foodId = parseInt(button.getAttribute('data-id'));
        showDetails(foodId);
      });
    });
  }
  
  // Function to filter trendy fast foods by category
  function filterTrendyFoods(category) {
    if (category === 'all') {
      displayTrendyFoods(trendyFoods);
    } else {
      const filteredFoods = trendyFoods.filter(food => food.category === category);
      displayTrendyFoods(filteredFoods);
    }
  }
  
  // Function to show details of a trendy fast food item
  function showDetails(foodId) {
    const food = trendyFoods.find(food => food.id === foodId);
  
    const modal = document.getElementById('detailsModal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${food.name} Details</h2>
        <p>Category: ${food.category}</p>
        <p>Price: $${food.price}</p>
        ${food.ingredients ? `<p>Ingredients: ${food.ingredients.join(', ')}</p>` : ''}
        ${food.toppings ? `<p>Toppings: ${food.toppings.join(', ')}</p>` : ''}
        <button class="add-to-cart-btn" data-id="${food.id}">Add to Cart</button>
      </div>
    `;
    modal.style.display = 'block';
  
    // Add event listener to the "Add to Cart" button in the modal
    const addToCartButton = document.querySelector('.add-to-cart-btn');
    addToCartButton.addEventListener('click', () => {
      addToCart(food.id);
    });
  
    // Add event listener to close the modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      closeModal();
    });
  }
  
  // Function to close the details modal
  function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
  }
  
  // Function to add item to cart
  function addToCart(foodId) {
    window.location.href = 'shopping.html';
  }
  
  // Initial display of all trendy fast foods
  displayTrendyFoods(trendyFoods);
  
  // Event listener for category filter change
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', function() {
    filterTrendyFoods(this.value);
  });
  