document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.backgroundColor = "#1e3a8a"; // Bleu foncé
      card.style.transition = "background-color 0.3s ease"; // Animation fluide
    });
  
    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "black"; // Retour à la couleur d'origine
    });
  });
  