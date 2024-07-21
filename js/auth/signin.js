const mailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnSignIn = document.getElementById("btn-signin");
const signinForm = document.getElementById("signinForm");

btnSignIn.addEventListener("click",checkCredentials);

function checkCredentials(){
    let dataForm = new FormData(signinForm);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    let raw = JSON.stringify({
      "username": dataForm.get("username"),
      "password": dataForm.get("mdp")
    });
    
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => {
        if(response.ok){
            return response.json();
        }
        else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
      })
      .then(result => {
        const token = result.apiToken;
        setToken(token);

        setCookie(roleCookieName, result.roles[0], 7);
        window.location.replace("/");

        })
      .catch(error => console.log('error',error));
    }