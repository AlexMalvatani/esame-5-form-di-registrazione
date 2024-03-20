// Interfaccia per la risposta del server
interface CityServerResponse {
    cities_list: string[]
}

// Funzione per ottenere la lista delle città italiane dal server
async function fetchItalianCitiesList(): Promise<string[]> {
    const response = await fetch('https://www.alessandromalvatani.it/CODEx/public/api/cities-list')
    const data: CityServerResponse = await response.json()
    return data.cities_list
}

// Funzione per popolare il menu a tendina delle città italiane
async function populateItalianCitiesDropdown() {
    const italianCitiesDropdown = document.getElementById('italianCities') as HTMLSelectElement

    try {
        const cities = await fetchItalianCitiesList()
        const uniqueCities = Array.from(new Set(cities)) // Filtra i duplicati utilizzando un set
        italianCitiesDropdown.innerHTML = "" // Pulisci il dropdown prima di popolare
        uniqueCities.forEach(city => {
            const option = document.createElement('option')
            option.value = city
            option.text = city
            italianCitiesDropdown.appendChild(option)
        })
    } catch (error) {
        console.error('Error: ', error)
    }
}

// Gestisci il cambio nella selezione del paese
const countrySelect: HTMLSelectElement | null = document.getElementById("inputCountry") as HTMLSelectElement

if (countrySelect) {
    countrySelect.addEventListener("change", async () => {
        const selectedCountry: string = countrySelect.value
        const italianCitiesDropdown = document.getElementById('italianCities') as HTMLSelectElement
        const cityInput = document.getElementById('inputCity') as HTMLInputElement

        if (selectedCountry === "Italia" && italianCitiesDropdown && cityInput) {
            await populateItalianCitiesDropdown() // Popola le città italiane solo se il paese selezionato è Italia
            italianCitiesDropdown.style.display = "block" // Mostra il dropdown delle città italiane
            italianCitiesDropdown.setAttribute("required", "") // Aggiungi validazione campo
            cityInput.style.display = "none" // Nascondi l'input della città generale
            cityInput.removeAttribute("required") // Togli validazione campo
        } else if (italianCitiesDropdown && cityInput) {
            italianCitiesDropdown.style.display = "none" // Nascondi il dropdown delle città italiane
            italianCitiesDropdown.removeAttribute("required")
            cityInput.style.display = "block" // Mostra l'input della città generale
            cityInput.setAttribute("required", "")
        }
    })
}