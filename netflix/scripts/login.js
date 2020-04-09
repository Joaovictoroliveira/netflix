function validacaoLogin() {
    if(document.getElementById("user").value == "" && document.getElementById("password").value == "") {
        document.getElementById("user").style.borderBottom = "solid #ff6600";   
        document.getElementById("password").style.borderBottom = "solid #ff6600";   
        document.getElementById("p-validation").style.display = "block";
        document.getElementById("p-validation2").style.display = "block";
    }else if(document.getElementById("user").value == "" && document.getElementById("password").value != "") {
        document.getElementById("user").style.borderBottom = "solid #ff6600";
        document.getElementById("p-validation").style.display = "block";
    }else if(document.getElementById("user").value != "" && document.getElementById("password").value == "") {
        document.getElementById("password").style.borderBottom = "solid #ff6600";
        document.getElementById("p-validation2").style.display = "block";
    }
}
