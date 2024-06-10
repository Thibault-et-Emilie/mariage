document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('open'); // Ajoute ou retire la classe "open" pour afficher ou masquer le menu
});

document.getElementById('guests').addEventListener('input', function() {
    const guestCount = parseInt(this.value);
    const guestNamesContainer = document.getElementById('guest-names');
    guestNamesContainer.innerHTML = ''; // Vide les champs précédents

    for (let i = 1; i < guestCount; i++) {
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
    let guestNames = [];

    for (let i = 1; i < guests; i++) {
        guestNames.push(document.getElementById('guest-name-' + i).value);
    }

    // Afficher le message de réponse
    document.getElementById('response').textContent = `Merci, ${name}! Nous avons bien reçu votre RSVP pour ${guests} invités.`;

    // Préparer les données pour l'email
    const formData = {
        name: name,
        email: email,
        guests: guests,
        guestNames: guestNames
    };

    // Envoyer un email avec les informations du formulaire
    sendEmail(formData);
});

function sendEmail(formData) {
    // Utiliser EmailJS pour envoyer un email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    .then(function(response) {
        console.log('Email envoyé avec succès!', response.status, response.text);
    }, function(error) {
        console.error('Échec de l\'envoi de l\'email:', error);
    });
}
