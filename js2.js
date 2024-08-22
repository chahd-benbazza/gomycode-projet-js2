// Mettre à jour le prix total
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseInt(item.getAttribute('data-price'));
      const quantity = parseInt(item.querySelector('.quantity').innerText);
      total += price * quantity;
    });
    document.getElementById('total').innerText = total + ' €';
  }
  
  // Fonctionnalité du bouton "Aimer"
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('liked');
    });
  });
  
  // Fonctionnalité pour augmenter la quantité
  document.querySelectorAll('.increase-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const quantityElem = this.parentElement.querySelector('.quantity');
      quantityElem.innerText = parseInt(quantityElem.innerText) + 1;
      updateTotal();
    });
  });
  
  // Fonctionnalité pour diminuer la quantité
  document.querySelectorAll('.decrease-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const quantityElem = this.parentElement.querySelector('.quantity');
      const currentQuantity = parseInt(quantityElem.innerText);
      if (currentQuantity > 1) {
        quantityElem.innerText = currentQuantity - 1;
        updateTotal();
      }
    });
  });
  
  // Fonctionnalité pour supprimer un article
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.parentElement.remove();
      updateTotal();
    });
  });
  
  // Calculer le prix total initial
  updateTotal();