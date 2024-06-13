document.addEventListener('DOMContentLoaded', function () {
    const guestTable = document.getElementById('guest-data');

    // Fonction pour ajouter une ligne au tableau
    function addGuestToTable(guestname, email, participate, dureesejour, couchage) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${guestname}</td>
            <td>${email}</td>
            <td>${participate}</td>
            <td>${dureesejour}</td>
            <td>${couchage}</td>
            <!-- Ajoutez d'autres cellules de données au besoin -->
        `;
        guestTable.appendChild(row);
    }

   // Récupérer les données du LocalStorage
    let storedformData = JSON.parse(localStorage.getItem('formData'));
    console.log(storedFormData);
   if (storedFormData && storedFormData.length > 0) {
    for (let i = 0; i < 10; i++) {
        addGuestToTable(
            storedFormData[i].guestname,
            storedFormData[i].email,
            storedFormData[i].participate,
            storedFormData[i].dureesejour,
            storedFormData[i].couchage
        );
    }

       

        // Supprimer les données du LocalStorage après les avoir utilisées
        localStorage.removeItem('formData');
    }
   
});
