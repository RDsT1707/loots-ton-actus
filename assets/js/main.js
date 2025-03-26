let cards = document.querySelectorAll('.card')
console.log(cards)

cards.forEach(element => {
  let x = element.querySelector('.card-body') // Je recupère les body de chaque cards
  console.log(x)
  element.addEventListener("mouseover", ()=>{
    x.style.backgroundColor = "red" ;
  } )
  element.addEventListener("mouseout", ()=>{
    x.style.backgroundColor = "" ;
  } )
  element.addEventListener("click", ()=>{
    element.style.boxShadow = "0 0 25px #999299"
  })
  element.addEventListener("dblclick", () => {
    element.remove();
});
  });



// function setupNewsletterInteraction() {
//   const newsletterContainer = document.createElement('div');
//   newsletterContainer.classList.add('newsletter-container', 'text-center', 'my-3');
  
//   newsletterContainer.innerHTML = `
//       <div class="d-flex justify-content-center align-items-center">
//           <input 
//               type="email" 
//               id="newsletter-email" 
//               placeholder="Entrez votre email" 
//               class="form-control me-2" 
//               style="max-width: 300px;"
//           >
//           <button 
//               id="newsletter-btn" 
//               class="btn btn-outline-light"
//           >
//               S'abonner
//           </button>
//       </div>
//       <div 
//           id="newsletter-message" 
//           class="mt-2 text-center" 
//           style="display: none; color: white;"
//       ></div>
//   `;

//   const footer = document.querySelector('footer');
//   const copyrightSection = footer.querySelector('.text-center.p-3');
//   footer.insertBefore(newsletterContainer, copyrightSection);

//   const emailInput = document.getElementById('newsletter-email');
//   const newsletterBtn = document.getElementById('newsletter-btn');
//   const newsletterMessage = document.getElementById('newsletter-message');

//   function validateEmail(email) {
//       const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       return re.test(String(email).toLowerCase());
//   }

//   newsletterBtn.addEventListener('click', () => {
//       const email = emailInput.value.trim();

//       if (email === '') {
//           newsletterMessage.textContent = 'Veuillez entrer une adresse email.';
//           newsletterMessage.style.color = 'orange';
//       } else if (!validateEmail(email)) {
//           newsletterMessage.textContent = 'Veuillez entrer une adresse email valide.';
//           newsletterMessage.style.color = 'red';
//       } else {
//           newsletterMessage.textContent = 'Merci pour votre inscription à la newsletter !';
//           newsletterMessage.style.color = 'green';
          
//           emailInput.value = '';
//       }

//       newsletterMessage.style.display = 'block';

//       setTimeout(() => {
//           newsletterMessage.style.display = 'none';
//       }, 3000);
//   });
// }

let bouton= document.querySelector('.formbutton')
 bouton.addEventListener("click", ()=>{
  alert("Hello Rayan")
 })

document.addEventListener('DOMContentLoaded', setupNewsletterInteraction);