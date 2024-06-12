document.addEventListener('DOMContentLoaded', function () {
    const guestTable = document.getElementById('guest-data');

    // Fonction pour ajouter une ligne au tableau
    function addGuestToTable(name, email, participate, dureesejour, couchage) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${participate}</td>
            <td>${dureesejour}</td>
            <td>${couchage}</td>
            <!-- Ajoutez d'autres cellules de données au besoin -->
        `;
        guestTable.appendChild(row);
    }

   // Récupérer les données du LocalStorage
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        // Ajouter l'invité principal au tableau
        addGuestToTable(formData.name, formData.email, formData.participate, formData.dureesejour, formData.couchage);

       

        // Supprimer les données du LocalStorage après les avoir utilisées
        localStorage.removeItem('formData');
    }
   
});
