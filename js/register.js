var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Ottengo i riferimenti agli elementi del modulo HTML
var firstNameInput = document.getElementById("inputFirstName");
var lastNameInput = document.getElementById("inputLastName");
var usernameInput = document.getElementById("inputUsername");
var emailInput = document.getElementById("inputEmail");
var passwordInput = document.getElementById("inputPassword");
var dateOfBirthInput = document.getElementById("inputDateOfBirth");
var countryInput = document.getElementById("inputCountry");
var cityInput = document.getElementById("inputCity");
var addressInput = document.getElementById("inputAddress");
var cfInput = document.getElementById("inputCF");
var vatNumberInput = document.getElementById("inputVatNumber");
var registrationForm = document.getElementById("registrationForm");
var italianCitiesSelect = document.getElementById("italianCities");
// Gestore per l'evento di invio del form
registrationForm.addEventListener("submit", function (event) {
    var _this = this;
    event.preventDefault();
    var selectedCity;
    if (cityInput.style.display !== "none") {
        selectedCity = cityInput.value;
    }
    else {
        selectedCity = italianCitiesSelect.value;
    }
    // Ottengo i valori inseriti dall'utente negli input del form e creo un'istanza di oggetto UserData
    var userData = {
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
    };
    // Effettuo una richiesta POST al server inviando i dati utente per la registrazione
    fetch('https://www.alessandromalvatani.it/CODEx/public/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var errorResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!response.ok) return [3 /*break*/, 2];
                    return [4 /*yield*/, response.json()];
                case 1:
                    errorResponse = _a.sent();
                    // Se l'oggetto JSON contiene un campo "error" viene utilizzato come messaggio
                    // altrimenti viene utilizzato un messaggio di errore predefinito
                    throw new Error(errorResponse.error || 'Please fill all the required fileds.');
                case 2: 
                // Se la risposta è ok, analizza il corpo della risposta e restituisci una promise in JSON
                // e specifica il tipo di oggetto che sarà restituito dalla promise tipizzando Promise<ServerResponse>
                return [2 /*return*/, response.json()];
            }
        });
    }); })
        .then(function (data) {
        // Se questa condizione è vera allora l'invio è andato a buon fine
        if (data.message === 'User successfully registered!') {
            var colorClass = 'text-success';
            showMessageModal('Success', data.message, colorClass);
        }
        else { // Se è falsa -> messaggio di errore
            var colorClass = 'text-danger';
            showMessageModal('Error', data.message, colorClass);
        }
    })
        .catch(function (error) {
        // Se c'è un errore nella richiesta o nel parsing del corpo della risposta JSON
        var colorClass = 'text-danger';
        showMessageModal('Error', error.message, colorClass);
    });
});
function showMessageModal(title, message, colorClass) {
    var modalTitle = document.getElementById('messageModalLabel');
    var modalBody = document.getElementById('messageText');
    var messageModal = new bootstrap.Modal(document.getElementById('messageModal'));
    modalTitle.classList.remove('text-success', 'text-danger');
    modalTitle.textContent = title;
    modalTitle.classList.add(colorClass);
    modalBody.textContent = message;
    messageModal.show();
}
