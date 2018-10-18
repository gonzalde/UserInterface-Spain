function restart(){
    var content = document.getElementById("body");
    content.classList.add("hidden");
    document.getElementById("entrance").classList.remove("hidden");
}

function register(){
    document.getElementById("logIn").classList.add("hidden");
    document.getElementById("Register").classList.remove("hidden");
}