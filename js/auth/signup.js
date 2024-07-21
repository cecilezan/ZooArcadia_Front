const inputNom = document.getElementById("userNom");
const inputPrenom = document.getElementById("userPrenom");
const inputMail = document.getElementById("userEmail");
const inputPassword = document.getElementById("usermdp");
const inputValidationPassword = document.getElementById("validUsermdp");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscritpion");



inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", inscrireUtilisateur);

function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const validpwdOk = validateConfirmationPassword(inputPassword, inputValidationPassword)

    if(nomOk && prenomOk && mailOk && passwordOk && validpwdOk){
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
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;

    }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
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
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid"); 
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }

}

function inscrireUtilisateur(){
    let dataForm = new FormData(formInscription);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    let raw = JSON.stringify({
      "email": dataForm.get("Email"),
      "name": dataForm.get("NomUser"),
      "prenom": dataForm.get("Prenom"),
      "password": dataForm.get("mdp")
    });
    
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://127.0.0.1:8000/api/registration", requestOptions)
      .then((response) => {
        if(response.ok){
            return response.json();
        }
        alert("erreur lors de l'inscription");
      })
      .then((result) => {
        alert("inscription ok");
        window.location.reload();

        })
      .catch((error) => console.error(error));
}