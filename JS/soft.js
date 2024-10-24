// Sample soft drinks data
const softDrinks = [
    { id: 1, name: 'Cola', category: 'Cola', price: 1.99, description: 'Classic cola drink' },
    { id: 2, name: 'Lemonade', category: 'Lemonade', price: 2.49, description: 'Refreshing lemon-flavored drink' },
    { id: 3, name: 'Bubble Tea', category: 'Bubble Tea', price: 2.99, description: 'Sweet Bubble' },
  ];
  
  // Function to display soft drinks
  function displaySoftDrinks(drinksArray) {
    const drinksList = document.getElementById('drinksList');
    drinksList.innerHTML = '';
  
    drinksArray.forEach(drink => {
      const drinkItem = document.createElement('div');
      drinkItem.classList.add('drink-item');
      drinkItem.innerHTML = `
        <h2>${drink.name}</h2>
        <p>Category: ${drink.category}</p>
        <p>Price: $${drink.price}</p>
        <button onclick="showDrinkDetails(${drink.id})">Details</button>
      `;
      drinksList.appendChild(drinkItem);
    });
  }
  
  // Function to filter drinks by category
  function filterDrinks(category) {
    if (category === 'all') {
      displaySoftDrinks(softDrinks);
    } else {
      const filteredDrinks = softDrinks.filter(drink => drink.category === category);
      displaySoftDrinks(filteredDrinks);
    }
  }
  
  // Function to show details of a soft drink
  function showDrinkDetails(drinkId) {
    const drink = softDrinks.find(drink => drink.id === drinkId);
  
    const modal = document.getElementById('detailsModal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${drink.name} Details</h2>
        <p>Category: ${drink.category}</p>
        <p>Price: $${drink.price}</p>
        <p>Description: ${drink.description}</p>
        <button onclick="addToCart(${drink.id})"><a href="shopping.html">Add to Cart</a></button>
      </div>
    `;
    modal.style.display = 'block';
  }
  
  // Function to close the details modal
  function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
  }
  
  // Initial display of all soft drinks
  displaySoftDrinks(softDrinks);
  
  // Event listener for category filter change
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', function() {
    filterDrinks(this.value);
  });
  