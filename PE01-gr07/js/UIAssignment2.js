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

// Handles the preferences
var prefCounter = 0;
function addPreference(){
    if(!checkPreferences()){
        window.alert("All preferences need to be filled.")
        return;
    }
    var tagName = "pref_"+prefCounter;
    prefCounter++;
    $(".pref-list").append("<div id=\""+tagName+"\" class=\"Preferences\"><b contenteditable=\"true\">Add Preference</b><i class=\"fa fa-times\" onclick=\"removePreference("+tagName+")\"></i></div>");
}

// Removes preferences
function removePreference(idTag){
    $("#"+idTag.id).remove();
}

// Checks if their are valid preferences
function checkPreferences(){
    for(var i=0;i<prefCounter;++i){
        var text = $("#pref_"+i).text();
        if(text=="Add Preference"){
            return false;
        }
    }
    return true;
}

//Registration and cookie saving functions
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function saveCookies(){
    var userName = $('rUserName').val();
    alert(userName);
    var password = $('rPassword').val();
    var first = $('rFirst').val();
    var last = $('rLast').val();
    var email = $('rEmail').val();
    var dob = $('dob').val();
    var proPic = $('proPic').val();
    var address = $('address').val();

   $.cookie = ("theName" , [password, first, last, email, dob, proPic, address])
}

// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

function checkCookies(){
    var userName = $.cookie($("theName"));
    alert(userName);
    if(userName !== ""){
        alert("account with this username already exists");
    }
    else{
        saveCookies();
    }
}

