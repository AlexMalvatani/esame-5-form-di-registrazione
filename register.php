<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CODEx Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="./css/styles.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="container d-flex justify-content-center">
        <h1 class="codex display-1 mb-0 mt-2">CODE<span class="x">x</span></h1>
    </div>

    <div class="container d-flex justify-content-center mt-3">
        <h6 class="subtitle">Your favourite streaming platform!</h6>
    </div>

    <div class="container mt-5">
        <!-- Form di registrazione -->
        <form class="row g-3 needs-validation" id="registrationForm" novalidate>
            <div class="col-md-6">
                <label for="inputFirstName" class="form-label text-primary">First Name</label>
                <input type="text" class="form-control" id="inputFirstName" name="first_name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid first name.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputLastName" class="form-label text-primary">Last Name</label>
                <input type="text" class="form-control" id="inputLastName" name="last_name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid last name.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputUsername" class="form-label text-primary">Username</label>
                <input type="text" class="form-control" id="inputUsername" name="name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid username.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputEmail" class="form-label text-primary">Email</label>
                <input type="email" class="form-control" id="inputEmail" name="email" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid email.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputPassword" class="form-label text-primary">Password</label>
                <input type="password" class="form-control" id="inputPassword" name="password" minlength="6" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Password must be at least 6 characters long.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputDateOfBirth" class="form-label text-primary">Date of Birth</label>
                <input type="date" class="form-control" id="inputDateOfBirth" name="date_of_birth" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid date of birth.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputCountry" class="form-label text-primary">Country</label>
                <select class="form-select" id="inputCountry" name="country" required>
                    <option value="" selected disabled>Select Country</option>
                </select>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid country.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label text-primary">City</label>
                <input type="text" class="form-control" id="inputCity" name="city" required>

                <select class="form-select form-control" id="italianCities" style="display: none;" required>
                    <option value="" selected disabled>Select Country</option>
                </select>

                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputAddress" class="form-label text-primary">Address</label>
                <input type="text" class="form-control" id="inputAddress" name="address" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid address.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputCF" class="form-label text-primary labelCF">Fiscal Code</label>
                <input type="text" class="form-control" id="inputCF" name="CF" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid fiscal code.
                </div>
            </div>
            <div class="col-md-6">
                <label for="inputVatNumber" class="form-label text-primary">VAT Number (optional)</label>
                <input type="text" class="form-control" id="inputVatNumber" name="vat_number">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please provide a valid VAT number.
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-5 mb-5">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>

        <!-- Modal per mostrare messaggi di errore/conferma -->
        <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background-color: rgb(40, 40, 40);">
                    <div class="modal-header d-flex justify-content-center">
                        <h5 class="modal-title" id="messageModalLabel"></h5>
                    </div>
                    <div class="modal-body d-flex justify-content-center" style="color: white;">
                        <!-- Contenuto del messaggio -->
                        <p id="messageText"></p>
                    </div>
                    <div class="modal-footer d-flex justify-content-center" style="color: white;">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="./js/register_validation.js"></script>
    <script src="./js/register.js"></script>
    <script src="./js/country_list.js"></script>
    <script src="./js/city_italy_list.js"></script>

    <!-- Gestione Label Codice Fiscale -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const labelCF = document.querySelector(".labelCF");
            const country = document.getElementById("inputCountry");

            if (country.value.toLowerCase() === "italia") {
                labelCF.textContent = "Fiscal Code";
            } else {
                labelCF.textContent = "National Insurance Number";
            }

            country.addEventListener("change", function() {

                if (country.value.toLowerCase() === "italia") {
                    labelCF.textContent = "Fiscal Code";
                } else {
                    labelCF.textContent = "National Insurance Number";
                }
            });
        });
    </script>
</body>

</html>