// Sample pasta data
const pastas = [
    { id: 1, name: 'Carbonara', category: 'Carbonara', price: 10.99, toppings: ['Spaghetti', 'Egg', 'Pancetta', 'Parmesan'] },
    { id: 2, name: 'Alfredo', category: 'Alfredo', price: 12.99, toppings: ['Fettuccine', 'Cream', 'Butter', 'Parmesan'] },
    { id: 3, name: 'Arrabbiata', category: 'Arrabbiata', price: 11.49, toppings: ['Penne', 'Tomato Sauce', 'Garlic', 'Chili'] },
  ];
  
  // Function to display pastas
  function displayPastas(pastaArray) {
    const pastaList = document.getElementById('pastaList');
    pastaList.innerHTML = '';
  
    pastaArray.forEach(pasta => {
      const pastaItem = document.createElement('div');
      pastaItem.classList.add('pasta-item');
      pastaItem.innerHTML = `
        <h2>${pasta.name}</h2>
        <p>Category: ${pasta.category}</p>
        <p>Price: $${pasta.price}</p>
        <button onclick="showPastaDetails(${pasta.id})">Details</button>
      `;
      pastaList.appendChild(pastaItem);
    });
  }
  
  // Function to filter pastas by category
  function filterPastas(category) {
    if (category === 'all') {
      displayPastas(pastas);
    } else {
      const filteredPastas = pastas.filter(pasta => pasta.category === category);
      displayPastas(filteredPastas);
    }
  }
  
  // Function to show details of a pasta
  function showPastaDetails(pastaId) {
    const pasta = pastas.find(pasta => pasta.id === pastaId);
  
    const modal = document.getElementById('detailsModal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${pasta.name} Details</h2>
        <p>Category: ${pasta.category}</p>
        <p>Price: $${pasta.price}</p>
        <p>Toppings: ${pasta.toppings.join(', ')}</p>
        <button onclick="addToCart(${pasta.id})"><a href="shopping.html">Add to Cart</a></button>
      </div>
    `;
    modal.style.display = 'block';
  }
  
  // Function to close the details modal
  function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
  }
  
  // Initial display of all pastas
  displayPastas(pastas);
  
  // Event listener for category filter change
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', function() {
    filterPastas(this.value);
  });
  