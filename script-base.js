document.addEventListener('DOMContentLoaded', function () {
    const guestTable = document.getElementById('guest-data');

    // Fonction pour ajouter une ligne au tableau
    function addGuestToTable(name, email, numGuests) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${numGuests}</td>
            <!-- Ajoutez d'autres cellules de données au besoin -->
        `;
        guestTable.appendChild(row);
    }

    // Écouteur d'événements pour la soumission du formulaire
    document.getElementById('rsvp-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const numGuests = document.getElementById('guests').value;

        // Ajouter les données au tableau
        addGuestToTable(name, email, numGuests);

        // Réinitialiser le formulaire si nécessaire
        this.reset();
    });
});
