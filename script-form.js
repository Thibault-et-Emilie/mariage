
const firebaseConfig = {
  apiKey: "AIzaSyBxPNR1MY12kw9EdeEl3FEWk3iRKS0zvtc",
  authDomain: "mariage-emilie-thibault.firebaseapp.com",
  projectId: "mariage-emilie-thibault",
  storageBucket: "mariage-emilie-thibault.appspot.com",
  messagingSenderId: "645427117758",
  appId: "1:645427117758:web:01c156875092c98e1be8ef",
  measurementId: "G-V2TJ5TMFKE"
};

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore()


document.addEventListener('DOMContentLoaded', function() {
    const guestsInput = document.getElementById('guests');
    const guestNamesContainer = document.getElementById('guest-names');
    const participateRadios = document.querySelectorAll('input[name="participate"]');
    const stayOptions = document.getElementById('stay-options');
    const stayAnswer = document.querySelectorAll('input[name="stay-duration"]');
    const hebergement = document.getElementById('souhait-hebergement');
    const reponsehebergement = document.querySelectorAll('input[name="hebergement"]');
    const prereponse = document.getElementById('pre-reponse');
    

        guestsInput.addEventListener('input', function() {
            // Vider le conteneur des prénoms des invités
            guestNamesContainer.innerHTML = '';
            const numGuests = parseInt(guestsInput.value);

            // Ajouter champs prénom en fonction du nombre d'invités en plus
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
    


 // si changement de bouton radio sur particpation, alors on affiche la suite ou pas
    participateRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (document.getElementById('participate-yes').checked) {
                stayOptions.style.display = 'block';
            } else {
                stayOptions.style.display = 'none';
                hebergement.style.display = 'none';
                prereponse.style.display = 'none';
            }
        });
    });


    // si changement de bouton radio sur combien de temps on reste, alors on affiche la suite ou pas
    stayAnswer.forEach(function (radio) {
        radio.addEventListener('change', function () {
                if (document.getElementById('stay-1').checked) {
                    hebergement.style.display = 'none';
                    prereponse.style.display = 'none';
                } else {
                    hebergement.style.display = 'block';
                }
        });
    });

    // si changement de bouton radio sur je veux logement, alors on affiche la petite phrase
    reponsehebergement.forEach(function (radio) {
        radio.addEventListener('change', function() {
            if (document.getElementById('hebergement-oui').checked) {
                prereponse.style.display = 'block';
            } else {
                prereponse.style.display = 'none';
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
     document.getElementById('rsvp-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let guestname;
        let email;
        let participate;
        let dureesejour;
        let couchage;
        let formData = [];

         //on boucle sur le nombre d'invités renseignés pour remplir un tableau [] qui prends a la premiere itération le nom de l'invité principal puis le nom des autres
        const nombreinviteplus = document.getElementById('guests').value;
        formData = []; 
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

            formData.push({ guestname, email, participate, dureesejour, couchage });
            
        }
         
        formData.forEach(data => {
                db.collection("formData").add(data)
                        .then((docRef) => {
                            document.getElementById('response').innerText = 'Merci pour votre réponse!';
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch((error) => {
                        console.error("Error adding document: ", error);
                        });
        });
        

         document.getElementById('response').innerText = 'Merci pour votre réponse!';

       setTimeout(() => {
            document.getElementById('rsvp-form').reset();
            document.getElementById('response').innerText = '';
        }, 2000);
    
    });
});
