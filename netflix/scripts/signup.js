function validacaoSignup() {
    if(document.getElementById("password").value == "") {
        document.getElementById("passwordObrigatory").style.display = "block";
        document.getElementById("password").style.border = "1px solid #f50a16";
    }
}