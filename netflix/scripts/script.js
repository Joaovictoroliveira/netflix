function validacaoIndex() {
    if(document.querySelector("input").value == "") {
        document.getElementById("email").style.border = "solid #ff6600";
        document.getElementById("email-validation").style.display = "block";
    }
}

function validacaoLogin() {
   if(document.getElementById("user").value == "" && document.getElementById("password").value == "") {
       document.getElementById("user").style.borderBottom = "solid #ff6600";
       document.getElementById("user-validation").style.display = "block";
       document.getElementById("password").style.borderBottom = "solid #ff6600";
       document.getElementById("password-validation").style.display = "block";
   }
}