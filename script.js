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
});

