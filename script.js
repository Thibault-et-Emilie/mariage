document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('open');
    });

    // Ajouter un événement de clic aux liens du menu pour fermer le menu après la sélection d'un élément
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navUl.classList.remove('open');
        });
    });
