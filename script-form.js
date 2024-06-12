document.addEventListener('DOMContentLoaded', function() {
    const guestsInput = document.getElementById('guests');
    const guestNamesContainer = document.getElementById('guest-names');
    const participateRadios = document.querySelectorAll('input[name="participate"]');
    const stayOptions = document.getElementById('stay-options');
    const stayAnswer = document.querySelectorAll('input[name="stay-duration"]');
    const hebergement = document.getElementById('souhait-hebergement');

        guestsInput.addEventListener('input', function() {
            // Vider le conteneur des prénoms des invités
            guestNamesContainer.innerHTML = '';
            const numGuests = parseInt(guestsInput.value);

            // Ajouter des champs de prénom en fonction du nombre d'invités
            for (let i = 1; i < numGuests; i++) {
                const label = document.createElement('label');
                label.setAttribute('for', `guest-name-${i+1}`);
                label.textContent = `Prénom et nom de l'invité ${i+1}:`;

                const input = document.createElement('input');
                input.type = 'text';
                input.id = `guest-name-${i}`;
                input.name = `guest-names[]`;
                input.required = true;

                guestNamesContainer.appendChild(label);
                guestNamesContainer.appendChild(input);
            }
        });
    
    document.getElementById('envoyer').addEventListener('click', function() {
        document.getElementById('response').innerText = 'Merci pour votre réponse!';
    });


 // Gérer l'affichage des options de durée de séjour
    participateRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (document.getElementById('participate-yes').checked) {
                stayOptions.style.display = 'block';
            } else {
                stayOptions.style.display = 'none';
            }
        });
    });


    // Gérer l'affichage des options d'hébergement
    stayAnswer.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (document.getElementById('stay-1').checked) {
                hebergement.style.display = 'none';
            } else {
                hebergement.style.display = 'block';
            }
        });
    });
    
});
