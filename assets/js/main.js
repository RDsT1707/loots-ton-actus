// Fonction pour gérer les interactions avec les cartes
function setupCardInteractions() {
  // Sélectionne tous les éléments avec la classe .col1
  const cards = document.querySelectorAll('.col1');

  cards.forEach(card => {
      // Gestion du survol
      card.addEventListener('mouseenter', () => {
          card.classList.add('hover');
      });

      // Gestion de la sortie de la souris
      card.addEventListener('mouseleave', () => {
          card.classList.remove('hover');
      });

      // Gestion du clic pour l'effet d'ombre
      card.addEventListener('click', () => {
          card.classList.toggle('shadow');
      });
  });
}

// Initialise les interactions des cartes une fois le DOM chargé
document.addEventListener('DOMContentLoaded', setupCardInteractions);

// Fonction pour configurer la suppression des cartes au double-clic
function setupCardRemoval() {
  // Sélectionne tous les éléments avec la classe .col1
  const cards = document.querySelectorAll('.col1');

  cards.forEach(card => {
      // Ajoute un écouteur d'événement pour le double-clic
      card.addEventListener('dblclick', () => {
          // Supprime la carte du DOM
          card.remove();
      });
  });
}

// Initialise la suppression des cartes une fois le DOM chargé
document.addEventListener('DOMContentLoaded', setupCardRemoval);


function setupNewsletterInteraction() {
  // Créer les éléments de newsletter
  const newsletterContainer = document.createElement('div');
  newsletterContainer.classList.add('newsletter-container', 'text-center', 'my-3');
  
  newsletterContainer.innerHTML = `
      <div class="d-flex justify-content-center align-items-center">
          <input 
              type="email" 
              id="newsletter-email" 
              placeholder="Entrez votre email" 
              class="form-control me-2" 
              style="max-width: 300px;"
          >
          <button 
              id="newsletter-btn" 
              class="btn btn-outline-light"
          >
              S'abonner
          </button>
      </div>
      <div 
          id="newsletter-message" 
          class="mt-2 text-center" 
          style="display: none; color: white;"
      ></div>
  `;

  // Trouver l'élément footer et insérer la newsletter avant le dernier div
  const footer = document.querySelector('footer');
  const copyrightSection = footer.querySelector('.text-center.p-3');
  footer.insertBefore(newsletterContainer, copyrightSection);

  // Sélection des éléments
  const emailInput = document.getElementById('newsletter-email');
  const newsletterBtn = document.getElementById('newsletter-btn');
  const newsletterMessage = document.getElementById('newsletter-message');

  // Fonction pour valider l'email
  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
  }

  // Gestionnaire de clic pour le bouton newsletter
  newsletterBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();

      // Vérification de l'email
      if (email === '') {
          newsletterMessage.textContent = 'Veuillez entrer une adresse email.';
          newsletterMessage.style.color = 'orange';
      } else if (!validateEmail(email)) {
          newsletterMessage.textContent = 'Veuillez entrer une adresse email valide.';
          newsletterMessage.style.color = 'red';
      } else {
          newsletterMessage.textContent = 'Merci pour votre inscription à la newsletter !';
          newsletterMessage.style.color = 'green';
          
          // Réinitialisation du champ email après inscription
          emailInput.value = '';
      }

      // Afficher le message
      newsletterMessage.style.display = 'block';

      // Masquer le message après 3 secondes
      setTimeout(() => {
          newsletterMessage.style.display = 'none';
      }, 3000);
  });
}

// Initialiser l'interaction newsletter une fois le DOM chargé
document.addEventListener('DOMContentLoaded', setupNewsletterInteraction);