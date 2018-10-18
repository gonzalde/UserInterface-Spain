function personalInfo(){
    document.title = "The Restraunteur - Personal Information";
    var column2 = document.getElementsByClassName("column2");
    for(var i=0;i<column2.length;++i){
        column2[i].style.display="none";
    }
    var pInfo = document.getElementById("personal-info");
    pInfo.style.display = "block";
}

function getOpinions(){
    document.title = "The Restraunteur - Opinions";
    var column2 = document.getElementsByClassName("column2");
    for(var i=0;i<column2.length;++i){
        column2[i].style.display="none";
    }
    var opinonList = document.getElementById("opinion-list");
    opinonList.style.display = "block";
}

// Performs log out.
function restart(){
    var content = document.getElementById("body");
    content.classList.add("hidden");
    document.getElementById("entrance").classList.remove("hidden");
}

// Registration.
function register(){
    document.getElementById("logIn").classList.add("hidden");
    document.getElementById("Register").classList.remove("hidden");
}