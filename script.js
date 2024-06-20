document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('open'); // Ajoute ou retire la classe "open" pour afficher ou masquer le menu
});
// chaque bouton du menu, si on clique dessus on enleve la classe"open"du menu
const menuLinks = document.querySelectorAll('#main-nav ul li a');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('main-nav').classList.remove('open');
    });
})

//on calcule la largeur du rectangle qui se définit en fonction de l'écran, puis on utilise cette valeur pour faire un demi cercle parfait
 function setMilestoneRadius() {
            const milestone = document.querySelector('.milestone');
            const width = milestone.offsetWidth;
            const borderRadius = width / 2 + 'px';
            milestone.style.borderTopLeftRadius = borderRadius;
            milestone.style.borderTopRightRadius = borderRadius;
        }

        // Appliquer au chargement et au redimensionnement de la fenêtre
        window.addEventListener('load', setMilestoneRadius);
        window.addEventListener('resize', setMilestoneRadius);
