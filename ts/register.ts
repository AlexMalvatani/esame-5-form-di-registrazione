// Interfaccia che definisce la struttura dei dati utente da inviare
interface UserData {
    name: string
    email: string
    password: string
    avatar?: string
    bio?: string
    date_of_birth: string
    country: string
    city: string
    address: string
    CF: string
    first_name: string
    last_name: string
    vat_number?: string
}

// Interfaccia per le risposte del server
interface ServerResponse {
    message: string
}

// Ottengo i riferimenti agli elementi del modulo HTML e faccio il cast di ogni elemento
// utile ad evitare errori di tipo durante l'invio dei dati al server, per esempio
// getElementById("italianCities") as HTMLSelectElement da elemento html generico
// sarà convertito in un elemento <select> con la classe HTMLSelectElement
const firstNameInput = document.getElementById("inputFirstName") as HTMLInputElement
const lastNameInput = document.getElementById("inputLastName") as HTMLInputElement
const usernameInput = document.getElementById("inputUsername") as HTMLInputElement
const emailInput = document.getElementById("inputEmail") as HTMLInputElement
const passwordInput = document.getElementById("inputPassword") as HTMLInputElement
const dateOfBirthInput = document.getElementById("inputDateOfBirth") as HTMLInputElement
const countryInput = document.getElementById("inputCountry") as HTMLInputElement
const cityInput = document.getElementById("inputCity") as HTMLInputElement
const addressInput = document.getElementById("inputAddress") as HTMLInputElement
const cfInput = document.getElementById("inputCF") as HTMLInputElement
const vatNumberInput = document.getElementById("inputVatNumber") as HTMLInputElement
const registrationForm = document.getElementById("registrationForm") as HTMLFormElement
const italianCitiesSelect = document.getElementById("italianCities") as HTMLSelectElement

// Gestore per l'evento di invio del form
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault()

    let selectedCity: string

    if (cityInput.style.display !== "none") {
        selectedCity = cityInput.value
    } else {
        selectedCity = italianCitiesSelect.value
    }

    // Ottengo i valori inseriti dall'utente negli input del form e creo un'istanza di oggetto UserData
    const userData: UserData = {
        name: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        date_of_birth: dateOfBirthInput.value,
        country: countryInput.value,
        city: selectedCity,
        address: addressInput.value,
        CF: cfInput.value,
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        vat_number: vatNumberInput.value
    }



    // Effettuo una richiesta POST al server inviando i dati utente per la registrazione
    fetch('https://www.alessandromalvatani.it/CODEx/public/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(async response => {

            if (!response.ok) { // Controllo la risposta HTTP (se lo status è compreso tra 200 e 299 ritorna true quindi è ok, altrimenti restituisce false)
                // Gestione  dell'errore e restituzione della promise come JSON
                const errorResponse = await response.json()

                // Se l'oggetto JSON contiene un campo "error" viene utilizzato come messaggio
                // altrimenti viene utilizzato un messaggio di errore predefinito
                throw new Error(errorResponse.error || 'Please fill all the required fileds.')
            }
            // Se la risposta è ok, analizza il corpo della risposta e restituisci una promise in JSON
            // e specifica il tipo di oggetto che sarà restituito dalla promise tipizzando Promise<ServerResponse>
            return response.json() as Promise<ServerResponse>
        })
        .then(data => {
            // Se questa condizione è vera allora l'invio è andato a buon fine
            if (data.message === 'User successfully registered!') {

                const colorClass = 'text-success'

                showMessageModal('Success', data.message, colorClass)
            } else { // Se è falsa -> messaggio di errore

                const colorClass = 'text-danger'

                showMessageModal('Error', data.message, colorClass)
            }
        })
        .catch(error => {
            // Se c'è un errore nella richiesta o nel parsing del corpo della risposta JSON
            const colorClass = 'text-danger'
            showMessageModal('Error', error.message, colorClass)
        })
})

// Funzione per mostrare la modal con messaggio
declare const bootstrap: any

function showMessageModal(title: string, message: string, colorClass: string) {
    const modalTitle = document.getElementById('messageModalLabel')
    const modalBody = document.getElementById('messageText')
    const messageModal = new bootstrap.Modal(document.getElementById('messageModal'))

    modalTitle.classList.remove('text-success', 'text-danger')
    
    modalTitle.textContent = title
    modalTitle.classList.add(colorClass)
    modalBody.textContent = message
    messageModal.show()
}