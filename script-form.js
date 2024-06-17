
    // Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxPNR1MY12kw9EdeEl3FEWk3iRKS0zvtc",
  authDomain: "mariage-emilie-thibault.firebaseapp.com",
  projectId: "mariage-emilie-thibault",
  storageBucket: "mariage-emilie-thibault.appspot.com",
  messagingSenderId: "645427117758",
  appId: "1:645427117758:web:01c156875092c98e1be8ef",
  measurementId: "G-V2TJ5TMFKE"
};
    // Initialiser Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore()


document.addEventListener('DOMContentLoaded', function() {
    const guestsInput = document.getElementById('guests');
    const guestNamesContainer = document.getElementById('guest-names');
    const participateRadios = document.querySelectorAll('input[name="participate"]');
    const stayOptions = document.getElementById('stay-options');
    const stayAnswer = document.querySelectorAll('input[name="stay-duration"]');
    const hebergement = document.getElementById('souhait-hebergement');
    let guestname;
    let email;
    let participate;
    let dureesejour;
    let couchage;
    let formData = [];

        guestsInput.addEventListener('input', function() {
            // Vider le conteneur des prénoms des invités
            guestNamesContainer.innerHTML = '';
            const numGuests = parseInt(guestsInput.value);

            // Ajouter des champs de prénom en fonction du nombre d'invités
            for (let i = 1; i < numGuests; i++) {
                const label = document.createElement('label');
                label.setAttribute('for', `guest-name-${i}`);
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
    


 // Gérer l'affichage des options de durée de séjour
    participateRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (document.getElementById('participate-yes').checked) {
                stayOptions.style.display = 'block';
            } else {
                stayOptions.style.display = 'none';
                hebergement.style.display = 'none';
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

    function getRadioValue(name) {
        const radios = document.getElementsByName(name);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return null;
    }
     document.getElementById('envoyer').addEventListener('click', function() {
        
        const nombreinviteplus = document.getElementById('guests').value;
        formData = []; // Réinitialiser le tableau formData
        for (let i =0; i < nombreinviteplus; i++) {

            if (i === 0) {
                guestname = document.getElementById('name').value;
            } else {
                guestname = document.getElementById(`guest-name-${i}`).value;
            }
            email = document.getElementById('email').value;
            participate = getRadioValue('participate');
            dureesejour = getRadioValue('stay-duration');
            couchage = getRadioValue('hebergement');

            //formData.push({ guestname, email, participate, dureesejour, couchage });
            
        }
         
                 //localStorage.setItem('formData', JSON.stringify(formData));
        // formData.forEach(data => {
                    db.collection("formData").add({
                        name: guestname,
                        email: email,
                        presence: participate,
                        duree: dureesejour,
                        couchage: couchage
                    })
                        .then((docRef) => {
                           alert("Données envoyées!");
                        })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
     //});
        

        // Réinitialiser le formulaire
        //this.reset();
        //guestNamesContainer.innerHTML = ''; // Réinitialiser les champs de prénoms supplémentaires

         document.getElementById('response').innerText = 'Merci pour votre réponse!';
    
    });
});
