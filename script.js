document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    
    document.getElementById('response').textContent = `Merci, ${name}! Nous avons bien reçu votre RSVP pour ${guests} invités.`;
    
    // Vous pouvez ajouter ici du code pour envoyer les informations à un serveur ou une base de données.
});
