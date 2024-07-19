const mailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnSignIn = document.getElementById("btn-signin");

btnSignIn.addEventListener("click",checkCredentials);

function checkCredentials(){
    // ici il faudra appeler l'API pour vérifier les credentials en BDD
    if(mailInput.value == "test@mail.com" && passwordInput.value =="123"){
        //il faudra recuperer le vrai token
        const token = "lkjdhlkjlkdjfmlkdjmfljmdlmdlkfmldkfm"
        setToken(token);
        // placer le token en cookie pour savoir si on est connecté ou non

        setCookie(roleCookieName, "admin",7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }

}
















/* 
const emailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnValidation = document.getElementById("btn-validation-connexion");


emailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);

function validateForm(){
    const mailOk = validateRequired(emailInput);
    const pwdOk = validateRequired(passwordInput);
    const mailformOk = validateMail(emailInput);
    const pwdformOk = validatePassword(passwordInput)

    if(mailOk && pwdOk && mailformOk && pwdformOk){
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}


function validateMail(input){
    //definition du regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = emailInput.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid"); 
        return false;
    }

}

function validatePassword(input){
    //Définir mon regex : au moins 8 caract maj + min + chiffres + caract spéciaux
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
    
*/