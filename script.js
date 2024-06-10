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

// Gestion du formulaire
    const guestsInput = document.getElementById('guests');
    guestsInput.addEventListener('change', function() {
    const numguests = parseInt(guestsInput.value);
    const guestNamesContainer = document.getElementById('guest-names');
    guestNamesContainer.innerHTML = ''; // Vide les champs précédents



    for (let i = 1; i < numguests; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', 'guest-name-' + i);
        label.textContent = 'Prénom de l\'invité ' + i + ':';

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'guest-name-' + i;
        input.name = 'guest-name-' + i;
        input.required = true;

        guestNamesContainer.appendChild(label);
        guestNamesContainer.appendChild(input);
    }
});

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const participate = document.querySelector('input[name="participate"]:checked').value;

    const guestNames = [];
    document.querySelectorAll('input[name="guest-names[]"]').forEach(function(input) {
        guestNames.push(input.value);
    });

    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Nombre d\'invités:', guests);
    console.log('Participation:', participate);
    console.log('Prénoms des invités:', guestNames.join(', '));

    document.getElementById('response').innerText = 'Merci pour votre réponse!';
});
