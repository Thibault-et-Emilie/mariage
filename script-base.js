document.addEventListener('DOMContentLoaded', function () {
    const guestTable = document.getElementById('guest-data');
    let formData = [] ;

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
    formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        for (let i=0 ; 10 ; i++)  {
        addGuestToTable(formData[i].name, formData[i].email, formData[i].participate, formData[i].dureesejour, formData[i].couchage);
        }
       

        // Supprimer les données du LocalStorage après les avoir utilisées
        localStorage.removeItem('formData');
    }
   
});
