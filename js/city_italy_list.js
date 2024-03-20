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
var _this = this;
// Funzione per ottenere la lista delle città italiane dal server
function fetchItalianCitiesList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://www.alessandromalvatani.it/CODEx/public/api/cities-list')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.cities_list];
            }
        });
    });
}
// Funzione per popolare il menu a tendina delle città italiane
function populateItalianCitiesDropdown() {
    return __awaiter(this, void 0, void 0, function () {
        var italianCitiesDropdown, cities, uniqueCities, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    italianCitiesDropdown = document.getElementById('italianCities');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchItalianCitiesList()];
                case 2:
                    cities = _a.sent();
                    uniqueCities = Array.from(new Set(cities)) // Filtra i duplicati utilizzando un set
                    ;
                    italianCitiesDropdown.innerHTML = ""; // Pulisci il dropdown prima di popolare
                    uniqueCities.forEach(function (city) {
                        var option = document.createElement('option');
                        option.value = city;
                        option.text = city;
                        italianCitiesDropdown.appendChild(option);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error: ', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Gestisci il cambio nella selezione del paese
var countrySelect = document.getElementById("inputCountry");
if (countrySelect) {
    countrySelect.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
        var selectedCountry, italianCitiesDropdown, cityInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectedCountry = countrySelect.value;
                    italianCitiesDropdown = document.getElementById('italianCities');
                    cityInput = document.getElementById('inputCity');
                    if (!(selectedCountry === "Italia" && italianCitiesDropdown && cityInput)) return [3 /*break*/, 2];
                    return [4 /*yield*/, populateItalianCitiesDropdown()]; // Popola le città italiane solo se il paese selezionato è Italia
                case 1:
                    _a.sent(); // Popola le città italiane solo se il paese selezionato è Italia
                    italianCitiesDropdown.style.display = "block"; // Mostra il dropdown delle città italiane
                    italianCitiesDropdown.setAttribute("required", ""); // Aggiungi validazione campo
                    cityInput.style.display = "none"; // Nascondi l'input della città generale
                    cityInput.removeAttribute("required"); // Togli validazione campo
                    return [3 /*break*/, 3];
                case 2:
                    if (italianCitiesDropdown && cityInput) {
                        italianCitiesDropdown.style.display = "none"; // Nascondi il dropdown delle città italiane
                        italianCitiesDropdown.removeAttribute("required");
                        cityInput.style.display = "block"; // Mostra l'input della città generale
                        cityInput.setAttribute("required", "");
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
