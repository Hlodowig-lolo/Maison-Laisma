/**
* Gère le changement d'image dans les carrousels de produits
* @param {HTMLElement} btn - Le bouton cliqué (précédent ou suivant)
* @param {number} direction - La direction du mouvement (-1 pour précédent, 1 pour suivant)
*/
function moveSlide(btn, direction) {
    const container = btn.parentElement;
    const slides = container.querySelectorAll('.carousel-slide');
    const indicators = container.querySelectorAll('.indicator');
    let currentIndex = parseInt(container.getAttribute('data-current-slide'));

    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
    container.setAttribute('data-current-slide', currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Maison Laïsma - Site prêt.");
});

/**
* Ouvre la modale et y affiche l'image cliquée
* @param {HTMLImageElement} imgElement - L'image sur laquelle l'utilisateur a cliqué
*/
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img-in-modal");
  
    modalImg.src = imgElement.src;
    modal.style.display = "block";
}

/**
* Ferme la modale
*/
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Fermer la modale si on clique à côté de l'image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}