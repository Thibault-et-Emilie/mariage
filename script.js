document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('open'); // Ajoute ou retire la classe "open" pour afficher ou masquer le menu
});
// Sélectionne tous les éléments de lien dans le menu de navigation
const menuLinks = document.querySelectorAll('#main-nav ul li a');

// Boucle à travers chaque lien du menu
menuLinks.forEach(function(link) {
    // Ajoute un événement de clic à chaque lien
    link.addEventListener('click', function() {
        // Retire la classe 'open' du menu de navigation lorsque tu cliques sur un lien
        document.getElementById('main-nav').classList.remove('open');
    });
})

/* Lightbox styles */
#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    z-index: 1000;
}

#lightbox.active {
    display: flex;
}

#lightbox img {
    max-width: 90%;
    max-height: 80%;
}
