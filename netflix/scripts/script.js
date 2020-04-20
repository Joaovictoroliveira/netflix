function validacaoIndex() {
    if(document.querySelector("input").value == "") {
        document.getElementById("email").style.border = ".5px solid #ff6600";
        document.getElementById("email-validation").style.display = "block";
    }
}
