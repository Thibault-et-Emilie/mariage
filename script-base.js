document.addEventListener('DOMContentLoaded', function () {
    const guestTable = document.getElementById('guest-data');

    // Fonction pour ajouter une ligne au tableau
    function addGuestToTable(name, email, participate, dureesejour, chambre) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${participate}</td>
            <td>${dureesejour}</td>
            <td>${chambre}</td>
            <!-- Ajoutez d'autres cellules de données au besoin -->
        `;
        guestTable.appendChild(row);
    }

   // Récupérer les données du LocalStorage
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        // Ajouter l'invité principal au tableau
        addGuestToTable(formData.name, formData.email, formData.name, formData.participate);

       

        // Supprimer les données du LocalStorage après les avoir utilisées
        localStorage.removeItem('formData');
    }
   
});
