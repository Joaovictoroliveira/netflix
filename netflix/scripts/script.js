function validacaoIndex() {
    if(document.querySelector("input").value == "") {
        document.getElementById("email").style.border = "solid #ff6600";
        document.getElementById("email-validation").style.display = "block";
    }
}
