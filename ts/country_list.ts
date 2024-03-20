// Interfaccia per la risposta del server
interface ServerResponse {
    nations_list: string[]
}

// Funzione per ottenere la lista dei paesi dal server
async function fetchCountriesList(): Promise<string[]> {
    const response = await fetch('https://www.alessandromalvatani.it/CODEx/public/api/nations-list')
    const data: ServerResponse = await response.json()
    return data.nations_list
}

// Funzione per popolare il menu a tendina dei paesi
async function populateCountriesDropdown() {
    const countriesDropdown = document.getElementById('inputCountry') as HTMLSelectElement

    try {
        const countries = await fetchCountriesList()
        countries.forEach(country => {
            const option = document.createElement('option')
            option.value = country
            option.text = country
            countriesDropdown.appendChild(option)
        })
    } catch (error) {
        console.error('Error: ', error)
    }
}

// Chiamata alla funzione per popolare il menu a tendina dei paesi al caricamento della pagina
window.onload = () => {
    populateCountriesDropdown()
};